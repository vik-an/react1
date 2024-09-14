import "./header.css";
import logo from "./pictures/car.png";

export const HeaderComp = () => {
  return (
    <div className="App-header">
      <img src={logo} alt="red car" className="App-logo" />
      <a> Home</a>
      <a> Services</a>
      <a> About Us</a>
      <button onClick={() => alert("Not today")}>Login/ Sing UP</button>
    </div>
  );
};
