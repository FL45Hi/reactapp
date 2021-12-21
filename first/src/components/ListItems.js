import React, {useState }from 'react';

const ListItems = () => {


    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
        // <div>{number}</div>
        <div key={number.toString()}>{number}</div>
    );
    
    return (
    <div>{listItems}</div>
    );
        
}

export default ListItems;