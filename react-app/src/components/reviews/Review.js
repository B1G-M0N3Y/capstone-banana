import { useState } from "react"
import ReviewImages from "./ReviewImages"

const Review = ({ review }) => {
  const [editing, setEditing] = useState(false)

  const editBody = () => {
    setEditing(true)
  }
  return (
    <div className="review">
      <ReviewImages images={review.images} />
      {!editing && <p className="review-body">{review.body}</p>}
      {editing &&
        <form>
          <textarea
            className="review-edit-body"
            value={review.body}>
          </textarea>
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
