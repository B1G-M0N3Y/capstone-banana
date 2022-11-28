import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider(props) {
  const [cart, setCart] = useState([]);

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
