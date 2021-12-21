// Rest parameters work a lot like arguments, but with two notable advantages.
// You can assign them to any variable name you’d like.
// You can start at any argument you want.

import  React, {useState} from 'react';

export default function Restparams() {

    var logStuff = (arg1, arg2, ...moreArgs) => {
        // Logs arg1, arg2
        console.log(arg1);
        console.log(arg2);

        // Logs an array of any other arguments you pass in after arg2
        console.log(moreArgs);
      };

      // arg1 = 'chicken'
      // arg2 = 'tuna'
      // moreArgs = ['chips', 'cookie', 'soda', 'delicious']
      logStuff("chicken", "tuna", "chips", "cookie", "soda", "delicious");



      // with the ES6 rest params 
      var add = (...args) => {
        // Set a starting total
        var total = 0;

        // Add each number to the total
        for (var i = 0; i < args.length; i++) {
          total += args[i];
        }
        return total;
      };

      // with arguments js object
      var addi = function () {
        // Set a starting total
        var total = 0;

        // Add each number to the total
        for (var i = 0; i < arguments.length; i++) {
            total += arguments[i];
        }
        return total;
        };


    return (
        <>
            <div><h2>{add(10, 12, 4, 6)} { add(34) }</h2></div>
        </>
    )
}
