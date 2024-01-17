import './App.css';
import Navbar from './conponents/Navbar';
import Textform from './conponents/Textform';
// import About from './conponents/About';
import React, { useState } from 'react'



function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey'
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      <Navbar title="TextUtils" About="About" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Textform heading="Enter the Text to analyze below" mode={mode} />
        {/* <About/> */}
      </div>

    </>
  );
}

export default App;
