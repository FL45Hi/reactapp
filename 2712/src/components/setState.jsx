import React, { Component } from "react";
/*
If we have to update the state based on previous state, 
pass a function as an argument instead of regular object.
*/

class CountIncreaseBy5 extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increment() {
    // this.setState({
    //     count: this.state.count + 1
    // },
    //     () => {
    //         console.log("Callback Value", this.state.count)
    //     }
    // ); console.log(this.state.count)

    this.setState(
      (prevState) => ({ count: prevState.count + 1 })
      // (prevState + props ) => ({count : prevState.count + this.props})
      // also can update with the props also.
    );
    console.log(this.state.count);
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();

    // All the five statements are done in one go,
    // so we need to pass function with prev state to get the result.
  }

  render() {
    return (
      <>
        <div>Count - {this.state.count} </div>
        <button onClick={() => this.incrementFive()}>Subscribe</button>
      </>
    );
  }
}
export default CountIncreaseBy5;
