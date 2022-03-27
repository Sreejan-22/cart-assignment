import { useContext } from "react";
import { CartContext } from "../../App";
import Navbar from "../../components/Navbar/Navbar";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import "./Cart.css";

const calculateTotal = (items) => {
  let sum = 0;
  items.forEach((item) => {
    sum += item.price * item.qty;
  });
  return sum;
};

const Cart = () => {
  const { cartItems, setCartItems, savedItems, setSavedItems } =
    useContext(CartContext);

  const changeQty = (id, type) => {
    // type => "plus", "minus"
    const index = cartItems.findIndex((_) => _.id === id);
    const cartItemsCopy = [...cartItems];
    const currQty = cartItemsCopy[index].qty;
    if (type === "plus") {
      cartItemsCopy[index] = { ...cartItemsCopy[index], qty: currQty + 1 };
    } else {
      if (currQty > 1) {
        cartItemsCopy[index] = { ...cartItemsCopy[index], qty: currQty - 1 };
      }
    }
    setCartItems(cartItemsCopy);
  };

  const removeCartItem = (id) => {
    if (window.confirm("Are you sure you want to remove this item?")) {
      let cartItemsCopy = [...cartItems];
      cartItemsCopy = cartItemsCopy.filter((item) => item.id !== id);
      setCartItems(cartItemsCopy);
    }
  };

  const moveFromCartToSaved = (item) => {
    let savedItemsCopy = [...savedItems];
    let cartItemsCopy = [...cartItems];
    cartItemsCopy = cartItemsCopy.filter((_) => _.id !== item.id);
    savedItemsCopy.push(item);
    setSavedItems(savedItemsCopy);
    setCartItems(cartItemsCopy);
  };

  const moveFromSavedToCart = (item) => {
    let savedItemsCopy = [...savedItems];
    let cartItemsCopy = [...cartItems];
    savedItemsCopy = savedItemsCopy.filter((_) => _.id !== item.id);
    cartItemsCopy.push(item);
    setSavedItems(savedItemsCopy);
    setCartItems(cartItemsCopy);
  };

  return (
    <div className="container">
      <Navbar />
      <h1 style={{ margin: "2rem 0 0 4rem" }}>Cart</h1>
      <br />
      <br />
      <div className="cart-container">
        {cartItems.length > 0 ? (
          <>
            <div className="cart">
              {cartItems.map((item) => (
                <div className="cart-pdt" key={item.id}>
                  <img src={item.image} alt="" />
                  <div className="cart-pdt-details">
                    <h2>{item.name}</h2>
                    <h3>₹{item.price}</h3>
                    <div className="cart-pdt-qty">
                      <RemoveIcon onClick={() => changeQty(item.id, "minus")} />
                      <span>{item.qty}</span>
                      <AddIcon onClick={() => changeQty(item.id, "plus")} />
                    </div>
                    <h3>Subtotal: ₹{item.price * item.qty}</h3>
                    <div className="cart-pdt-btns">
                      <Button
                        color="secondary"
                        variant="contained"
                        size="small"
                        disableElevation
                        onClick={() => removeCartItem(item.id)}
                      >
                        Delete from Cart
                      </Button>
                      &nbsp;&nbsp;&nbsp;
                      <Button
                        color="primary"
                        variant="contained"
                        size="small"
                        disableElevation
                        onClick={() => moveFromCartToSaved(item)}
                      >
                        Save for Later
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <br />
            <br />
            <div className="cart-total">
              <h1>Total: ₹{calculateTotal(cartItems)}</h1>
            </div>
          </>
        ) : (
          <h2 style={{ textAlign: "center" }}>Cart is Empty</h2>
        )}
        <br />
        {savedItems.length > 0 ? (
          <>
            <hr className="divider" />
            <br />
            <h1 style={{ margin: "2rem 0 0 4rem" }}>Saved Items</h1>
            <br />
            <br />
            <div className="saved">
              {savedItems.map((item) => (
                <div className="cart-pdt" key={item.id}>
                  <img src={item.image} alt="" />
                  <div className="cart-pdt-details">
                    <h2>{item.name}</h2>
                    <h3>₹{item.price}</h3>
                    <p style={{ fontSize: "1.2rem" }}>Qty: {item.qty}</p>
                    <h3>Subtotal: ₹{item.price * item.qty}</h3>
                    <Button
                      color="secondary"
                      variant="contained"
                      size="small"
                      disableElevation
                      onClick={() => moveFromSavedToCart(item)}
                      style={{ alignSelf: "flex-start" }}
                    >
                      Move to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Cart;
