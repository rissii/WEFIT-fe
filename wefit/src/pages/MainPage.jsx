import Card from "../components/Card";
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
    <div>
      {" "}
      <Card matches={matches} />
    </div>
  );
}
