import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import {Fuck} from './components/Fuck'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Toot from './components/Toot'

function App() {
  return (
    <div className="App">
      <Greet></Greet>
      <Fuck></Fuck>
      <Welcome></Welcome>
      <Hello></Hello>
      <Toot name="Fuck" symptoms="cum">
        <p>Fuck yeah</p>
      </Toot>
      <Toot name="Idiot" symptoms="low iq">
        <buttom>Fook</buttom>
      </Toot>
      <Toot name="Autist" symptoms="weaponized"></Toot>
    </div>
  );
}

export default App;
