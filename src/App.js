import React from 'react';
import './App.css';
import Dogs from './components/Dogs'

function App() {
  return (
    <div className="App">
      <Dogs onDogSelected={e => console.log(e)}/>
    </div>
  );
}

export default App;
