import { useState } from "react"
import { useParams } from "react-router-dom"
import ReviewImages from "./ReviewImages"

const Review = ({ review, reviews, setReviews }) => {
  const [editing, setEditing] = useState(false)
  const [deleted, setDeleted] = useState(false)
  const [reviewBody, setReviewBody] = useState(review.body)
  const {itemId} = useParams('itemId')

  const updateReviews = () => {
    const newReviews = [];

    reviews.forEach(allReview => {
      if(allReview.id === review.id){
        let newReview = {...allReview};
        newReview.body = reviewBody;
        newReviews.push(newReview)
      } else {
        newReviews.push(allReview)
      }
    });

    setReviews(newReviews)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`/api/reviews/${review.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ body: reviewBody })
    })

    updateReviews();

    setEditing(false)
  }

  const editBody = () => {
    setEditing(true)
  }

  const deleteReview = async () => {
    await fetch(`/api/reviews/${review.id}`, {
      method: "DELETE"
    })
    setDeleted(true)
  }

  if (deleted) return null

  return (
    <div className="review">
      {/* <ReviewImages images={review.images} /> */}
      {itemId &&
      <div className='user-name'>
        <p>{review.user.first_name} {review.user.last_name}</p>
      </div>
      }
      {!editing && <p className="review-body">{review.body}</p>}
      {editing &&
        <form
          onSubmit={handleSubmit}
          className="review-edit-form">
          <textarea
            className="review-edit-body"
            value={reviewBody}
            onChange={(e) => setReviewBody(e.target.value)}
          >
          </textarea>
          <button className="submit-edit" type="submit">
            <i class="fa-solid fa-pen"></i>
          </button>
        </form>
      }
      {/* solution here is to only allow editing and deleting on the
          reviews/current page. If we are able to get an item id with
          useParams() on line 9, then we are on a product page and
          should not render the reviews.*/}
      {!itemId &&
        <div className="review-buttons">
          <button className="edit" onClick={editBody}>
            <i class="fa-solid fa-pen"></i>
          </button>
          <button className="trash" onClick={deleteReview}>
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      }
    </div>
  )

}
export default Review
