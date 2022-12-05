import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

const ShoppingCartItem = ({ item, cart, setCart }) => {
  const [quantity, setQuantity] = useState(item?.quantity)
  const [itemDetails, setItemDetails] = useState({})
  const currentUser = useSelector(state => state.session.user)

  useEffect(() => {
    if (item) setQuantity(item.quantity)
  }, [cart])

  const deleteItem = (itemId) => {
    console.log('when clicked', itemId)
    console.log(itemId)
    const newCart = cart.filter(item => {
      console.log('deleted id', itemId)
      console.log('loop id', item)
      return item?.id !== itemDetails.id
    })
    setCart(newCart)
    localStorage.setItem((currentUser?.email || 'default'), JSON.stringify(newCart))
  }

  useEffect(() => {
    async function fetchData() {
      console.log(item.id)
      const response = await fetch(`/api/items/${item.id}`)
      const responseData = await response.json();
      setItemDetails(responseData)
    }
    fetchData()
  }, [deleteItem])

  const editCartItem = (quantity) => {
    if(quantity === 0) setQuantity(1);

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
    <>
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
            <div className='quantity-container'>
              x
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
        </div>
        <i class="fa-solid fa-trash" onClick={() => deleteItem(item.id)}></i>
      </div >
      <hr></hr>
    </>
  )
}

const ShoppingCartNav = () => {
  const [showCart, setShowCart] = useState(false)
  const { cart, setCart } = useCart()

  if (cart?.length > 0) {
    return (
      <>
        <i class="fa-solid fa-bag-shopping " onClick={() => setShowCart(!showCart)}></i>
        {showCart &&
          <div className='cart-dropdown'>
            {cart?.map(item => {
              return <ShoppingCartItem item={item} cart={cart} setCart={setCart}/>
            })}
            <NavLink to="/cart/current">
              <button id='checkout-nav'>Checkout</button>
            </NavLink>
          </div>}
      </>
    )
  } else {
    return null
  }
}

export default ShoppingCartNav
