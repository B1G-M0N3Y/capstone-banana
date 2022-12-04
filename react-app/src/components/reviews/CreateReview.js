import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

const CreateReview = ({reviews, setReviews}) => {
  const [reviewBody, setReviewBody] = useState('')
  const [validationErrors, setValidationErrors] = useState([])
  const { itemId } = useParams('itemId')
  const currentUser = useSelector(state => state.session.user)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = []

    if(!currentUser?.email) errors.push('You must be logged in to write a review')

    if (!reviewBody) errors.push('You must write a review to submit one')

    if (!errors.length) {
      console.log('reviewBody', reviewBody)
      const response = await
        fetch(`/api/items/${itemId}/reviews`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({body: reviewBody})
        })
      const responseData = await response.json()
      console.log([...reviews, responseData])
      setReviews([...reviews, responseData])
      setReviewBody('');
    }

    setValidationErrors(errors)
  }

  return (
    <div className="create-review">
      <h4>Got anything to say?</h4>
      <p className="leave-review-label">Leave your review.</p>
      <form className='add-review-form' onSubmit={handleSubmit}>
        {validationErrors.length > 0 &&
          validationErrors.map(error => <p className="error create-review-error">*{error}</p>)}
        <textarea
          type='text'
          className="enter-review"
          value={reviewBody}
          onChange={(e) => setReviewBody(e.target.value)}
        ></textarea>
        <button type="submit">
          Add Review
        </button>
      </form>
    </div>
  )
}

export default CreateReview
