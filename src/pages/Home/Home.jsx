import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import productData from "../../products.json";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <Products data={productData} />
      </div>
    </div>
  );
}

export default Home;
