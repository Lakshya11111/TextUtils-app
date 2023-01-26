import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from "react";
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toogleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#08090B';
      showAlert("Dark mode is enabled!", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled!", "success");
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" about="About" mode={mode} toogleMode={toogleMode} showAlert={showAlert} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to analyze..." mode={mode} />
            </Route>
          </Routes> */}
          <Routes>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Textutils - Word counter, Character counter, Remove extra spaces" mode={mode} />
            }/>
            <Route path="/about" element={ <About mode={mode}/>} />           
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
