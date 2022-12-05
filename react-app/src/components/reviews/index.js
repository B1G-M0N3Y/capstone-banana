import { useEffect, useState } from "react";
import Review from "./Review";
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
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="current-user-reviews-container">
        {reviews.map((review) => (
          <Review review={review} reviews={reviews} setReviews = {setReviews}/>
        ))}
      </div>
    </div>
  );
};

export default CurrentUserReviews;
