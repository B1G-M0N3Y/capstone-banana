import Review from "./Review"

const SingleItemReviews = ({ reviews }) => {

  return (
    <div>
      <h3></h3>
      <div className="single-item-reviews current-user-reviews-container">
        {reviews?.map(review => (
          <Review review={review} />
        ))}
      </div>
    </div>
  )
}

export default SingleItemReviews
