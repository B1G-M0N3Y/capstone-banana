import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider(props) {
  const [cart, setCart] = useState(0);

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
