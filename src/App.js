import "../src/App.css";
import React, { useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Registration from "./components/Registration";
import SymptomChecker from "./components/SymptomsChecker";


const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/checker" element={<SymptomChecker/>} />
      </Routes>
    </>
  );
};

export default App;
