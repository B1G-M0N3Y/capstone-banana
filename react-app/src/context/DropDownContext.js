import { createContext, useContext, useEffect } from "react";

export const DropDownContext = createContext();

export default function PageSizeProvider(props) {
  const = 

  return (
    <DropDownContext.Provider
      value={{
        isMobile
      }}
    >
      {props.children}
    </DropDownContext.Provider>
  )
}

export const usePageSize = () => useContext(PageSizeContext)
