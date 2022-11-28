import { createContext, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const CartContext = createContext();

export default function CartProvider(props) {
  const [cart, setCart] = useState([]);
  const currentUser = useSelector(state => state.session.user)

  useEffect(() => {
    setCart(localStorage.getItem(currentUser?.email))
  },[])

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
