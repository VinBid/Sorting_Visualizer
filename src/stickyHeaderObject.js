import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './StickyHeader.css';

const StickyHeader = () => {
  const sortingAlgorithms = [
    { label: 'Visualizer', sectionId: 'visualizer', customOffset: -100 },
    { label: 'Information', sectionId: 'information' },
    { label: 'Runtimes', sectionId: 'runtimes', customOffset: -150 },
  ];

  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = sortingAlgorithms.map(algorithm => {
        const section = document.getElementById(algorithm.sectionId);
        return section.offsetTop + (algorithm.customOffset !== undefined ? algorithm.customOffset : -70);
      });

      const currentPosition = window.scrollY + window.innerHeight / 16;

      let newActiveButtonIndex = 0;
      for (let i = 0; i < sectionOffsets.length; i++) {
        if (currentPosition >= sectionOffsets[i]) {
          newActiveButtonIndex = i;
        }
      }

      setActiveButtonIndex(newActiveButtonIndex);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="header"> 
      <div className="title">Sorting Visualizer</div> 
      {sortingAlgorithms.map((algorithm, index) => (
        <Link
          key={index}
          to={algorithm.sectionId}
          smooth={true}
          offset={algorithm.customOffset !== undefined ? algorithm.customOffset : -70}
          duration={500}
          className={`button ${activeButtonIndex === index ? 'active' : ''}`}
        >
          {algorithm.label}
        </Link>
      ))}
    </div>
  );
};

export default StickyHeader;
