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
    async function fetchData(){
      const response = await fetch(`/api/items/${item.id}`)
      const responseData = await response.json();
      setItemDetails(responseData)
    }
    fetchData()
  },[])

  console.log(itemDetails)

  useEffect(() => {
    if(item) setQuantity(item.quantity)
  }, [cart])

  const deleteItem = (itemId) => {
    const newCart = cart.filter(item => item?.id !== itemId)
    setCart(newCart)
    localStorage.setItem((currentUser?.email || 'default'), JSON.stringify(newCart))
  }

  const editCartItem = (quantity) =>{
    setQuantity(quantity)

    const newCart = cart.map(cartItem => {
      if (item?.id === cartItem?.id){
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

  console.log("$$$$$$$$$$$$$$$$$$$$Here's the item$$$$$$$$$$$$$$$$$$$$$", item)

  return (
    <div className='cart-item-nav' >
      <p>{itemDetails?.name}</p>
      <input
        type='number'
        min="1"
        max="100"
        value={quantity}
        onChange={(e)=> editCartItem(e.target.value)}
      ></input>
      <i class="fa-solid fa-trash" onClick={() => deleteItem(item?.id)}></i>
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
            <ShoppingCartItem item={item} />
          ))}
        </div>}
    </>
  )
}

export default ShoppingCartNav
