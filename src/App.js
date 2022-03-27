import { useEffect, createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import "./App.css";
import { getCart, setCart, getSaved, setSaved } from "./utils/cartUtils";

const NotFound = () => {
  return (
    <h1 style={{ textAlign: "center", marginTop: "4rem" }}>Page Not Found</h1>
  );
};

export const CartContext = createContext();

function App() {
  const [cartItems, setCartItems] = useState(getCart() || []);
  const [savedItems, setSavedItems] = useState(getSaved() || []);

  useEffect(() => {
    setCart();
    setSaved();
  }, []);

  useEffect(() => {
    setCart(cartItems);
  }, [cartItems]);

  useEffect(() => {
    setSaved(savedItems);
  }, [savedItems]);

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, savedItems, setSavedItems }}
    >
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
