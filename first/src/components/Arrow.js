// 

import React from "react";

class Person {
    constructor() {
        this.age = 0;

        //Arrow fn, it doesn't create new context - it uses enclosing class i.e.Person class.
        setInterval(() => {
            this.age++;
            console.log(this.age);
        }, 1000);
    }
}

const Arrow = () => {

    // Experession bodies

    let evans = [2, 4, 6, 8, 10, 12]
    var odds = evans.map(v => v + 1);
    var nums = evans.map((v, i) => v + i);
    var pairs = evans.map(v => ({even: v, odd: v+1}))

    console.log("Odd Numbers: "+odds);
    console.log("Numbers: "+nums);
    console.log("Pairs: "+pairs);


    // statement bodies
    let fives = [];
    nums.forEach( v => {
        if(v%5 === 0)
            fives.push(v);
    });
    console.log("Numbers : "+ nums);
    console.log("fives : "+ fives);


    


    return (
        <>
            <p>Odd Numbers: {odds + ""}</p>
            <p>Numbers: {nums + ""}</p>
            {/* <p>Pairs: {pairs}</p> */}

            
            <p>Numbers: {nums + ""}</p>
            <p>Fives: {fives + ""}</p>
            
            <p>{new Person}</p>
            
        </>
    )
}

export default Arrow;