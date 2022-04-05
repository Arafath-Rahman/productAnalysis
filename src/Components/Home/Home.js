import React from "react";
import { useNavigate } from "react-router-dom";
import useReviews from "../../Hooks/useReviews";
import Review from "../Review/Review";
import "./Home.css";

const Home = () => {
  const [reviews] = useReviews();

  //click handler for see all reviews
  let navigate = useNavigate();
  const handleSeeAllReviews = () => {
    navigate("/reviews");
  };

  return (
    <div className="">
      <section className="grid grid-cols-1 place-items-center md:grid-cols-2 gap-3 w-11/12 mx-auto mt-8 mb-8">
        <div className=" p-3 order-1">
          <div className="">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-emerald-500 font-black">
              <span className="text-red-500">MACBOOK PRO</span>{" "}
              <br /> <span className="">The Power You Need</span>
            </h1>
            <p className="mt-3 text-lg">
            The MacBook Pro is a line of Macintosh notebook computers by by Apple Inc. Introduced in January 2006, it is the higher-end model of the MacBook family, sitting above the consumer-focused MacBook Air. It is currently sold with 13-inch, 14-inch, and 16-inch screens, all using variants of the Apple-designed M1 system on a chip.
            </p>
          </div>
          <div>
            <button className="bg-emerald-500 mt-5 p-2 rounded-md text-white text-xl font-semibold hover:bg-red-500">
              See Details
            </button>
          </div>
        </div>
        <div className="order-0 md:order-1">
          <img
            className="w-2/3 mx-auto md:w-11/12 lg:min-w-full"
            src={require("../../Asset/images/macbook-pro.png")}
            alt="macbook pro"
          />
        </div>
      </section>
      <section className="mt-5 border-2 p-5 mb-16 rounded-lg m-7">
        <h1 className="text-center text-3xl hover:underline text-emerald-400 mb-8">
          REVIEWS
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {reviews.slice(0, 3).map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </div>
        <div className="flex">
          <button onClick={handleSeeAllReviews} className=" mt-5 p-2 rounded-md bg-emerald-500 text-white text-xl font-semibold hover:bg-red-500  mx-auto">
            See all Reviews
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
