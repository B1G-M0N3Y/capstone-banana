import React, { useState } from "react"

const ReviewImages = ({ images }) => {
  console.log(images)
  const [activeImage, setActiveImage] = useState(0)

  const updateImage = (newImage) => {
    if (newImage < 0) {
      newImage = 0
    } else if (newImage >= images.length) {
      newImage = images.length - 1;
    }

    setActiveImage(newImage)
  }

  return (
    <div className="review-image-carousel">
      <div className="inner" style={{ transform: `translateX(-${activeImage * 100}%)` }}>
        {images.map(image => (
          <img
            className="review-image"
            src={image.image_url}
            alt={image.image_url}
            onerror="this.src='https://i5.walmartimages.com/asr/5939a6fa-a0d6-431c-88c6-b4f21608e4be.f7cd0cc487761d74c69b7731493c1581.jpeg';"
          />
        ))}
      </div>
      <div className="review-carousel-buttons">
        <button
          onClick={() => {
            updateImage(activeImage - 1);
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            updateImage(activeImage + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default ReviewImages
