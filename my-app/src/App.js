import logo from './logo.svg';
import './App.css';
import Accordion1 from './Requirement1/Accordion1';
import Accordion2 from './Requirement2/Accordion2';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import React from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Accordion1 />
        <Accordion2 />
      </BrowserRouter>
    </div>
  );
}

export default App;
