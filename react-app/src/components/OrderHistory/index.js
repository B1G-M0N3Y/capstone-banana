import { useEffect, useState } from "react"

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      const response = await fetch(`/api/orders/current`)
      const responseData = await response.json()
      setOrders(Object.values(responseData)[0]);
      console.log('orders', orders)
    }

    fetchOrders()
  }, []);

  return (
    <>
      <h1>Your Orders.</h1>
      {orders?.map(order => (
        <div className="order-history-item">
          <img src={order.item.images[0].image_url}></img>
          <h3>{order?.item?.name}</h3>
          <p>Quantity: {order.quantity}</p>
        </div>
      ))}
    </>
  )
}

export default OrderHistory
