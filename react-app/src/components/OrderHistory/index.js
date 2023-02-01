import { useEffect, useState } from "react";
import Modal from 'react-modal';
import './OrderHistory.css';

const OrderHistory = () => {
  const [showModal, setShowModal] = useState(false);
  const [orders, setOrders] = useState([]);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  };

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
        style={customStyles}
        // className="return-modal"
      >
        <>
          <h1 className="return-or-replace-modal-header">Would you like to</h1>
          <div className='return-or-replace'>
            <button> Return </button>
            <h3>-or-</h3>
            <button> Replace </button>
          </div>
        </>
      </Modal>
    </>
  )
}

export default OrderHistory
