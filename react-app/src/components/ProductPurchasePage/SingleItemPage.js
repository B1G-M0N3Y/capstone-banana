import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import CreateReview from "../reviews/CreateReview"
import SingleItemReviews from "../reviews/SingleItemReviews"
import './SingleItemPage.css'

const SingleItemPage = () => {
  const { itemId } = useParams(':itemId')
  const [item, setItem] = useState({})
  const [activeImage, setActiveImage] = useState(0)
  const { cart, setCart } = useCart()
  const currentUser = useSelector(state => state.session.user)

  const updateImage = (newImage) => {
    console.log('activeImage', activeImage)
    if (newImage < 0) {
      newImage = 0
    } else if (newImage >= item.images.length) {
      newImage = item.images.length - 1;
    }

    console.log('newImage', newImage)
    setActiveImage(newImage)
  }


  useEffect(() => {
    async function fetchItem() {
      const response = await fetch(`/api/items/${itemId}`)
      const responseData = await response.json()
      setItem(responseData)
    }
    fetchItem()
  }, [itemId])

  const makeCart = (banan) => {
    let increase = false
    const newCart = []

    for (const item of cart) {
      if (item?.id === banan.id) {
        newCart.push({
          id: item.id,
          quantity: ++item.quantity
        })
        increase = true
      } else {
        newCart.push(item)
      }
    }

    if (!increase) {
      return [...newCart, banan]
    }
    return newCart
  }

  const addToCart = (banan) => {
    const cartItem = {
      id: banan.id,
      quantity: 1
    }

    const newCart = makeCart(cartItem)
    setCart(newCart)

    if (currentUser) localStorage.setItem(currentUser.email, JSON.stringify(cart));
    else localStorage.setItem('default', JSON.stringify(cart))
  }

  return (
    <div className="single-item-page">
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>{`Buy ${item.name}`}</h1>
      <h4>Purchase now for {item.price}</h4>
      <div className="product-window">
        <div className="product-image-carousel">
          <button
            className='product-page-carousel-prev'
            onClick={() => {
              updateImage(activeImage - 1);
            }}
          >
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <div className="product-image-inner" style={{ transform: `translateX(-${activeImage * 50}%)` }}>
            {item.images?.map(image => (
              <img src={image.image_url}></img>
            ))}
          </div>
          <button
            className='product-page-carousel-next'
            onClick={() => {
              updateImage(activeImage + 1);
            }}
          >
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
        <div className='purchase-container'>
          <p>Price: </p>
          <h1>${item.price}</h1>
          <button onClick={() => addToCart(item)}>
            Add to Cart
          </button>
        </div>
      </div>
      <h1> Reviews for {item.name}.</h1>
      <div className="single-item-review-container">
      <SingleItemReviews item={item}/>
      <CreateReview />
      </div>
    </div>
  )
}

export default SingleItemPage
