import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import axios from "axios";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";


const Homepage = () => {
    const navigate = useNavigate()
    const [value, setValue] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://fakestoreapi.com/products?limit=4");
                setValue(response.data)
            } catch (error) {
                console.error("Error fetching product data", error);
            }
        };
        fetchData();
    }, []);

    const gotoProductDetails = (id) => {
        navigate(`/product/${id}`)
    }
    const listItem = value.map((item) => (
        <div key={item.id} className="product-item" onClick={()=> gotoProductDetails(item.id)}>
            <div className="product-image">
                <img src={item.image} style={{ height: "150px", width: "150px" }} alt="product" />
            </div>
            <div className="product-details">
                <p>{item.title}</p>
                <p> ${item.price}</p>
                <p>{item.category}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    ))
    const gotoProduct =()=>{
        navigate('/product')
    }
    return (
        <>
            <Navbar />
            <div className="homepage_main">
                <div className="slogan">
                    <h1>if shopping doesn’t make you glad, at that point you’re in the wrong shop.</h1>
                </div>
                <div className="product-list">
                    {listItem}
                </div>
                <div  className="seemore">
                    <p>For more items.</p>
                    <button onClick={gotoProduct}>See More</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Homepage;
