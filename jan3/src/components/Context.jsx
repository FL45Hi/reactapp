import React from "react";

const MyThemeContext = React.createContext("light");
// Use React.createContext to create new Context Object.

function MyComponent() {
    const theme ="light";

    return (
        <MyThemeContext.Provider value={theme}>
            <div>
                my component.
            </div>
        </MyThemeContext.Provider>
    )
}

/*
Context provider : It is needed to make context availble to all React Components.
This provider lets consuming components to subscribe to context changes.
*/



class Context extends React.Component {
    static contextType = MyThemeContext;

    render() {
        return <button theme={this.context}>Button</button>
    }
}

export default Context;