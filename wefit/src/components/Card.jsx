import React, { useEffect } from "react";
import ".././App.css";
import server from "../services/server.js";
import women from "../images/women.jpg";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Card() {
  useEffect(() => {
    server.getUserData();
  }, []);

  const handleSwipeLeft = () => {
    return;
  };

  const handleSwipeRight = () => {
    alert("next");
  };

  return (
    <>
      <div
        className="card max-w-sm rounded overflow-hidden shadow-lg mt-5 ml-auto mr-auto"
        onSwipeLeft={handleSwipeLeft}
        onSwipeRight={handleSwipeRight}
      >
        <img
          src="https://www.keypersonofinfluence.com/wp/wp-content/uploads/2016/01/womens-fitness-1024x649.jpg"
          alt=""
        />
        <div className="px-6 py-4">
          <div className="d-flex font-bold text-xl mb-2">Naomi Krempel</div>

          <FontAwesomeIcon className="d-flex mb-3 mt-3" icon={faLocation} />
          <p className="d-flex"> Tel Aviv </p>
        </div>
        <div className="m-auto px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </>
  );
}
