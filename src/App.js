import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductPage from "./components/ProductPage";
import CartPage from "./components/CartPage";
import SurveyPage from "./components/SurveyPage";

export default function App() {
  return (
    <Router>
      <header className="header">
        <h1>Nightreign</h1>
        <nav>
          <Link to="/">Shop</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/survey">Survey</Link>
        </nav>
      </header>

      <div className="container">
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/survey" element={<SurveyPage />} />
        </Routes>
      </div>

      <footer style={{ backgroundColor: "#22223b", color: "white", textAlign: "center", padding: "10px", marginTop: "40px" }}>
        <p>Enjoy free shipping on orders over $50! Limited time only.</p>
        <p>&copy; 2025 Nightreign</p>
      </footer>
    </Router>
  );
}
