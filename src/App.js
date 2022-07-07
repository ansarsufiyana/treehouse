
import './App.css';
import Aboutus from './components/Aboutus/Aboutus';
import Price from './components/afordableprice/Price';
import Greatplace from './components/greatplace/Greatplace';
import Header from './components/header/Header';
import Items from './components/Items/Items';
import Lassi from './components/lassi/Lassi';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      < Navbar />
      <Header />
      <Aboutus />
      < Price />
      < Items />
      <Greatplace />
      <Lassi />
    </div>
  );
}

export default App;
