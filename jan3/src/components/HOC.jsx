import React  from "react";

// const ModifiedComponent = higherOrderComponent(WrappedComponent);
//Styles.js
const Styles = {
    default: {
        backgroundColor: '#737373',
        color: '#eae8e8',
    },
    disable: {
        backgroundColor: '#9c9c9c',
        color: '#c7c6c6',
    }
}

// export default Styles;

//HOC

const translateProps = (props) => {
    let _styles = { ...Styles.default }

    if (props.disable) {
        //existing plus disable styles.
        _styles = {..._styles, ...Styles.disable};
    }

    const newProps = {...props, styles: _styles}

    return newProps;
}

// This fn is HOC function 
// it takes in button... and passes nessary props to that component
const MyHOC = (WrappedComponent) => {
    return function wrappedRender(args) {
        return WrappedComponent(translateProps(args));
    }
}

// usage: button component 
export const HighOC = (props) => {
    return (
        <button style={props.styles}>I am MyButton Comp.</button>
    )
}


// Usage of HOC component

