import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <a href="/">
        <img
          width="75"
          src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          alt="Flipkart"
          title="Flipkart"
          className="flipkart-img"
        />
      </a>
      <a className="logo-lower" href="/">
        Explore <span>Plus</span>
        <img
          width="10"
          alt=""
          src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
        />
      </a>
    </div>
  );
};

export default Logo;
