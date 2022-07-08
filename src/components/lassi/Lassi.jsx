import React from "react";
import { images } from "../../constans";
import './Lassi.css'

function Lassi() {
  return (
    <div>
      <div className="app__lassi-main">
        <div className="app__lassi-img">
          <img src={images.Lassi} alt="" />
        </div>
        <div className="app__lassi-text">
          <div className="app__lassi-button">
          <button>OUR LASSI</button>
          </div>
          <p>
            Here at Restaurant we’re all about the love of Lassi. New and bold
            flavors enter our doors every week, and we can’t help but show them
            off. While we enjoy the classics, we’re always passionate about
            discovering something new, so stop by and experience our craft at
            its best.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Lassi;
