import React, { useEffect, useState } from "react";
import ".././App.css";
import server from "../services/server.js";

export default function MainPage() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    server.findMatch().then((response) => setMatches([...response]));
    console.log(matches);
  }, []);


  return (
    <div >
      {" "}
      {matches.map((match, index) => (
        <div className="card max-w-xl rounded overflow-hidden shadow-lg mt-5 ml-auto mr-auto">
          <img className="m-auto w-50" src={match.imageUrl} alt="" />
          <div className="px-6 py-4">
            <div className="d-flex font-bold text-xl mb-2">
              {match.userName}
            </div>

            {/* <FontAwesomeIcon className="d-flex mb-3 mt-3" icon={faLocation} /> */}
            <p className="d-flex">Tel Aviv</p>
          </div>
          <div className="m-auto px-6 pt-4 pb-2">
            {match.participate_swimming === 0 ? (
              <span />
            ) : (
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                swimming
              </span>
            )}

            {match.participate_dance === 0 ? null : (
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                dance
              </span>
            )}

            {match.participate_team === 0 ? null : (
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                team
              </span>
            )}

            {match.participate_yoga === 0 ? null : (
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                yoga
              </span>
            )}
            {match.participate_lifting_weights === 0 ? null : (
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                lifting weights
              </span>
            )}

            {match.participate_gym === 0 ? null : (
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                gym
              </span>
            )}

            {match.participate_running === 0 ? null : (
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                running
              </span>
            )}
          </div>

          <button className=" w-50 m-auto primary-button">
                    Connect
                   </button>
        </div>
      ))}
    </div>
  );
}
