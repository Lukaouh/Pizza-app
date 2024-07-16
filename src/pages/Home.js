import React from "react";
import { Link } from "react-router-dom";
import HomeImage from "../assests/pizza.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div>
      <div className="Home" style={Styles.HomeStyle}>
        <div className="homeContainer">
          <h1>Luka's pizzeria</h1>
          <p>PIZZA FOR YOUR FAMILY</p>
          <Link to="/Menu">
            <button>Order Now</button>
          </Link>
        </div>
        <div className="hiddeContainer">
          <div className="hiddenBox">
            <h1>Luka's pizzeria</h1>
            <p>PIZZA FOR YOUR FAMILY</p>
            <Link to="/Menu">
              <button>Order Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const Styles = {
  HomeStyle: {
    backgroundImage: `url(${HomeImage})`,
  },
};
export default Home;
