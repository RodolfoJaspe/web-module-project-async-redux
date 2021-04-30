import './App.css';
import React from "react";
import BreweryList from "./components/BreweryList";
import Search from "./components/Search"

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Brewery Finder</h1>
        <Search />
        <BreweryList />
      </header>
    </div>
  );
}

export default App;
