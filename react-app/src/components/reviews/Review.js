import { useState } from "react"
import ReviewImages from "./ReviewImages"

const Review = ({ review }) => {
  const [editing, setEditing] = useState(false)
  const [reviewBody, setReviewBody] = useState(review.body)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/reviews/${review.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({body:reviewBody})
    })

    setEditing(false)
  }

  const editBody = () => {
    setEditing(true)
  }
  return (
    <div className="review">
      <ReviewImages images={review.images} />
      {!editing && <p className="review-body">{reviewBody}</p>}
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
      <div className="review-buttons">
        <button className="edit" onClick={editBody}>
          <i class="fa-solid fa-pen"></i>
        </button>
        <button className="trash">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  )

}
export default Review
