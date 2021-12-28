import React, { useState } from "react";

const ComplexState = () => {
  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)

  //Complex State
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  //   const handleLeftClick = () => {
  //     const newClicks = {
  //       left: clicks.left + 1,
  //       right: clicks.right,
  //     };
  //     setClicks(newClicks);
  //   };

  //   const handleRightClick = () => {
  //     const newClicks = {
  //       left: clicks.left,
  //       right: clicks.right + 1,
  //     };
  //     setClicks(newClicks);
  //   };

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

//   Note: This also works. However, it is forbidden in React to mutate state directly,
//   since it can result in unexpected side effects
//   const handleRightClick = () => {
//     setClicks( ...clicks, right: clicks.right + 1,);
//   };

  return (
    <>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </>
  );
};

export default ComplexState;
