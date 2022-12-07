import { createContext, useContext, useState } from "react";
// import {toast} from 'react-hot-toast'
const Context = createContext();
export const States = ({ children }) => {
  const [cartShow, setCartShow] = useState(false);
  const [totalQuatity, setTotalQuatity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [qty, setQty] = useState(1);
  const [filterShow, setFilterShow] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const AddtoCart = (product) => {
    const find = cartItems.find((p) => p.pname === product.pname);
    if (!find) {
      setCartItems((prevCartItems) => [...prevCartItems, { ...product }]);
      setTotalPrice(totalPrice + product.price * product.qty);
      // alert(`${product.pname} added Successfully`)
      // toast(`${product.pname} added Successfully`)
    } 
    else {
      product.qty=product.qty+1;
      setTotalPrice(totalPrice + product.price);
      //alert(`${product.pname} already added in the cart`);
      // toast('Already added in the Cart')
    }
  };
  const RemoveOnCart = (product) => {
    const delteProduct = cartItems.find((p) => p.pname === product.pname);
    const afterDeleteItem = cartItems.filter(
      (item) => delteProduct.pname !== item.pname
    );
    setTotalPrice(totalPrice - delteProduct.qty * delteProduct.price);
    setCartItems(afterDeleteItem);
  };
  const OnInc = (item) => {
      item.qty = item.qty+1;
      setTotalPrice(totalPrice + item.price);
    };
    const OnDec = (item) => {
      if(item.qty==1){
        item.qty = 1;
      }
      else{
        item.qty = item.qty-1;
        setTotalPrice(totalPrice - item.price);
    }
  };
  const products = [
    {
      img: "https://res.cloudinary.com/do4m8xtim/image/upload/v1670251417/apple_cjzjqz.jpg",
      pname: "Apple",
      price: 199,
      category: "Fruits",
      wishlist: "filled",
      rating: 4,
      qty: 1,
    },
    {
      img: "https://res.cloudinary.com/do4m8xtim/image/upload/v1670251418/butter_vv2cx2.jpg",
      pname: "Amul Butter",
      price: 83,
      category: "dairyandegg",
      wishlist: "outline",
      rating: 3,
      qty: 1,
    },
    {
      img: "https://res.cloudinary.com/do4m8xtim/image/upload/v1670251421/cheese_pplchf.jpg",
      pname: "Cheese",
      price: 108,
      wishlist: "outline",
      category: "dairyandegg",
      rating: 5,
      qty: 1,
    },
  ];
  return (
    <Context.Provider
      value={{
        cartShow,
        setCartShow,
        filterShow,
        totalQuatity,
        setFilterShow,
        setTotalQuatity,
        totalPrice,
        setTotalPrice,
        qty,
        setQty,
        cartItems,
        setCartItems,
        AddtoCart,
        OnInc,
        OnDec,
        RemoveOnCart,
        products,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const useStates = () => useContext(Context);
