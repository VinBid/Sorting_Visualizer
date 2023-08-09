import React from 'react';
import SortingVisualizing from './SortingVisualizing/SortingVisualizing';
import StickyHeader from './stickyHeaderObject';
import './App.css';
import InformationalObject from './informationalObject'; // Correct the filename casing

function App() {
  return (
    <div className="App">
      <StickyHeader />
      <div className="sorting-container">
        <SortingVisualizing />    
      </div>
      <div className='infomationContainer'>
        <InformationalObject />
      </div>
    </div>
  );
}

export default App;
