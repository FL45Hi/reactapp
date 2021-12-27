import React, { useState } from 'react';


const EventHandler = () => {
    const [ count, setCount ] = useState(0)
  
    const handleClick = () => {
      console.log('clicked')
    }
  
    return (
      <div>
        <div>{count}</div>
        {/* <button onClick={() => console.log('clicked')}> */}

        <button onClick={() => setCount(count + 1)}>
        plus
        </button>
        <button onClick={() => setCount(0)}> zero </button>
      </div>
    )
  }

export default EventHandler;