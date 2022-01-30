import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import ImageSlider from './components/ImageSlider';
import SliderSites from './components/SliderSites';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main-page">
      <Main />
      {SliderSites.length > 0 ? (<ImageSlider slides={SliderSites} />) : null }
      </div>
    </div>
  );
}

export default App;
