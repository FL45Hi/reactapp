// let declares variables that are limited to scope of block statement {}
// const : works like let, but must be immediately initialized before
// being used and can never be modified. 

import React from "react";

function ConstLetVar() {
    var num =10;
    for (let num =0; num < 12; num++) {
        //block of code
        //statement
    }

    


    // (function f() {
    //     let x;
    //     {
    //         //block scoped name
    //         const x = "scope";
    //         //error, const
    //         x = "block";
    //     }
    //     // error, already declared in block
    //     let x = "inner";    
    //     //redeclaration is not allowed using let, even if first it is decleraed using var and vice-versa
    // })();

  return (
    <div>
      <h1>Hello World!</h1>
      
      <h3>Num: {num}</h3>

      {/* <h3>X {x}</h3> */}
    </div>
  );
}

export default ConstLetVar;
