import './App.css';
import axios from "axios";
import React,{ useEffect } from "react";
import BreweryList from "./components/BreweryList";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <BreweryList />
      </header>
    </div>
  );
}

export default App;
