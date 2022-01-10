import React from "react";
import ErrorBoundary from "./ErrorBoundary";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(({ counter }) => ({
            counter: counter + 1
        }));
    }

    render() {
        if (this.state.counter === 5) {
            // Simulate a JS error
            throw new Error('I crashed!');
        }
        return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
    }
}

function BugCounter() {
    return (
        <div>
            <p><b>Click on the numbers to increase the counters. The counter is programmed to throw when it reaches 5. </b> This simulates a JavaScript error in a component.</p>
            <hr />
            <ErrorBoundary>
                <p>These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of them.</p>
                <Counter /> <Counter />
            </ErrorBoundary>
            <hr />
            <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
            <ErrorBoundary>
                <Counter />
            </ErrorBoundary>
            <ErrorBoundary>
                <Counter />
            </ErrorBoundary>
        </div>);
}

export default BugCounter;