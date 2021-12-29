import React from 'react';
import { ReactDOM } from 'react';


{/* Component lifecycle methods pertains to class-based React components.
    4 phases: initialization, mounting, updating and unmounting in that order
 */}

// Mounting Component


class MountComp extends React.Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date()};
    }

    // Note: componentWillMount has been renamed, and is not recommended for use.
    // componentWillMount() { console.log("Component will mount!...")}
    

    componentDidMount() {
        console.log("Component did mount...");

        this.timerID = setInterval(
            () => this.tick(),
            1000
        );

    }

    componentWillUnmount() {
        console.log("Component will unmount...");
        clearInterval(this.timerID);
    }

    tick() {
        this.setState( {
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h2>Timer 1</h2>
                <h3>Time: {this.state.date.toLocaleTimeString()}.</h3>
            </div>
        )
    }

}

export default MountComp;