import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

// const CartItemNav = async ({item}) => {
//   const itemDetails = await fetch()
// }

const ShoppingCartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity)
  const { cart, setCart } = useCart()
  const currentUser = useSelector(state => state.session.user)

  const deleteItem = (itemId) => {
    const newCart = cart.filter(item => item.id !== itemId)
    setCart(newCart)
    localStorage.setItem((currentUser?.email || 'default'), JSON.stringify(newCart))
  }

  const editCartItem = (quantity) =>{
    setQuantity(quantity)

    const newCart = cart.map(cartItem => {
      if (item.id === cartItem.id){
        return {
          id: cartItem.id,
          quantity
        }
      }
    })

    setCart(newCart)
    localStorage.setItem((currentUser?.email || 'default'), JSON.stringify(newCart))
  }

  console.log("$$$$$$$$$$$$$$$$$$$$Here's the item$$$$$$$$$$$$$$$$$$$$$", item)

  return (
    <div className='cart-item-nav' >
      <p>{item.id}</p>
      <input
        type='number'
        min="1"
        max="100"
        value={quantity}
        onChange={(e)=> editCartItem(e.target.value)}
      ></input>
      <i class="fa-solid fa-trash" onClick={() => deleteItem(item.id)}></i>
    </div >
  )
}

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
            // <div className='cart-item-nav'>
            //   <p>{item.id}</p>
            //   <input
            //     type='number'
            //     min="1"
            //     max="100"
            //     value={item.quantity}

            //   ></input>
            //   <i class="fa-solid fa-trash" onClick={() => deleteItem(item.id)}></i>
            // </div>
            <ShoppingCartItem item={item} />
          ))}
        </div>}
    </>
  )
}

export default ShoppingCartNav
