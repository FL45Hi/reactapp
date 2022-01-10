import React, { useState } from 'react';

// Note: rmb EventHandler is function not a function call(donot add parathesis)

const EventHandler = () => {
    const [ count, setCount ] = useState(0)
  
    const handleClick = () => {
      console.log('clicked')
    }
  
    return (
      <div>
        <div>{count}</div>
        {/* <button onClick={() => console.log('clicked')}> */}
        {/* <button onClick={handleClick} ></button>*/}
        {/* <button onClick={() => handleClick()} */}

        <button onClick={() => setCount(count + 1)}>
        plus
        </button>
        <button onClick={() => setCount(0)}> zero </button>
      </div>
    )
  }

export default EventHandler;