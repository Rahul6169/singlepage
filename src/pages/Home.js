import React from "react";
import background from "./background.jpg";
import "./Home.css";
const Home = () => {
  return (
    <div className="homeimg">
      <img src={background} alt="Logo" />
      <div className="content-style">
        <h2>hi</h2>
      </div>
    </div>
  );
};
export default Home;
