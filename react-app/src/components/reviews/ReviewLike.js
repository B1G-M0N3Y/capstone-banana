import { useState } from "react"

const ReviewLike = ({ likes }) => {
  const [reviewLikes, setReviewLikes] = useState(likes.length);
  const [userLikes, setUserLikes] = useState()


  const LikeButton = () => {
    if (userLikes) {
      return (
        <button>
          <i class="fa-solid fa-heart"></i>
        </button>
      )
    }
    return (
      <button>
        <i class="fa-regular fa-heart"></i>
      </button>
    )
  }

  return (
    <>
      <LikeButton />
      {reviewLikes}
    </>
  )

}

export default ReviewLike
