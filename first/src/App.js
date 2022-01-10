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
import Hello from './components/jsxsynax';

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

      <Hello />

    </div>
  );
}

export default App;
