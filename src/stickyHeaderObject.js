import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './StickyHeader.css';

const StickyHeader = () => { //code for sticky header. Includes automatic scrolling
  const sortingAlgorithms = [
    { label: 'Visualizer', sectionId: 'visualizer', customOffset: -100 },
    { label: 'Information', sectionId: 'information' },
    { label: 'Runtimes', sectionId: 'runtimes', customOffset: -150 },
  ];

  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const [pageTitle, setPageTitle] = useState('Sorting Visualizer'); // Initial title


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

    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setPageTitle('S.V.'); // Change the title for smaller screens
      } else {
        setPageTitle('Sorting Visualizer'); // Revert to the original title for larger screens
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    handleResize();



    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

      
    };
  }, []);

  return (
    <div className="header">
      <div className="title">{pageTitle}</div>
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
