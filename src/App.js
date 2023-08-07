import React from 'react';
import SortingVisualizing from './SortingVisualizing/SortingVisualizing';
import StickyHeader from './stickyHeaderObject';
import './App.css';

function App() {
  return (
    <div className="App">
      <StickyHeader />
      <div className="sorting-container">
        <SortingVisualizing />
        
      </div>
    </div>
  );
}

export default App;
