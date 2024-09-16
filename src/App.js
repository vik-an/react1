import "./App.css";
import { TopBar } from "./components/TopBar.jsx";
import { MainPage } from "./components/generalInfo.jsx";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar />
      </header>

      <div>
        <MainPage />
        <h1>puritonas</h1>
      </div>
    </div>
  );
}

export default App;
