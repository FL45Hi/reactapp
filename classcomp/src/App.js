// import logo from './logo.svg';
import "./App.css";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import CompositionComp from "./components/CompositionComp";
import ClockClassComp from "./components/ClockClassComp";
import MountComp from "./components/MountComp";
import UpdateComp from "./components/UpdateComp";
import ExampleLifeCycle from "./components/ExampleLifeCycle";


// Root level usage
// ReactDOM.render(<p>Hi!</p>, document.getElementById('root'));



class App extends React.Component {
  constructor() {
    super();
    this.state = { age: 22};
    this.updateSetState = this.updateSetState.bind(this);

    this.updateSetDefault = this.updateSetDefault.bind(this);
  }

  updateSetState()  {
    this.setState({ 
      age: this.state.age + 1
    })
  }

  updateSetDefault() {
    this.setState({
      age: 20
    })
  }

  // state = { data: "" };

  render() {
    return (
      <>
        <h2>Hi, I am first react component!</h2>
        
        <h2>Age : {this.state.age}</h2>

        <button onClick={this.updateSetState} >IncreaseAgeby1 </button>

        <button onClick={this.updateSetDefault} >SetToDEfault </button>


        <div>
          <h2>Composition Components</h2>
          <CompositionComp />
        </div>

        <div id="clock"><ClockClassComp/></div>


      </>
    );
  }
}

// ReactDOM.render(
//   <ClockClassComp/>,
//   document.getElementById('clock')
// )


class Root extends React.Component {
  render() {

  return (<Router>
    {/* <Switch> Switch is got replaced by Routes and works as same */}
    <Routes>
      <Route exact path="/" element={<App/>} />
      <Route exact path='/mount' element={<MountComp />} />
      <Route exact path='/update' element={<UpdateComp />} />
      <Route exact path='/ex' element={<ExampleLifeCycle />} />

    {/* </Switch> */}
    </Routes>
  </Router>)
  }
}

export default Root;



