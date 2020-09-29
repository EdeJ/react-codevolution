import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <Message /> */}
      {/* <Greet name='Emiel' heroName='Batman'>
        <p>this is children props</p>
      </Greet>
      <Greet name='Bob' heroName='Superman' >
        <button>Action</button>
      </Greet>
      <Greet name='Clark' heroName='Wonder Woman' />
      <Welcome name='Emiel' heroName='Batman' />
      <Welcome name='bob' heroName='superman' />
      <Welcome name='Clark' heroName='Wonder Woman' /> */}
    </div>
  );
}

export default App;
