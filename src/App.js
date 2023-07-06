import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./App/Homepage/Homepage";
import Search from "./App/Search/Search";
import Product from "./App/Product/Product";
import ProductDetails from "./App/Product/ProductDetails";
const App = () => {


  return (

    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/search" element= {<Search/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/product/:id" element={<ProductDetails/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
