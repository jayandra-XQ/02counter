import { useState } from 'react'
import './App.css'

function App() {
  
  let counter = 5;

  const addValue = () => {
    counter = counter + 1;
  }

  return (
    <>
     <h1> Chai aur react </h1>
     <h2>counter value: {counter}</h2>

     <button
     onClick={addValue}
     > Add Value </button>
     <br />
     <br />
     <button>Remove Value</button>
    </>
  )
}

export default App
