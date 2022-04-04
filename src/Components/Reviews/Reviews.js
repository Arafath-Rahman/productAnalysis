import React from "react";
import useReviews from "../../Hooks/useReviews";
import Review from "../Review/Review";
import "./Reviews.css";

const Reviews = () => {
  //re-using useReview hook to get review data
  const [reviews] = useReviews();
  
  return (
    <section className="p-8 mb-8">
      <h1 className="text-center text-3xl hover:underline text-emerald-400 mb-8">
        ALL REVIEWS
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
