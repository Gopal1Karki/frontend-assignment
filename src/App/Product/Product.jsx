import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setValue(response.data);
      } catch (error) {
        console.error("Error fetching product data", error);
      }
    };
    fetchData();
  }, []);

  const gotoProductDetails = (id) => {
    navigate(`/product/${id}`);
  };

  const listItem = value.map((item) => (
    <div
      key={item.id}
      className="product-item"
      onClick={() => gotoProductDetails(item.id)}
    >
      <div className="product-image">
        <img
          src={item.image}
          style={{ height: "150px", width: "150px" }}
          alt="product"
        />
      </div>
      <div className="product-details">
        <p>{item.title}</p>
        <p> ${item.price}</p>
        <p>{item.category}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  ));

  return (
    <>
      <Navbar />
      <div className="product-list">{listItem}</div>
      <Footer />
    </>
  );
};

export default Product;
