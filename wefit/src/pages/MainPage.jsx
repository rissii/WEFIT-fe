import Card from "../components/Card";
import React, { useEffect } from "react";
import ".././App.css";
import server from "../services/server.js";
export default function MainPage() {
  useEffect(() => {
    server.findMatch();
  }, []);
  return (
    <div>
      {" "}
      <Card />
    </div>
  );
}
