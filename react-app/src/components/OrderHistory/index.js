import { useEffect, useState } from "react";
import Modal from 'react-modal';
import './OrderHistory.css';

const OrderHistory = () => {
  let subtitle
  const [showModal, setShowModal] = useState(false);
  const [orders, setOrders] = useState([]);

  Modal.setAppElement('#root');

  useEffect(() => {
    async function fetchOrders() {
      const response = await fetch(`/api/orders/current`)
      const responseData = await response.json()
      setOrders(Object.values(responseData)[0]);
      console.log('orders', orders)
    }

    fetchOrders()
  }, []);

  function closeModal() {
    setShowModal(false);
  }

  return (
    <>
      <h1>Your Orders.</h1>
      {orders?.map(order => (
        <div className="order-history-item">
          <img
            src={order.item.images[0].image_url}
            alt={`${order.item.name}`}
          ></img>
          <h3>{order.item.name}</h3>
          <p>{order.item.price} x {order.quantity}</p>
          <p>Total: {order.total}</p>
          <button onClick={() => setShowModal(true)}></button>
        </div>
      ))}
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
      >
        <div>
          Hello Adam
        </div>
      </Modal>
    </>
  )
}

export default OrderHistory
