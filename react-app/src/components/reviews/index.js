import { useEffect, useRef, useState } from "react";

const CurrentUserReviews = () => {
    const [reviews, setReviews] = useState([])

  useEffect(() => {
    async function fetchData () {
      const apireviews = await fetch(`/api/reviews/current`);
    //   console.log(apireviews.json())
      setReviews(await apireviews.json())
    };
    fetchData();
  },[]);

  console.log(reviews);

  return <div>{reviews.map(review => (<p>{review.body}</p> ))}</div>;
};

export default CurrentUserReviews;
