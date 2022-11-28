import { useEffect, useState } from "react";
import Review from "./Review";
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
          <Review review={review} />
        ))}
      </div>
    </div>
  );
};

export default CurrentUserReviews;
