import React from "react";
import { useStates } from "../../States";
import "./CheckoutProduct.css";
const CheckoutProduct = () => {
  const { cartItems } = useStates();
  console.log(cartItems);
  return (
    <div className="left_container">
      <div className="c_box">
        <div className="check_product_details">
          <div className="product_imgs">
            <ul>
              {cartItems.map((item, i) => {
                return (
                  <li>
                    <img src={item.img} alt="" />
                  </li>
                );
              })}
            </ul>
            {(cartItems.length>=1)?("If you want remove go to cart"):("Add Product")}
          </div>
        </div>
        <div className="total_price"></div>
        <div className="coupon"></div>
        <div className="total_amount"></div>
      </div>
    </div>
  );
};
export default CheckoutProduct;
