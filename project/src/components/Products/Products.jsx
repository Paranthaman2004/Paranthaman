import React from "react";
import "./Products.css";
import { AiTwotoneStar } from "react-icons/ai";
import { useStates } from "../../States";
import { AiFillHeart } from "react-icons/ai";
const Product = () => {
  const { products, setToggle,AddtoCart } = useStates();

  return (
    <div className="products">
      {products.map((product, i) => {
        const wishToggle = () => {
          setToggle(false);
        };
        return (
          <div className="box">
            <img key={i} src={product.img} alt="" />
            <div className="product_detail">
              <p>{product.pname}</p>
              <p>₹{product.price}</p>
            </div>
            <div className="rating">
              <h4 className="rate">
                {product.rating}
                <AiTwotoneStar className="star" />
              </h4>
            </div>
            <div className="box_btn">
              <div className="buy_btn_container">
                <button className="buy_btn">Buy Now</button>
              </div>
              <div className="add_cart_container">
                <button onClick={()=>AddtoCart(product)} className="add_cart">Add to Cart</button>
                <span className="wishlist_container">
              <AiFillHeart onClick={wishToggle} className={product.wishlist} />
            </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
