
import React, { useState } from 'react';
import Intro from './components/Intro';
import About from './components/About';
import './App.css';

function App() {
  const [showMain, setShowMain] = useState(false);

  return (
    <div className="App">
      {showMain ? <About /> : <Intro onFinish={() => setShowMain(true)} />}
    </div>
  );
}

export default App;
