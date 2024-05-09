import { useState, useRef } from 'react'
import React from 'react'

import './App.css'

import {ActionMachine} from "./computage";
import { NavBar } from "./CC/NavBar";
import {SuperCanvas} from './CC/SuperCanvas'

function App() {
  var mainMesh;
  window.actionMachine = new ActionMachine();

  const [count, setCount] = useState(0);
  
  return (
    <>
      <div className='App'>
        <NavBar />
        <SuperCanvas />
      </div>
    </>
  )
}

export default App
