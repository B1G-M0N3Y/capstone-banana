import { useEffect, useState } from "react"
import { useCart } from "../../context/CartContext";

const CheckoutItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const [itemDetails, setItemDetails] = useState({});
  const { cart, setCart } = useCart();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`/api/items/${item.id}`)
      const responseData = await response.json();
      setItemDetails(responseData)
    }
    fetchData()
  }, []);

  return (
    <>
      <div className='cart-item-checkout' >
        <div className='cart-item-left'>
          {itemDetails.images?.length > 0 &&
            <img
              src={itemDetails?.images[0].image_url}
              alt={itemDetails.name}
              className='cart-item-nav-img'>
            </img>
          }
          <div className="item-info">
            <p className="item-name">{itemDetails?.name}</p>
            <input
              className='quantity-input-checkout'
              type='number'
              min="1"
              max="100"
              value={quantity}
            // onChange={(e) => editCartItem(e.target.value)}
            ></input>
          </div>
        </div>
        <p className="item-price">${itemDetails.price}</p>
        {/* <i class="fa-solid fa-trash" onClick={() => deleteItem(item?.id)}></i> */}
      </div >
    </>
  )
}

export default CheckoutItem
