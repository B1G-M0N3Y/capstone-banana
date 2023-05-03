import { createContext, useContext } from "react";
import { useMediaQuery } from 'react-responsive'

export const PageSizeContext = createContext();

export default function CartProvider(props) {
  const isMobile = useMediaQuery({ query: '(max-width: 480)'})

  return (
    <PageSizeContext.Provider
      value={{
        isMobile
      }}
    >
      {props.children}
    </PageSizeContext.Provider>
  )
}

export const useCart = () => useContext(PageSizeContext)
