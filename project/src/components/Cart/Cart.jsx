import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { AiOutlineShopping,AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { IoChevronBackSharp } from "react-icons/io5";
import { useStates } from "../../States";
import {MdDelete} from 'react-icons/md';
const Cart = ({ show, qty }) => {
  const { cartItems,totalPrice } = useStates();
  return (
    <div className="cart_window">
      <div className="cart_container">
        <div className="top">
          <button onClick={() => show(false)}>
            <IoChevronBackSharp />
          </button>
          <p>
            Your Cart <span>({cartItems.length})</span>
          </p>
        </div>
        {qty === 0 ? (
          <div className="cart_empty">
            <AiOutlineShopping className="bag_icon" />
            <h2>Your Shoping Cart is Empty</h2>
            <button onClick={() => show(false)} className="cart_btn">
              Continue Shoping
            </button>
          </div>
        ) : (
          <div className="cart_items">
            {cartItems.map((item,i) => {
                return (
                  <div className="p_box">
                    <img src={item.img} alt="" />
                    <div className="prod_detail">
                      <p>{item.pname}</p>
                      <p>₹{item.price*item.qty}</p>
                    </div>
                    <div className="qty">
                      <span><AiOutlineMinus /></span>
                      <span>{item.qty}</span>
                      <span><AiOutlinePlus /></span>
                    </div>
                    <div className="remove">
                      <MdDelete/>
                    </div>
                  </div>
                );
            })}
            <div className="check_out">
              <p>Total Amount : ₹{totalPrice}</p>
              <button onClick={() => show(false)}>
                <Link to="/payment">Check out</Link>{" "}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
