import "./App.css";
import { HeaderComp } from "./components/headerSet.jsx";
import { MainPage } from "./components/generalInfo.jsx";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderComp />
      </header>

      <div>
        <MainPage />
        <h1>puritonas</h1>
      </div>
    </div>
  );
}

export default App;
