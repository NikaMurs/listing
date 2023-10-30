import React from 'react';
import './App.css';
import Listing from './listing/listing';
import data from './data.json'


function App() {
  return (
    <div className="App">
      <Listing items = {data}/>
    </div>
  );
}

export default App;
