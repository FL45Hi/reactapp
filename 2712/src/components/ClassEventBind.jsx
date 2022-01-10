import React, { Component } from 'react'

export class ClassEventBind extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            msg: 'Hello, Morning'
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.setState({
            msg: 'Good, Bye'
        })
        console.log(this)
    }

    // clickHandler = () => {
    //     this.setState({
    //         msg: 'Good, Bye'
    //     })
    //     console.log(this)
    // }
    // This approach works without binding and using arrow fn in onClick method.

    

    render() {
        return (
            <div>
                <div>{this.state.msg}</div>
                {/* <button onClick={this.clickHandler}>Event Bind </button> 
                For this approach to work, we bind event in constructor. */}
                <button onClick={this.clickHandler.bind(this)}>Event Bind </button>
                {/* <button onClick={() => this.clickHandler() }>Event Bind </button>  */}

            </div>
        )
    }
}

export default ClassEventBind

/*
Note: 
 'this' keyword is undefined because this used with a function returns 'window' object on the browser 
 and 'global' object inside nodejs environment. Since 'react strict mode' is enabled, 
 it is returning 'undefined'.

 and for arrow fn:
 arrow functions don't create their own context so there it works without binding.
*/
