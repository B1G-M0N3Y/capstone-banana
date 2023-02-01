import { useSelector } from "react-redux"
import CheckoutItem from "./CheckoutItem"
import './Checkout.css'
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { useCart } from "../../context/CartContext"

const Checkout = () => {
  const history = useHistory()
  const currentUser = useSelector(state => state.session.user)
  const [allItems, setAllItems] = useState([]);
  const { cart, setCart } = useCart()
  // const cart = JSON.parse(localStorage.getItem(currentUser?.email || 'default'))

  useEffect(() => {
    async function fetchData() {
      const apibanana = await fetch(`/api/items`)

      setAllItems(await apibanana.json())
    }
    fetchData()
    getTotal()
  }, [])

  const getTotal = () => {
    let total = 0;
    console.log(cart)

    if (cart)
      for (const item of cart) {
        const price = allItems.filter(allItem => allItem.id === item.id)[0]?.price
        console.log(price)
        console.log(item.quantity)
        total = total += (price * item.quantity)
      }

    return total;
  }

  const checkout = async () => {
    setCart([])
    for(let i = 0; i < cart.length; i++){
      await fetch(`/api/orders`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: cart[i].id,
          quantity: cart[i].quantity
        })
      })
    }
    localStorage.setItem(currentUser?.email || 'default', null)
    history.push('/thank-you')
  }

  return (
    <div className="checkout-page">
      <h1>Checkout.</h1>
      <div className="checkout-item-container">
        {cart?.map(item => (
          <>
            <CheckoutItem item={item} />
            <hr />
          </>
        ))}
        <div id='total'>
          <p>Total: ${getTotal().toFixed(2)}</p>
          <button onClick={checkout}>Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Checkout
