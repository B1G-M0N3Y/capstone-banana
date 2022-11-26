import { useEffect, useState } from "react";
import ReviewImages from "./ReviewImages";
import "./Reviews.css"

const CurrentUserReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const apireviews = await fetch(`/api/reviews/current`);
      //   console.log(apireviews.json())
      setReviews(await apireviews.json());
    }
    fetchData();
  }, []);

  console.log(reviews);

  return (
    <div className="current-user-reviews">
      <h1>My Reviews</h1>
      <div className="current-user-reviews-container">
        {reviews.map((review) => (
          <div className="review">
            <ReviewImages images={review.images} />
            <p>{review.body}</p>
            <div className="review-buttons">
              <button className="edit">
                <i class="fa-solid fa-pen"></i>
              </button>
              <button className="trash">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentUserReviews;
