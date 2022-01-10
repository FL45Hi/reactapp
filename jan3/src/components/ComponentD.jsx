import React, { Component } from 'react'
import ComponentE from './ComponentE'
import UserContext from './userContext'

export class ComponentD extends Component {

    // static contextType = UserContext 
    // same works

    render() {
        return (
            <div>
                Component D Context {this.context}
                <ComponentE />
            </div>
        )
    }
}
ComponentD.contextType = UserContext

export default ComponentD
