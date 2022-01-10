import './App.css';

/* 
Code Spliting : The perfect solution for handling a large bundle size and 
slow startup is to implement code splitting in you're app
i.e. split your code into smaller chunks which can then be loaded on demand or in parallel.
*/
import Memoization from './components/Memoization';
import Nav from './components/Nav';



export default function App() {
  

  return (
    <div className='App'>
      <Nav />
      <h2>Memoization ...</h2>
      <Memoization />
    </div>
  );
}


