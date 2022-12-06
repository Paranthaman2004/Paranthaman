import { createContext,useContext,useState } from "react";
const Context = createContext();
export const States = ({children}) =>{
    const [cartShow, setCartShow] = useState(false)
    const [totalQuatity, setTotalQuatity] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [qty, setQty] = useState(1)
    const [filterShow,setFilterShow] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const AddtoCart = (product)=>{
        setCartItems((prevCartItems)=>[...prevCartItems,{...product}])
    }
    const products = [
        {
            img:"https://res.cloudinary.com/do4m8xtim/image/upload/v1670251417/apple_cjzjqz.jpg",
            pname:"Apple",
            price:199,
            category:"Fruits",
            wishlist:"filled",
            rating:4,
            qty:1,
        },
        {
            img:"https://res.cloudinary.com/do4m8xtim/image/upload/v1670251418/butter_vv2cx2.jpg",
            pname:"Amul Butter",
            price:83,
            category:"dairyandegg",
            wishlist:'outline',
            rating:3,
            qty:1,
        },
        {
            img:"https://res.cloudinary.com/do4m8xtim/image/upload/v1670251421/cheese_pplchf.jpg",
            pname:"Cheese",
            price:108,
            wishlist:"outline",
            category:"dairyandegg",
            rating:5,
            qty:1,
        },
        
    ]
    return (
        <Context.Provider value={{
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
            products,
        }}>
            {children}
        </Context.Provider>
    );
}
export const useStates = () => useContext(Context)
