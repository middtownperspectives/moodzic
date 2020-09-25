import React from "react";
import logo from "../src/assets/under-construction.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p class="under-construction">Currently under construction.</p>
      </header>
    </div>
  );
}

export default App;
