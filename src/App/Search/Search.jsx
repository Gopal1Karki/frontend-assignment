import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./Search.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
      } catch (error) {
        console.error("Error retrieving the data", error);
      }
    };

    fetchData();
  }, []);
  const handleClearSearch = () => {
    setSearch("");
    setFilteredData([]);
  };
  const handleSearch = () => {
    const filtered = data.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const gotoProductDetails = (id) => {
    navigate(`/product/${id}`)
  }

  return (
    <>
      <Navbar />
      <div className="search_main">

        <input
          type="search"
          name="src"
          placeholder="Search products here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleClearSearch}>Clear</button>
      </div>
      {search && (
        <div className="product-list" >
          {filteredData.map((item) => (
            <div key={item.id} className="product-item" onClick={()=>gotoProductDetails(item.id)}>
              <div className="product-image">
                <img
                  src={item.image}
                  style={{ height: "150px", width: "150px" }}
                  alt="product"
                />
              </div>
              <div className="product-details">
                <p>{item.title}</p>
                <p>${item.price}</p>
                <p>{item.category}</p>
                <button>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </>
  );
};

export default Search;
