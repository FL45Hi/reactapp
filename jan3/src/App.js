import logo from './logo.svg';
import './App.css';
import Context from './components/Context';
import HighOC  from './components/HOC';
import MaterialUI from './components/MaterialUI';
import SimpleDemo from './components/SimpleDemo';
import HOCComp from './HOCComp';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
import MultiContext from './components/multiContext';

function App() {
  return (
    <>
    <h1> Hello World! </h1>
    <Context/>
    <UserProvider value="Krishna">
      <ComponentC />
    </UserProvider>
    <h4>Multiple Context...</h4>
    <MultiContext />


    <MaterialUI />

    <div>
      <h4>Higher Order Components...</h4>
      <SimpleDemo />
      <HOCComp />
    </div>    
    </>
  );
}

export default App;
