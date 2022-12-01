import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './SingleItemPage.css'

const SingleItemPage = () => {
  const { itemId } = useParams(':itemId')
  const [item, setItem] = useState({})

  const [activeImage, setActiveImage] = useState(0)

  const updateImage = (newImage) => {
    if (newImage < 0) {
      newImage = 0
    } else if (newImage >= item.images.length) {
      newImage = item.images.length - 1;
    }

    setActiveImage(newImage)
  }


  useEffect(() => {
    async function fetchItem() {
      const response = await fetch(`/api/items/${itemId}`)
      const responseData = await response.json()
      setItem(responseData)
    }
    fetchItem()
  }, [])

  return (
    <div>
      <h1>{`Buy ${item.name}`}</h1>
      <h4>Purchase now for {item.price}</h4>
      <div className="product-window">
        <button
          className='carousel-button prev'
          onClick={() => {
            updateImage(activeImage - 1);
          }}
        >
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        {/* carousel */}
        <div className="product-image-carousel">
          {/* inner */}
          <div className="product-image-inner" style={{ transform: `translateX(-${activeImage * 100}%)` }}>
            {item.images?.map(image => (
              <img src={image.image_url}></img>
            ))}
          </div>
        </div>
        <button
              className='carousel-button next'
              onClick={() => {
                updateImage(activeImage + 1);
              }}
            >
              <i class="fa-solid fa-chevron-right"></i>
            </button>
        <button>
          Click here to Buy
        </button>
      </div>
    </div>
  )
}

export default SingleItemPage
