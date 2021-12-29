// Embedding Map()

import React from "react";

const ListVal = (props) => <li>{props.value}</li>

const Map = (props) => {
  const names = props.names;

  return (
    <div>
      <h4>List of Number with Squares.</h4>
      <ul>
        { names.map((name) =>  
            <ListVal key={name.toString()} value={name} />
        ) }
      </ul>
      ;
    </div>
  );
};

export default Map;
