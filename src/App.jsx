import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ErrorPage from "./Pages/ErrorPage";
import MarketingPage from "./Pages/MarketingPage";
import MechanicPage from "./Pages/MechanicPage";
import ProjectPage from "./Pages/ProjectPage";
import Warehouse from "./Pages/wareHousePage";
import CustomerSupport from "./Pages/CustomerSupport";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/MarketingPage" element={<MarketingPage />} />
        <Route path="/MechanicPage" element={<MechanicPage />} />
        <Route path="/ProjectPage" element={<ProjectPage />} />
        <Route path="/warehouse" element={<Warehouse />} />
        <Route path="/CustomerSupport" element={<CustomerSupport />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
export default App;
