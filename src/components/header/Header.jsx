import React from "react";
import Veiw from "../../img/veiw01.jpg";
import "./Header.css";


function Header() {
  return (
    <div className="app__header-main">
      <div className="app__header-img">
        <img src={Veiw} alt="veiw" />
      </div>
    </div>
  );
}

export default Header;
