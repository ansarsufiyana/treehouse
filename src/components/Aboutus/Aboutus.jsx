import React from "react";
import './Aboutus.css'
import Fork from "../../components/icons/fork.jpeg";
import {images} from "../../constans"

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
        <img src= {images.Muttonkheema} alt="Muttonkheema" />
        <img src= {images.Burger} alt="burger" />
        <img src= {images.Milkcoffee} alt="Milkcoffee" />
        <img src= {images.Chickenbiryani} alt="Chickenbiryani" />
      </div>
    </div>
  );
}

export default Aboutus;
