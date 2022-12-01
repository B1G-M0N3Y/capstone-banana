import { useEffect, useState } from "react"
import CreateReview from "./CreateReview"
import Review from "./Review"

const SingleItemReviews = ({ item }) => {

  return (
    <div>
      <h3></h3>
      <div className="single-item-reviews current-user-reviews-container">
        {item.reviews?.map(review => (
          <Review review={review} />
        ))}
      </div>
    </div>
  )
}

export default SingleItemReviews
