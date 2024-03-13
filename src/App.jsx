import "./App.css";
import Navbar from "./components/Navbar";
import React, {useState} from "react";
import Calculate from "./components/calculate";

function App() {
  return (
    <>
      <Navbar />
      
      <h1>Inventory Order</h1>
      <p>Ware House</p>
      <ul>
        <ol>Spanner<Calculate /></ol>
        <ol>Allen Key<Calculate /></ol>
        <ol>rebike Tape<Calculate /></ol>
        <ol>Printing Paper<Calculate /></ol>
        <ol>Wrap<Calculate /></ol>
        <ol>Stickers<Calculate /></ol>


      </ul>
      
    </>
  );
}
export default App;
