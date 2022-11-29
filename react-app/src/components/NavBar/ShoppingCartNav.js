import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

const ShoppingCartNav = () => {
  const [showCart, setShowCart] = useState(false)
  const { cart, setCart } = useCart()



  console.log(cart)

  return (
    <>
      <i class="fa-solid fa-bag-shopping" onClick={() => setShowCart(!showCart)}></i>
      {showCart &&
        <div className='cart-dropdown'>
          <h2>cart items</h2>
          {cart?.map(item => (
            <>
              <p>{item.id}</p>
              <p>{item.quantity}</p>
            </>
          ))}
        </div>}
    </>
  )
}

export default ShoppingCartNav
