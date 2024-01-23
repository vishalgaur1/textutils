import './App.css';
import Navbar from './conponents/Navbar';
import Textform from './conponents/Textform';
// import About from './conponents/About';
import Alert from './conponents/Alert';
import React, { useState } from 'react'



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null); 

  
  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const toggleMode = (gg) => {
    // if (mode === 'light') {
    //   setMode('dark');
    //   document.body.style.backgroundColor = '#52529d'
    //   showAlert("Dark mode has been enabled", "success");
    // }
    // else if (mode=='dark') { 
    //   setMode('light');
    //   document.body.style.backgroundColor = 'white'
    //   showAlert("Light mode has been enabled", "success");
    // }
    if(gg){
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success");
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#52529d'
      showAlert("Dark mode has been enabled", "success");
    }
  }


  const ccr = (color) =>{
    console.log('buttonClicked')
    setMode(color);
  }

  return (
    <>
      <Navbar title="TextUtils" About="About" mode={mode} toggleMode={toggleMode} colorchange={ccr}/>
        <Alert alert={alert}/>
      <div className="container my-3">
        <Textform showAlert={showAlert} heading="Enter Text to Analyze Below" mode={mode} />
        {/* <About/> */}
      </div>

    </>
  );
}

export default App;
