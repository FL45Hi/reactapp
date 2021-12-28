// Customer feedback collection.

import './App.css';
import React, {useState} from 'react';
import ComplexState from './ComplexState';
import ConditionRend from './ConditionRend';


const Stats = (props) => {

  console.log(props.text);
  return (
    <p>{props.text}</p>
  )
}

const Button = (props) => {

  return (
    <button onClick={props.onClick}>
      {props.text} 
    </button>
    
  )
}

const App = () =>  {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //complex state
  // const [feed, setFeed] = useState({
  //   bad: 0, good: 0, neutral: 0
  // })

  const increaseGood = () => setGood(good + 1)
  const increaseNeteural = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  const clearFeed = () => {
    setBad(0);setGood(0);setNeutral(0);
  }


  const total = good + neutral + bad;

  return (
    <div className="App">
      <div>
      <h1>Give feedback</h1>

      <Button
        onClick={increaseGood}
        text='good'
        />
        <Button
            onClick={increaseNeteural}
            text='neutral'
        />     
        <Button
            onClick={increaseBad}
            text='bad'
        />   

        <Button
            onClick={clearFeed}
            text='Clear'
        /> 
        </div>

        <div style={{paddingBottom: "15%"}}>
          <h2> Statistics</h2>

          {/* Conditional Rendering */}

          {total!==0 ? (
          
          <div>
          Good:<Stats text={good}/>
          Neutral<Stats text={neutral}/>
          Bad:<Stats text={bad}/>

          Total: <Stats text={total}/>
          {/* passing props to another component */}
          Average : <Stats text={total/3}/>
          </div>

          ) : (<p>No Feedback is given yet</p>) }

          
        </div>

        <div style={{paddingBottom: "30px"}}>
          <h1>Complex state Rendering</h1>

          <ComplexState />
        </div>

        <div>
          <h1>Conditional Rendering</h1>

          <ConditionRend />
        </div>
        
      
    </div>
  );
}

export default App;
