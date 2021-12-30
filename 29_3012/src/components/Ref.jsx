import React, { useRef } from "react";

/*
Refs is similar to keys in React or literlly references in React. 
useRef returns mutable ref object
Object's .current property is initialized to passed argument - default intial value.
Returned object will persist for lifetime of component.

const refObject = useRef(initialValues);
*/

const REF = (props) => {

    const myInput = useRef();
    const focusMyInput = () => myInput.current.focus();

    const myCounter = useRef(0);
    
    const updateState = () => {
        // We can update current props of Referenced Object.
        myCounter.current++;
        console.log(myInput, myCounter.current);
    }
    // Interacting with DOM is side-effect
    

    return (

        <>
            {/* Accessing DOM nodes or React Elements. */}
            <input type="text" ref={myInput} />
            <button onClick={focusMyInput}> Focus Input </button>

            {/* Keeping a mutable Object. */}
            <div>myCounter : {myCounter.current}</div>
            <input type="button" onClick = { () => updateState() } value="Update myCounter"></input>

        </>
    )
}

export default REF;