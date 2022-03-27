import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import { CartContext } from "../../App";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./Navbar.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
  },
});

const Navbar = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  return (
    <ThemeProvider theme={theme}>
      <nav className="navbar">
        <div className="nav-contents">
          <div className="nav-logo">
            <Logo />
          </div>
          <Badge badgeContent={cartItems.length} color="primary">
            <ShoppingCartIcon
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/cart")}
            />
          </Badge>
        </div>
      </nav>
    </ThemeProvider>
  );
};

export default Navbar;
