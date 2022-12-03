import { useSelector } from "react-redux"
import './Checkout.css'
import CheckoutItem from "./CheckoutItem"

const Checkout = () => {
  const currentUser = useSelector(state => state.session.user)

  const cart = JSON.parse(localStorage.getItem(currentUser?.email || 'default'))

  console.log(cart)

  return (
    <div className="checkout-page">
      <h1>Checkout.</h1>
      <div>
        {cart.map(item => (
          <CheckoutItem item={item} />
        ))}
      </div>
    </div>
  )
}

export default Checkout
