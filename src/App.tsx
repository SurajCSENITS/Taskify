import React, { useRef } from 'react';
import './App.css';
import Inputfield from './Components/Inputfield';

const App: React.FC = () => { // arrow function 
  const myRef = useRef<HTMLInputElement>(null);
  return (
    <div className="App" ref={myRef}>
      <span className='heading'>Taskify</span>
      <Inputfield myRef={myRef}/>
    </div>
  );
}

export default App;
