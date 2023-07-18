import "../src/App.css";
import React, { useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import SymptomChecker from "./components/SymptomsChecker";
import LogIn from "./components/LogIn";
import About from './components/About'


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/checker" element={<SymptomChecker />} />
      </Routes>
    </>
  );
};

export default App;
