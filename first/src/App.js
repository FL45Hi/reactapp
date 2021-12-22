// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

import ConstLetVar   from './components/ConstLetVar';
import Destructing from './components/Destructuring';
import Spread from './components/Spread';
import Restparams from './components/Restparams';
import MapSet from './components/MapSet';
import ReduceFilter from './components/ReduceFilter';
import Arrow from './components/Arrow';

import ListItems from './components/ListItems';

function App() {
  return (
    <div className='App'>
      <ConstLetVar />
      <Destructing />
      <Spread />
      <Restparams />

      <MapSet />
      <ReduceFilter />
      <Arrow />

      <ListItems />

    </div>
  );
}

export default App;
