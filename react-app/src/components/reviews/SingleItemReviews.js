import { useEffect, useState } from "react"

const SingleItemReviews = ({ reviews }) => {

  return (
    <div className="single-item-reviews">
      {reviews?.map(review => (
        <p>{review.body}</p>
      ))}
    </div>
  )
}

export default SingleItemReviews
