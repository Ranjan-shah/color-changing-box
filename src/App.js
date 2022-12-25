import React,{useState} from 'react';
import './App.css';

function App() {
  const [state, setState] = useState(false);
  const toggle=()=>{
    setState(!state);
  }
  return (
    <div className='App'>
      <div className='containeer'>
      <h1>Welcome to color changing box</h1>
      <div className={'toggle--button ' + (state ? 'toggle--close':'')}>
      <button onClick={toggle} className='but' >
       Click me!

      </button>
      </div>
      
      </div>
    </div>
  );
}

export default App;
