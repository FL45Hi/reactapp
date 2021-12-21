import React, {useState} from 'react';

export default function Spread() {

    // 1. concat array

    const arr1 = ['coffee', 'tea', 'milk']
    const arr2 = ['juice', 'smoothie']
    // Without spread
    var beverages1 = arr1.concat(arr2)
    // With spread
    var beverages2 = [...arr1,  ...arr2]
    console.log("concat array: " + beverages2);
    // result
    // ['coffee', 'tea', 'milk', 'juice', 'smoothie']


    // 2. Make copy of array

    const arr3 = ['coffee', 'tea', 'milk']
    // Without spread
    var arr1Copy = arr3.slice()
    // With spread
    const arr2Copy = [...arr3]
    console.log("copy array: "+ arr2Copy);


    // 3. Remove duplicate entries from Array

    const arr4 = ['coffee', 'tea', 'milk', 'coffee', 'milk']
    // Without spread
    // Iterate over the array add it to object as property
    // If value present in the object skip it
    // Else push it to another array
    // With spread
    const arr3Copy = [...new Set(arr4)]
    // result
    // ['coffee', 'tea', 'milk']
    console.log("Remove duplicates in  Array : " +arr3Copy);


    // 4. Convert string to array

    const myBeverage = 'tea'
    // Without spread
    var arr = myBeverage.split('')
    // With spread
    var arr = [ ...myBeverage]
    // result
    // ['t', 'e', 'a']
    console.log("String to Array: "+arr);

    // 5. Find min max

    // Without spread
    var max = Math.max(3, 2, 1, 5, -10)
    // With spread
    var myNums = [3, 2, 1, 5, -10]
    var max = Math.max(...myNums)
    console.log(max);
    // result
    // 5


    return (
        <>
        <div>
            <h1>Spread Operator</h1>

            <p>Concat Array : {arr1}, {arr2} = {beverages2 + ""}</p>

            <p>Copy Array : {arr3} = {arr2Copy + ""}</p>

            <p>Remove duplicates in  Array : {arr4} = {arr3Copy + ""}</p>

            <p> String to Array: {myBeverage} = {arr + ""}</p>
            
            <p> maxNum : {max}</p>
        </div>
        </>
    )
}