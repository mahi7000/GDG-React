import { useState } from 'react';
import './App.css';
import { UserCard } from './UserCard/UserCard';

function App() {
  const [ count, setCount ] = useState(0);

  return (
    <div className="App">
      <UserCard name={"Meaza"} email={"meaza1996@gmail.com"} age={20} /> 
      <h3>{count}</h3>
      <div className='buttons'>
        <button onClick={() => {setCount(count + 1)}}>Increment</button>
        <button onClick={() => {setCount(count - 1)}}>Decrement</button>
        <button onClick={() => {setCount(count / count - 1)}}>Reset</button>
      </div>
    </div>
  );
}

export default App;
