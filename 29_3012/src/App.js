import "./App.css";
import BootStrapComp from "./components/BootStrapComp";
// External CSS file.
import List from "./components/List";
import Map from "./components/Map";
import { useState } from "react";

const Styles = {
  color: "purple",
  fontSize: 40,
  border: "2px solid purple",
  width: "30%",
};
/*
If you have a large set of styles, you can assign a style object 
to a constant to keep your code organized.
*/

function App() {
  let numbers = [1, 2, 3, 4, 5];
  let names = ["krishna", "sumit", "guru", "priyesh", "sohel"];

  const [flag, setFlag] = useState(false);

  console.log(numbers);
  return (
    <div>
      <h1>Hello World!</h1>

      <List nums={numbers} />

      <Map names={names} />

      {/* Inline CSS  */}
      <div style={{width: "50%"}}>
        <div style={{ color: "yellow", fontSize: "1rem" }}>Yellow Div</div>

        <div style={Styles}>Style Me!</div>

        <button onClick={() => setFlag(!flag)}> BootStrap Component</button>
        {flag && <BootStrapComp />}
      </div>
    </div>
  );
}

export default App;
