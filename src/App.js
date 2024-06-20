import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = (gg) => {
    if (gg) {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#52529d';
      showAlert("Dark mode has been enabled", "success");
    }
  };

  const ccr = (color) => {
    console.log('buttonClicked');
    setMode(color);
  };

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" About="About" mode={mode} toggleMode={toggleMode} colorchange={ccr} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter Text to Analyze Below" mode={mode} />} />
          </Routes> */}
          <Textform showAlert={showAlert} heading="Enter Text to Analyze Below" mode={mode} />
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
