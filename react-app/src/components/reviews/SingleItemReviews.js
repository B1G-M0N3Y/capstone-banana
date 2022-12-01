import { useEffect, useState } from "react"
import Review from "./Review"

const SingleItemReviews = ({ item }) => {

  return (
    <div className="single-item-reviews">
      <h1> Reviews for {item.name}.</h1>
      {item.reviews?.map(review => (
        <Review review={review} />
      ))}
    </div>
  )
}

export default SingleItemReviews
