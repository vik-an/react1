import "./App.css";
import { TopBar } from "./components/header/TopBar.jsx";
import { MainPage } from "./components/home/generalInfo.jsx";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar />
      </header>

      <div>
        <MainPage />
      </div>
    </div>
  );
}

export default App;
