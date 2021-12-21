import React from 'react';

const ReduceFilter = () => {

    let getSquare = (item) =>  { return item * item };
    const numbers = [1, 2, 3, 4];
    const squareOfNumbers = numbers.map(getSquare);
    console.log(squareOfNumbers); // [1, 4, 9, 16]
    
    let getSum = (result, item) =>  result + item;
    const sumOfNumbers = numbers.reduce(getSum, 0);
    console.log(sumOfNumbers); // 10
    
    let isGreaterThanTwo = (item) => { return item > 2 };
    let greaterThanTwoArray = numbers.filter(isGreaterThanTwo);
    console.log(greaterThanTwoArray); // [3,4]

    return (
        <>
            <h5>Numbers : {numbers} </h5>
            <p>Square Of Number : {squareOfNumbers + ""} </p>

            <p>Sum Of Numbers : {sumOfNumbers + ""} </p>

            <p>Greater than 2 Of Number : {greaterThanTwoArray + ""} </p>

        </>
    )
}

export default ReduceFilter;