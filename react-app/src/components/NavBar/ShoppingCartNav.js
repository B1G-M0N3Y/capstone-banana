import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

// const CartItemNav = async ({item}) => {
//   const itemDetails = await fetch()
// }

const ShoppingCartNav = () => {
  const [showCart, setShowCart] = useState(false)
  const { cart, setCart } = useCart()
  const currentUser = useSelector(state => state.session.user)

  const deleteItem=(itemId)=>{
    const newCart = cart.filter(item => item.id !== itemId)
    setCart(newCart)
    localStorage.setItem((currentUser?.email||'default'), JSON.stringify(newCart))
  }

  console.log(cart)

  return (
    <>
      <i class="fa-solid fa-bag-shopping" onClick={() => setShowCart(!showCart)}></i>
      {showCart &&
        <div className='cart-dropdown'>
          <h2>cart items</h2>
          {cart?.map(item => (
            <div className='cart-item-nav'>
              <p>{item.id}</p>
              <p>{item.quantity}</p>
              <i class="fa-solid fa-trash" onClick={() => deleteItem(item.id)}></i>
            </div>
          ))}
        </div>}
    </>
  )
}

export default ShoppingCartNav
