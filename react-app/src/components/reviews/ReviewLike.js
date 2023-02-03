import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";

const ReviewLike = ({ likes, reviewId }) => {
  const dispatch = useDispatch()
  const [reviewLikes, setReviewLikes] = useState(likes.length);
  const [userLikes, setUserLikes] = useState(false)
  const currentUser = useSelector(state => state.session.user)

  const pressLike = async () => {
    if(!userLikes){
      await fetch(`/api/reviews/${reviewId}/likes`, {
        method: 'POST',
      })
      console.log('like')
      setReviewLikes(reviewLikes + 1)
      setUserLikes(true)
    } else {
      await fetch(`/api/reviews/${reviewId}/likes`, {
        method: 'DELETE'
      })
      console.log('dislike')
      setReviewLikes(reviewLikes - 1)
      setUserLikes(false)
    }
    setUserLikes(!userLikes)
  }

  useEffect (() => {
    for(let i = 0; i < likes.length; i++){
      if(likes[i].user_id === currentUser?.id) setUserLikes(true)
    }
    console.log(userLikes)
  }, [dispatch])



  const LikeButton = () => {
    if (userLikes) {
      return (
        <button className="like-button" onClick={pressLike}>
          <i class="fa-solid fa-heart"></i>
        </button>
      )
    }
    return (
      <button className="like-button" onClick={pressLike}>
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
