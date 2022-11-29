import { createContext, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const CartContext = createContext();

export default function CartProvider(props) {
  const [cart, setCart] = useState([]);
  const currentUser = useSelector(state => state.session.user)

  useEffect(() =>{
    setCart(JSON.parse(localStorage.getItem(currentUser?.email || 'default')))
    console.log("in cart provider", cart)
  },[currentUser])

  return (
    <CartContext.Provider
      value={{
        cart, setCart
      }}
    >
      {props.children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
