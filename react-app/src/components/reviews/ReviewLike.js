import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'
import Modal from 'react-modal';

const ReviewLike = ({ likes, reviewId }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [reviewLikes, setReviewLikes] = useState(likes.length);
  const [userLikes, setUserLikes] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const currentUser = useSelector(state => state.session.user)

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    overlay: {zIndex:1000}
  };

  const pressLike = async () => {
    if (!currentUser) {
      setShowModal(true)
      return
    }

    if (!userLikes) {
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

  }

  useEffect(() => {
    for (let i = 0; i < likes.length; i++) {
      if (likes[i].user_id === currentUser?.id) setUserLikes(true)
    }
    console.log(userLikes)
  }, [dispatch])

  function closeModal() {
    setShowModal(false);
  }

  const LikeButton = () => {
    if (userLikes) {
      return (
        <button className="like-button" onClick={pressLike}>
          <i className="fa-solid fa-heart like"></i>
        </button>
      )
    }
    return (
      <button className="like-button" onClick={pressLike}>
        <i className="fa-regular fa-heart dislike"></i>
      </button>
    )
  }

  return (
    <>
      <LikeButton />
      <p className="like-count">{reviewLikes}</p>
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        style={customStyles}>
          <h1 className="return-or-replace-modal-header">You must be logged in to leave a like</h1>
          <div className='return-or-replace'>
            <button onClick={() => history.push('/login')}> Login </button>
            <h3>-or-</h3>
            <button onClick={() => history.push('/sign-up')}> Sign Up </button>
          </div>
      </Modal>
    </>
  )

}

export default ReviewLike
