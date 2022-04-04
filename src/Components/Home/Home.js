import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-3 w-11/12 mx-auto mt-8">
        <div className="md:col-span-2 p-3 order-1">
          <div className="">
            <h1 className="text-7xl text-emerald-500 font-black">
              THE <span className="text-red-500 tracking-widest">G.O.A.T</span>{" "}
              <br /> <span className="">LIONEL MESSI</span>
            </h1>
            <p className="mt-3 text-lg">
              Lionel Andrés Messi, also known as Leo Messi, is an Argentine
              professional footballer who plays as a forward for League-1 club
              Paris Saint-Germain and captains the Argentina national team.
              Often considered the best player in the world and widely regarded
              as one of the greatest players of all time, Messi has won a record
              seven Ballon d'Or awards, a record six European Golden Shoes, and
              in 2020 was named to the Ballon d'Or Dream Team. Until leaving the
              club in 2021, he had spent his entire professional career with
              Barcelona, where he won a club-record 35 trophies.
            </p>
          </div>
          <div>
            <button className="bg-emerald-400 mt-5 p-2 rounded-md text-white text-xl font-semibold hover:bg-emerald-500">
              Career Details
            </button>
          </div>
        </div>
        <div className="order-0 md:order-1">
          <img className="min-w-full"
            src={require("../../Asset/images/lionel-messi.png")}
            alt="lionel messi"
          />
        </div>
      </section>
      <section>
      <h1>REVIEWS</h1>
        <div></div>
      </section>
    </div>
  );
};

export default Home;
