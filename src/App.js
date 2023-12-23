import './App.css';
import Form from './Form';
import Nav from './Nav';
import About from './About';
import Alert from "./Alert";
import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import {BrowserRouter as Router,
//     Switch,
//     Link,
//     Route} from "react-router-dom";
function App() {
    const[mode,setMode] = useState('light');
    const toggleMode = () => {
        if(mode === 'light'){
            setMode('dark');
            document.body.style.backgroundColor = '#042743';
            document.title = "TextUtils - Dark Mode";
        }
        else{
            setMode('light');
            document.body.style.backgroundColor = 'white';
            document.title = "TextUtils - Light Mode";
        }
    }
  return (
      <>
     <h1>Hellow
          </h1>
          </>
  );
}

export default App;
