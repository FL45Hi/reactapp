import './App.css';
import List from './components/List';
import Map from './components/Map';


function App() {

  let numbers = [1, 2, 3, 4, 5];
  let names = ["krishna", "sumit", "guru", "priyesh", "sohel"];

  console.log(numbers);
  return (
    <div>
      <h1>Hello World!</h1>

      <List nums={numbers} />

      <Map names={names} />
      
    </div>
  );
}

export default App;
