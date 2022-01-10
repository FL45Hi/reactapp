import React, { Component } from 'react';
import StockList from './StockList';
import UserList from './UserList';
import Hoc from './Hoc';

const StocksData = [
  {
      id: 1,
      name: 'TCS'
        
  },
  {
      id: 2,
      name: 'Persistent'
  },
  {
      id: 3,
      name: 'MindTree'
  }
];

const UsersData = [
    {
        id: 1,
        name: 'Krishna'
          
    },
    {
        id: 2,
        name: 'Priyesh'
    },
    {
        id: 3,
        name: 'Guru'
    }
  ];


  const Stocks = Hoc(
    StockList,
    StocksData
  );
  
  const Users = Hoc(
    UserList,
    UsersData
  );

  
  class  HOCComp extends React.Component {
      render() {
      return (
          <div>
               <Users />
              <Stocks />
          </div>
      )
  }
}
  
  export default HOCComp
  