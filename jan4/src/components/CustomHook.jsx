import React, { useState } from "react";

const CustomHook = () => {

  //Complex State
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });
  
  //Using Spread Opreator complex states
  const handleLeftClick = () => {
    const newClicks = {
      ...clicks,
      left: clicks.left + 1,
    };
    setClicks(newClicks);
  };

  const handleRightClick = () => {
    const newClicks = {
      ...clicks,
      right: clicks.right + 1,
    };
    setClicks(newClicks);
  };

  return (
    <>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </>
  );
};

export default CustomHook;
