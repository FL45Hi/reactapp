import React from "react";
const Hello = () => {
    return (
        // React.createElement('h1', {id:"hh", class:'div1'}, 'Hello, JSX!')
    React.createElement('div', null, 
    React.createElement('h1', null, 'Hello, JSX!'))
    );
}

// 3 parameters element, attribute id{id: 'hello'} and innerHTML.

export  default Hello;