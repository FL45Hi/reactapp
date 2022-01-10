import React from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import ClassClick from "./components/ClassClick";
import ClassEventBind from "./components/ClassEventBind";
import EventHandler from "./components/eventHandler";
import PassStatetoChildComp from "./components/passStatetoChildComp";
import CountIncreaseBy5 from "./components/setState";
import StatefulComp from "./components/statefulComp";

const Hello = (props) => {
  // const name = props.name
  // const age = props.age

  const { name, age } = props; //ES6 destructing

  // const bornYear = () => {
  //   const yearNow = new Date().getFullYear()
  //   return yearNow - props.age
  // }

  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>

      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};

const App = () => {
  const name = "Peter";
  const age = 10;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />

      <div style={{ padding: "10%" }}>
        <h3> StateFul Component</h3>
        <StatefulComp />
      </div>

      <div style={{ padding: "10%" }}>
        <h3> Event Handler with onClick fuctn Component</h3>
        <EventHandler />
      </div>

      <div style={{ padding: "10%" }}>
        <h3> Pass states to child components</h3>
        <PassStatetoChildComp />
      </div>

      <div style={{ padding: "10%" }}>
        <h2>Calculator</h2>
        <Calculator />
      </div>

      <CountIncreaseBy5 />

      <ClassClick />

      <ClassEventBind />
    </div>
  );
};

export default App;
