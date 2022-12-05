import { useEffect, useState } from "react";
import Review from "./Review";
import ReviewImages from "./ReviewImages";
import "./Reviews.css"

const CurrentUserReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const apireviews = await fetch(`/api/reviews/current`);
      setReviews(await apireviews.json());
    }
    fetchData();
  }, []);

  return (
    <div className="current-user-reviews">
      <h1 id='your-reviews'>Your Reviews</h1>
      <div className="current-user-reviews-container">
        {reviews.map((review) => (
          <Review review={review} />
        ))}
      </div>
    </div>
  );
};

export default CurrentUserReviews;
