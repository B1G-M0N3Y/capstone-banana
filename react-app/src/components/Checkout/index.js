import { useSelector } from "react-redux"
import CheckoutItem from "./CheckoutItem"
import './Checkout.css'

const Checkout = () => {
  const currentUser = useSelector(state => state.session.user)

  const cart = JSON.parse(localStorage.getItem(currentUser?.email || 'default'))

  console.log(cart)

  return (
    <div className="checkout-page">
      <h1>Checkout.</h1>
      <div>
        {cart.map(item => (
          <>
            <CheckoutItem item={item} />
            <hr />
          </>
        ))}
      </div>
    </div>
  )
}

export default Checkout
