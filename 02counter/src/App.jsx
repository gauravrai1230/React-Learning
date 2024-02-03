import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // let counter = 5;
  let [counter,setCounter]=useState(5);
  function addValue(){
    // counter++
    if(counter >= 20){

    }
    else {
      setCounter(counter + 1)
    }
  };

  const removeValue = () =>{
    // counter = counter-1
    if (counter <= 0){

    }
    else {
      setCounter(counter - 1)
    }
  };

  return (
    <>
    <h1>Gaurav Counter in vite</h1>
    <h2>Count value : {counter}</h2>
    <button onClick={addValue} >add value</button>
    <br/>
    <button onClick={removeValue} >remove value</button>

    <p>{counter}</p>
    </>
  )
}

export default App
