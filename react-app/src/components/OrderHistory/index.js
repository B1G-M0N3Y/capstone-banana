import { useSelector } from "react-redux"

const OrderHistory = () => {
  const currentUser = useSelector(state => state.session.user)

  

  return (
    <>
      <h1>Your Orders.</h1>

    </>
  )
}
