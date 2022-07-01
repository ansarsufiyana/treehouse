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
                <img src={images.Burger} alt="Burger" />
                <img src={images.Chapshroo} alt="Chapshroo" />
                <img src={images.Food} alt="Food" />
                <img src={images.Food01} alt="Food1" />
                <img src={images.Rice} alt="Rice" />
                <img src={images.Karahi} alt="Karahi" />
                <img src={images.Fries} alt="Fries" />
                <img src={images.Nan} alt="Nan" />
                <img src={images.Sheek} alt="Sheek" />
                <img src={images.Tea} alt="Tea" />
        </div>
      </div>
    </div>
  )
}

export default Items
