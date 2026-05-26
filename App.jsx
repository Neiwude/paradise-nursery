import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react";
import ProductList from "./ProductList.jsx";
import CartItem from "./CartItem.jsx";
import AboutUs from "./AboutUs.jsx";
import "./App.css";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link className="logo" to="/">
        Paradise Nursery
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/products">Plants</Link>
        <Link className="cart-link" to="/cart">
          <ShoppingCart size={22} />
          <span>{totalItems}</span>
        </Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <main className="landing-page">
      <div className="landing-overlay">
        <section className="hero">
          <h1>Paradise Nursery</h1>
          <p>
            Bring nature home with beautiful, healthy houseplants for every room.
          </p>
          <Link className="primary-button" to="/products">
            Get Started
          </Link>
        </section>
      </div>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
