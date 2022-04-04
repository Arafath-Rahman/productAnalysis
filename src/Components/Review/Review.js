import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";

const Review = (props) => {

  const { name, review, rating, image } = props.review;
  
  return (
    <div className="border-2 p-5 border-emerald-300 rounded-lg hover:bg-emerald-100 flex flex-col justify-between">
      <div className="flex justify-between items-center p-2 mb-3">
        <h1 className="text-xl font-bold hover:underline hover:cursor-pointer">
          {name}
        </h1>
        <img
          className="bg-emerald-200 p-4 rounded-full"
          src={image}
          alt="img"
        />
      </div>
      <p>{review}</p>
      <h4 className="text-lg font-semibold mt-3">
        <span className="">Rating:  
          {
            <Rating
              initialRating={rating}
              emptySymbol={<FontAwesomeIcon icon={ faStar } style={{ color: "lightgrey"}} />}
              fullSymbol={
                <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
              }
              readonly
            ></Rating>
          }
        </span>
      </h4>
    </div>
  );
};

export default Review;
