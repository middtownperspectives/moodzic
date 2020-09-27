import React from "react";
import logo from "./assets/under-construction.png";
import "./App.css";
import Homepage from "./pages/home/Homepage";
import Nav from "./components/navigation/Nav";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Under construction!</p>
        </header> */}
        <Homepage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
