import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import { useState } from 'react';
import ImageSlider from './components/ImageSlider';
import SliderSites from './components/SliderSites';

function App() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <div className="App">
      <NavBar contactOpen={contactOpen} setContactOpen={setContactOpen}/>
      <div className="main-page">
      <Main />
      <ImageSlider slides={SliderSites} />
      </div>
    </div>
  );
}

export default App;
