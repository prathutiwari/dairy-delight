import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import ProductsList from "./components/ProductsList";
import ProductDescription from "./components/ProductDescription";
import Blogs from "./components/Blogs";
import BlogDescription from "./components/BlogDescription";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/product/:product-cateory/:id" element={<ProductDescription />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:blog-title" element={<BlogDescription />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
