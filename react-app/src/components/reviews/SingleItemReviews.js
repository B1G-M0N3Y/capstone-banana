import { useEffect, useState } from "react"
import Review from "./Review"

const SingleItemReviews = ({ item }) => {

  return (
    <>
      <h1> Reviews for {item.name}.</h1>
      <h3></h3>
      <div className="single-item-reviews current-user-reviews-container">
        {item.reviews?.map(review => (
          <Review review={review} />
        ))}
      </div>
    </>
  )
}

export default SingleItemReviews
