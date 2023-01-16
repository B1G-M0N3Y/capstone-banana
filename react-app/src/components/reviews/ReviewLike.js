import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";

const ReviewLike = ({ likes }) => {
  const dispatch = useDispatch()
  const [reviewLikes, setReviewLikes] = useState(likes.length);
  const [userLikes, setUserLikes] = useState(false)
  const currentUser = useSelector(state => state.session.user)

  useEffect (() => {
    for(let i = 0; i < likes.length; i++){
      if(likes[i].user_id === currentUser?.id) setUserLikes(true)
    }
  }, [dispatch])

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
