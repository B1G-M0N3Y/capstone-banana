import { createContext, useContext, useState } from "react";

export const DropDownContext = createContext();

export default function DropDownProvider(props) {
  const [ open, setOpen ] = useState(false)

  return (
    <DropDownContext.Provider
      value={{
        open, setOpen
      }}
    >
      {props.children}
    </DropDownContext.Provider>
  )
}

export const useDropDown = () => useContext(DropDownContext)
