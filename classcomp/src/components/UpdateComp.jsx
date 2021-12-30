import React from "react";
import { ReactDOM } from "react";

{
  /* Component lifecycle methods pertains to class-based React components.
    4 phases: initialization, mounting, updating and unmounting in that order
 */
}

class EvenNums extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should I update?");

    if (nextProps.value % 2 == 0) {
      return true;
    }
    return false;
    // update component
  }

    componentWillReceiveProps(nextProps) {console.log("Receiving new props..."); }

    // static getDerivedStateFromProps(props, state) {
    //     console.log("Receiving new props...");
    // }

    componentDidUpdate() {
        console.log("Component re-rendered.");
    }

    componentWillUnmount() {
        console.log("Component Unmounted.");
    }

    render() {
        return <h1>{this.props.value}</h1>;
    }
}

class UpdateComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState({
      value: this.state.value + 1,
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <EvenNums value={this.state.value} />
      </div>
    );
  }
}

export default UpdateComp;
