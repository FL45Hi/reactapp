import React from "react";

const MapSet = () => {

    //Sets 
    var s = new Set();
    s.add("hello").add("goodbye").add("hello");
    // s.size === 2;
    // s.has("hello")  === true;           // true, Set(2) {'hello', 'goodbye'}

    console.log(s);

    //Maps 
    var m = new Map();
    m.set("hello", 42);
    m.set(s, 34);
    // m.get(s) == 34;                     // true, Map(2) {'hello' => 42, Array(2) => 34}

    console.log(m);

    //Weak Maps
    var wm = new WeakMap();
    wm.set(s, {extra: 42});
    // wm.size === undefined;

    console.log(wm);

    return (
        <>
        <div>
            {/* <p>Set : {s}, Map : {m}, Weak Map : {wm}</p> */}
            </div>
        </>
    )
}

export default MapSet;

