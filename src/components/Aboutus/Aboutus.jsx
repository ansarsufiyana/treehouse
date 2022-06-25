import React from "react";
import './Aboutus.css'
import Fork from "../../components/icons/fork.jpeg";
import Rice from "../../img/rice.jpg"
import Burger from "../../img/burger.jpg"
import Chapshro from "../../img/chapshro.jpg"
import Food from "../../img/food.jpg"

function Aboutus() {
  return (
    <div className="app__aboutus-main">
      <div className="app__aboutus-text">
        <button>About Us</button>
        <img src={Fork} alt="fork" />
        <p>
          Restaurant is a place for simplicity. Good food, good beer, and good
          service. Simple is the name of the game, and we’re good at finding it
          in all the right places, even in your dining experience. We’re a small
          group from Denver, Colorado who make simple food possible. Come join
          us and see what simplicity tastes like.
        </p>
      </div>
      <div className="app__aboutus-imgs">
        <img src= {Rice} alt="" />
        <img src= {Burger} alt="" />
        <img src= {Chapshro} alt="" />
        <img src= {Food} alt="" />
      </div>
    </div>
  );
}

export default Aboutus;
