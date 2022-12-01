import { useState } from "react"
import { useSelector } from "react-redux"

const CreateReview = () => {
  const [reviewBody, setReviewBody] = useState('')
  const [validationErrors, setValidationErrors] = useState([])
  const currentUser = useSelector(state => state.session.currentUser)

  const handleSubmit = async(e) => {
    e.preventDefault();
    const errors = []


    if(!reviewBody) errors.push('You must write a review to submit one')


    setValidationErrors(errors)
  }

  return (
    <div className="create-review">
      <h4>Got anything to say? HUH PUNK?</h4>
      <p>Leave your review.</p>
      <form onSubmit={handleSubmit}>
        {validationErrors.length > 0 &&
          validationErrors.map(error => <p>{error}</p>)}
        <textarea
          className="enter-review"
          value={reviewBody}
          onChange={(e)=>setReviewBody(e.target.value)}
        ></textarea>
        <button type="submit">
          Add Review
        </button>
      </form>
    </div>
  )
}

export default CreateReview
