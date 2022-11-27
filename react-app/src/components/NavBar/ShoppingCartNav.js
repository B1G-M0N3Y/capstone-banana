import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const ShoppingCartNav = () => {
  const [cartItems, setCartItems] = useState([])
  const [showCart, setShowCart] = useState(false)

  useEffect(() => {
    console.log(showCart)
  }, [showCart])


  return (
    <>
      <i class="fa-solid fa-bag-shopping" onClick={() => setShowCart(!showCart)}></i>
      {showCart &&
        <div className='cart-dropdown'>
          <h2>cart items</h2>
          {cartItems?.map(item => (
            <p>{item.name}</p>
          ))}
        </div>}
    </>
  )
}

export default ShoppingCartNav
