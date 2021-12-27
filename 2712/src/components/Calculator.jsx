import React, { useState } from "react";

import "./cal.css";

const calculate = (num1, num2, op) => {
  switch(op){
      case '+': return num1 + num2;
      case '-': return num1 - num2;
      case '*': return num1 * num2;
      case '/': return num1 / num2;
  }
}


const Calculator = () => {

  const initialValues = { first: "1", op: "", second: 1};
  const [data, setData] = useState(initialValues);

  const [res, setRes] = useState(0);

  const handleInput = (e) => {
    
    const { name, value } = e.target;
    setData( { ...data, [name]: value });
  }

  const getRes = (e) => {

    console.log(data.op);
    setRes(calculate(Number(data.first), Number(data.second), data.op));
  }
  
  return (
    <>
      <div>
        <label>Enter first number: </label>
        <br />
        <input type="number" name="first" id="firstNumber" 
        value={data.first} 
        onChange={handleInput}/>
      </div>
      <div>
        <select name="op" value={data.op} 
        onChange={handleInput} id="op" 
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </div>
      <div>
        <label>Enter Second number: </label>
        <br />
        <input type="number" name="second" id="secondNumber" 
        value={data.second} 
        onChange={handleInput} />
      </div>
      <div>
        <button id="cal" onClick={getRes}>calculate</button>
        <span id="result">{res}</span>
      </div>
    </>
  );
};

export default Calculator;
