import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetails.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(
                    `https://fakestoreapi.com/products/${id}`
                );
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product details ", error);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading.....</div>;
    }

    return (
        <>
            <Navbar />
            <div className="pdmain">
                <div className="goback">
                    <Link to="/product">back to Product List</Link>
                </div>
                <div className="display-item">
                    <div className="display-image">
                        <img src={product.image} style={{ height: "150px", width: "150px" }} alt="product" />
                    </div>
                    <div className="display-details">
                        <p>{product.title}</p>
                        <p>{product.description}</p>
                        <p> ${product.price}</p>
                        <p>{product.category}</p>
                        <button>Add to Cart</button>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
};

export default ProductDetails;
