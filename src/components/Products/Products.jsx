import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../App";
import { Button } from "@mui/material";
import { createCartItem } from "../../utils/cartUtils";
import "./Products.css";

const Products = ({ data }) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const addToCart = (item) => {
    const index = cartItems.findIndex((_) => _.id === item.id);
    if (index !== -1) {
      const cartItemsCopy = [...cartItems];
      const currQty = cartItemsCopy[index].qty;
      cartItemsCopy[index] = { ...cartItemsCopy[index], qty: currQty + 1 };
      setCartItems(cartItemsCopy);
    } else {
      const newCartItem = createCartItem(item);
      setCartItems((prev) => [...prev, newCartItem]);
    }
    navigate("/cart");
  };

  return (
    <div className="products">
      <div className="products-list">
        {data.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt="" className="pdt-img" />
            <div className="pdt-brand-name">{product.brand}</div>
            <div className="pdt-name" title={product.name}>
              {product.name}
            </div>
            <div className="pdt-price">₹{product.price}</div>
            <span>
              {"   "}
              <Button
                color="primary"
                variant="contained"
                size="small"
                disableElevation
                onClick={() => {
                  addToCart(product);
                }}
              >
                Add to Cart
              </Button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
