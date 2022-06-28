import './Items.css'
import {images} from "../../constans"

function Items() {
  return (
    <div>
      <div>
        <div className="app__items-names">
                <h2>All</h2>
                <h2>Breakfast</h2>
                <h2>Chef's Special</h2>
                <h2>Desert</h2>
                <h2>Dinner</h2>
        </div>
        <div className="app__items-imgs">
                <img src={images.Burger} alt="" />
                <img src={images.Chapshro} alt="" />
                <img src={images.Food} alt="" />
                <img src={images.Food01} alt="" />
                <img src={images.Youroder} alt="" />
                <img src={images.Rice} alt="" />
                <img src={images.Name} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Items
