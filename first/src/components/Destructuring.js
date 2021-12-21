import React, {useState} from 'react';

const employee = {
    id: "ABC",
    name: "Krishna",
    salary: "$300",
    address: {
        city: "pune",
        state: "maharastra",
        country: "India"
    }
};

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };

//list matching 
let [a, b] = [1, 2];

let x = 8, y = 6;
[x, y] = [y, x];

// Object Matching
let { bb, aa } = {
    aa: 1,
    bb: 2
}

// used as param positions
function g({ name: x}) {
    return x;
} 

export default function Destructing() {
     
    const { name, id, address} = employee;

    const { today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;

    return (
        <>
            <div>
                <p>a: {a}, b: {b}</p>
                <p>Swap(8, 6) - : {x},{y}</p>

                <p>aa: {aa}, bb: {bb}</p>

                <p>{g( { name: 5 } )}</p>

                <h2>{name}</h2>
                <h2>{id}</h2>
                <h2>{address.city} {address.state} {address.country} </h2>

                <h2>Temperature</h2>
                <h2>{highToday} {highTomorrow}</h2>

            </div>

        </>
    )
}