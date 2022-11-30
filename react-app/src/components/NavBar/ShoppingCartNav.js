import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

const ShoppingCartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item?.quantity)
  const [itemDetails, setItemDetails] = useState({})
  const { cart, setCart } = useCart()
  const currentUser = useSelector(state => state.session.user)

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/items/${item.id}`)
      const responseData = await response.json();
      setItemDetails(responseData)
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (item) setQuantity(item.quantity)
  }, [cart])

  const deleteItem = (itemId) => {
    const newCart = cart.filter(item => item?.id !== itemId)
    setCart(newCart)
    localStorage.setItem((currentUser?.email || 'default'), JSON.stringify(newCart))
  }

  const editCartItem = (quantity) => {
    setQuantity(quantity)

    const newCart = cart.map(cartItem => {
      if (item?.id === cartItem?.id) {
        return {
          id: cartItem.id,
          quantity
        }
      } else {
        return cartItem
      }
    })

    setCart(newCart)
    localStorage.setItem((currentUser?.email || 'default'), JSON.stringify(newCart))
  }

  if (itemDetails.images?.length) {
    console.log("image url for ", itemDetails?.name, ": ", itemDetails?.images[0])
  }

  return (
    <div className='cart-item-nav' >
      <div className='cart-item-left'>
        {itemDetails.images?.length > 0 &&
          <img
            src={itemDetails?.images[0].image_url}
            alt={itemDetails.name}
            className='cart-item-nav-img'>
          </img>
        }
        <div>
          <p>{itemDetails?.name}</p>
          <input
            className='quantity-input'
            type='number'
            min="1"
            max="100"
            value={quantity}
            onChange={(e) => editCartItem(e.target.value)}
          ></input>
        </div>
      </div>
      <i class="fa-solid fa-trash" onClick={() => deleteItem(item?.id)}></i>
    </div >
  )
}

const ShoppingCartNav = () => {
  const [showCart, setShowCart] = useState(false)
  const { cart, setCart } = useCart()

  return (
    <>
      <i class="fa-solid fa-bag-shopping" onClick={() => setShowCart(!showCart)}></i>
      {showCart &&
        <div className='cart-dropdown'>
          {cart?.map(item => (
            <ShoppingCartItem item={item} />
          ))}
          <button>Checkout</button>
        </div>}
    </>
  )
}

export default ShoppingCartNav
