import React, { useRef } from 'react';
import './App.css';
import Inputfield from './Components/Inputfield';

const App: React.FC = () => { // arrow function 
  const myRef = useRef<HTMLInputElement>(null);
  function enableDM(){
    if(myRef.current){
      myRef.current.classList.toggle("dark_clr")
    }
  }

  return (
    <div className="App" ref={myRef}>
      <div className='dark_mode'><button className='dm_btn' onClick={enableDM}><img src="https://cdn-icons-png.flaticon.com/512/6714/6714978.png" alt="DM" /></button></div>
      <span className='heading'>Taskify</span>
      <Inputfield myRef={myRef}/>
    </div>
  );
}

export default App;
