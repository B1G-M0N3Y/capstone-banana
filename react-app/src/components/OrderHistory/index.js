import { useEffect, useState } from "react";
import Modal from 'react-modal';
import './OrderHistory.css';

const OrderHistory = () => {
  const [showModal, setShowModal] = useState(false);
  const [orders, setOrders] = useState([]);
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const [selectedOrder, setSelectedOrder] = useState()

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

  async function fetchOrders() {
    const response = await fetch(`/api/orders/current`)
    const responseData = await response.json()
    setOrders(Object.values(responseData)[0].reverse());
    console.log('orders', orders)
  }

  useEffect(() => {
    fetchOrders()
  }, []);

  function closeModal() {
    setShowModal(false);
  }


  async function deleteOrder() {
    await fetch(`/api/orders/${selectedOrder}`, { method: 'DELETE' })
    await fetchOrders()
  }

  function clickReturn(orderId) {
    setSelectedOrder(orderId)
    setShowModal(true)
  }

  const DateDisplay = ({ dateTime }) => {
    dateTime = new Date(dateTime)

    const formatter = new Intl.DateTimeFormat('en-us', {
      year: 'numeric', month: 'numeric', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric',
      hour12: true,
      timeZone
    });

    const formattedDate = formatter.format(dateTime);

    const [date, time] = formattedDate.split(',');

    console.log('date', date)
    console.log('time', time.slice(1))

    return (
      <div>
        <p>{date}</p>
        <p>{time.slice(1)}</p>
      </div>
    )
  }

  return (
    <div className="order-history-page">
      <h1 className="order-history-header">Your Orders.</h1>
      <div className="orders-container">
        {orders?.map(order => (
          <div className="order-history-item">
            <img
              className="order-history-image"
              src={order.item.images[0].image_url}
              alt={`${order.item.name}`}
            ></img>
            <h3 className="order-item">{order.item.name}</h3>
            <p>{order.item.price} x {order.quantity}</p>
            <p>Total: {order.total}</p>
            <DateDisplay dateTime={order.date} />
            <button onClick={() => clickReturn(order.id)}></button>
          </div>
        ))}
      </div>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <>
          <h1 className="return-or-replace-modal-header">Are You Sure?</h1>
          <div className='return-or-replace'>
            <button onClick={deleteOrder}> Yes </button>
            <h3>-or-</h3>
            <button onClick={() => setShowModal(false)}> No </button>
          </div>
        </>
      </Modal>
    </div>
  )
}

export default OrderHistory
