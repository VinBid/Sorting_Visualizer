import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  position: sticky;
  top: 0;
  background-color: black;
  padding: 30px;
  display: flex; /* Use flexbox to arrange buttons horizontally */
  
  /* Add any other styles you want for your header */
`;

const Button = styled.div`
  margin-right: 10px; /* Add spacing between buttons */
  font-size: 21px;
  /* Add any other styles you want for your buttons */
`;

const StickyHeader = () => {
  const sortingAlgorithms = [
    'Sorting Visualizer',
    
  ];

  return (
    <Header>
      {sortingAlgorithms.map((algorithm, index) => (
        <Button key={index}>{algorithm}</Button>
      ))}
    </Header>
  );
};

export default StickyHeader;
