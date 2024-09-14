import "./header.css";
import logo from "./pictures/logoipsum-261.svg";

export const HeaderComp = () => {
  return (
    <div className="App-header">
      <img src={logo} alt="red car" className="App-logo" />

      <a> Home </a>
      <a> Services </a>
      <a> About Us </a>
    </div>
  );
};
