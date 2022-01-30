import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import { useState } from 'react';

function App() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <div className="App">
      <NavBar contactOpen={contactOpen} setContactOpen={setContactOpen}/>
      <Main />
    </div>
  );
}

export default App;
