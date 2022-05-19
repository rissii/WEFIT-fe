import Card from "../components/Card";
import React, { useEffect, useState } from "react";
import ".././App.css";
import server from "../services/server.js";

export default function MainPage() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    server.findMatch().then((response) => setMatches([...response]));
  }, []);

  return (
    <div>
      {" "}
      {matches[0].userName}
      <Card matches={matches} />
    </div>
  );
}
