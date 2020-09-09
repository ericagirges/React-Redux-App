import React from "react";
import "./App.sass";
import CardList from "./components/CardList";

function App() {
  return (
    <div className="App">
      <h1 className="title">Magic the Gathering</h1>

      <div className="field">
        <div className="control">
          <input className="input" type="text" placeholder="Input" />
        </div>
      </div>

      <div className="field">
        <p className="control">
          <span className="select">
            <select>
              <option>Select dropdown</option>
            </select>
          </span>
        </p>
      </div>

      <div className="buttons">
        <button className="button is-primary">Search</button>
        <button className="button is-link">Reset</button>
      </div>
      <CardList />
    </div>
  );
}

export default App;
