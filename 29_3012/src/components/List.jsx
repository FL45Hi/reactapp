import React from "react";

const ListItem = (props) => {
  console.log(props.value);
  return <li>{props.value} := {props.value * 2}</li>;
};

const List = (props) => {
  const nums = props.nums;

  console.log(nums);
  // Key Should be Specified inside Array.

  const listItems = nums.map((num) => {
    return <ListItem key={num.toString()} value={num} />;
  });

  return (
  <div>
        <h4>List of Number with Squares.</h4>
        <ul>{listItems}</ul>;

  </div>
  )
};

export default List;
