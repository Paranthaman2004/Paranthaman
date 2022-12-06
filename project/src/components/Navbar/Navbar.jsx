import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { HiOutlineChevronDown } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineComment } from "react-icons/ai";
import { BiStore } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Profile from '../../asserts/profile.webp'
import Cart from "../Cart/Cart";
import { useStates } from "../../States";
const Navbar = () => {
  const {cartShow,setCartShow,totalQuatity,setTotalQuatity,cartItems} = useStates();
    const onclick = () => {
        setTotalQuatity(totalQuatity+1)
    }
  return (
    <>
    <div className="nav">
      <div className="nav_left">
        <div className="logo">
          <Link to="/">M</Link>
        </div>
        <div className="search_box">
          <span className="search_icon">
            <BiSearchAlt />
          </span>
          <input type="text" id="search_input" className="search_input_box" placeholder="Search Product" />
        </div>
        <div className="nav_left_list">
            <ul className="nav_l_list">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/product' className="prod">Product<p> &nbsp; </p><HiOutlineChevronDown className="arrow"/></Link></li>
                <li><Link to='/'>Promo </Link></li>
                <li><Link to='/'>Contact_us</Link></li>
            </ul>
        </div>
      </div>
      <div className="nav_right">
        <div className="nav_right_list">
            <ul className="nav_r_list">
                <li><IoNotificationsOutline className="nav_icon"/></li>
                <li><AiOutlineComment className="nav_icon"/></li>
                <li><BiStore className="nav_icon"/></li>
                <li onClick={()=>setCartShow(true)}><span className="cart_item_count">{cartItems.length}</span><AiOutlineShoppingCart className="nav_icon cart"/></li>
            </ul>
        </div>
        <Link to="/"><div className="profile" onClick={onclick}>
            <img src={Profile} alt="" />
        </div></Link>
        {cartShow && <Cart show={setCartShow} qty={cartItems.length} />}
      </div>
    </div>
    </>
  );
};
export default Navbar;


