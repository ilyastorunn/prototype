import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Corporate from "./pages/Corporate";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import OrderInquiry from "./pages/OrderInquiry";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/order-inquiry" element={<OrderInquiry />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
