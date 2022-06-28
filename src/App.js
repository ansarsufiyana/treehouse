
import './App.css';
import Aboutus from './components/Aboutus/Aboutus';
import Price from './components/afordableprice/Price';
import Header from './components/header/Header';
import Items from './components/Items/Items';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      < Navbar />
      <Header />
      <Aboutus />
      < Price />
      < Items />
    </div>
  );
}

export default App;
