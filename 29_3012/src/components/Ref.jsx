import React, { useState, useEffect, useRef } from "react";

/*
Refs is similar to keys in React or literlly references in React. 
useRef returns mutable ref object
Object's .current property is initialized to passed argument - default intial value.
Returned object will persist for lifetime of component.

const refObject = useRef(initialValues);
*/

const REF = (props) => {


    const [inputValue, setInputValue] = useState("");
    const myInput = useRef();
    const focusMyInput = () => myInput.current.focus();

    const myCounter = useRef(0);

    // const updateState = () => {
    //     // We can update current props of Referenced Object.
    //     myCounter.current++;
    //     console.log(myInput, myCounter.current);
    // }
    // Interacting with DOM is side-effect

    useEffect(() => {
        myCounter.current++;
    });

    const returnVal = () => {
        console.log(myCounter.current.value);
        alert(myCounter.current.value);
    }


    return (

        <>
            <div>
                {/* Accessing DOM nodes or React Elements. */}
                <input type="text" ref={myInput} />
                <button onClick={focusMyInput}> Focus Input </button>
            </div>

            {/* Keeping a mutable Object. */}
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
            <div>Render Counter : {myCounter.current}</div>
            <button onClick={returnVal}>click</button>
            {/* Try typing in the input field, and you will see the application render conut increase.*/}


        </>
    )
}

export default REF;