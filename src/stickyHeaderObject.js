import React from 'react';
import './StickyHeader.css'; // Import the CSS file

const StickyHeader = () => {
  const sortingAlgorithms = [
    { label: 'Visualizer', sectionId: 'visualizer' },
    { label: 'Information', sectionId: 'information' },
    { label: 'Runtimes', sectionId: 'runtimes' },
  ];

  return (
    <div className="header"> 
      <div className="title">Sorting Visualizer</div> 
      {sortingAlgorithms.map((algorithm, index) => (
        <div className="button" key={index}>{algorithm.label}</div>
      ))}
    </div>
  );
};

export default StickyHeader;
