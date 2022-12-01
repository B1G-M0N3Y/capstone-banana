import { useState } from "react"

const CreateReview = () => {
  const [reviewBody, setReviewBody] = useState([])

  return (
    <div className="create-review">
      <h4>Got anything to say? HUH PUNK?</h4>
      <p>Leave your review.</p>
      <form>
        <textarea
          className="enter-review"
          value={reviewBody}
          onChange={(e)=>setReviewBody(e.target.value)}
        ></textarea>
      </form>
    </div>
  )
}

export default CreateReview
