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
                <img src={images.Chickenbiryani} alt="Chickenbiryani" />
                <img src={images.Fries} alt="Fries" />
                <img src={images.Tea} alt="tea" />
                <img src={images.Roti} alt="Roti" />
                <img src={images.Muttonkheema} alt="Muttonkheema" />
                <img src={images.Whitehandi} alt="Whitehandi" />
                <img src={images.Kebab} alt="Kebab" />
        </div>
      </div>
    </div>
  )
}

export default Items
