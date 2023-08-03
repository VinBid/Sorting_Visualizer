import React, { useState } from 'react';
import './SortingVisualizing.css';
import { getMergeSortAnimations, getInsertionSortAnimations, getQuickSortAnimations, getBubbleSortAnimations} from './SortingAlgo';
import Slider from 'react-input-slider';

export default class SortingVisualizing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [], // array starts empty
      animationSpeed: 6,
      numElements: 600,
      running: false,
    };
  }

  componentDidMount() {
    this.resetArray(this.state.numElements);
    this.setState({ animations: [] });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.numElements !== this.state.numElements) {
      this.resetArray(this.state.numElements);
    }
  }

  resetArray(number_vals) {
    const array = [];
    for (let i = 0; i < number_vals; i++) {
      array.push(this.pushRandIntInterval(5, 575));
    }
    this.setState({ array });
    this.setState({ animations: [] });
  }

  pushRandIntInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  mergeSort() {
    const { animationSpeed, array } = this.state;
    const animations = getMergeSortAnimations(array);
    const arrayBars = document.getElementsByClassName('barArray');
    const barsArray = Array.from(arrayBars);

    for (let i = 0; i < animations.length; i++) {
      const [barOneID, newHeight] = animations[i];

      if (i % 3 !== 2) {
        const styleBarOne = arrayBars[barOneID].style;
        const styleBarTwo = arrayBars[newHeight].style;
        const whichColor = i % 3 === 0 ? 'red' : 'green';

        setTimeout(() => {
          styleBarOne.background = whichColor;
          styleBarTwo.background = whichColor;
        }, i * animationSpeed);
      } else {
        if (arrayBars[barOneID]) {
          setTimeout(() => {
            const barOneStyle = barsArray[barOneID].style;
            barOneStyle.height = `${newHeight}px`;
          }, i * animationSpeed);
        }
      }
    }
  }

  quickSort() {
    const { animationSpeed, array } = this.state;
    const animations = getQuickSortAnimations(array);
    const arrayBars = document.getElementsByClassName('barArray');
    const barsArray = Array.from(arrayBars);

    for (let i = 0; i < animations.length; i++) {
      const [curr, before, currValue, beforeValue] = animations[i];

      if (currValue === -1) {
        if (beforeValue === -1) {
          setTimeout(() => {
            barsArray[curr].style.backgroundColor = 'red';
            barsArray[before].style.backgroundColor = 'red';
          }, i * animationSpeed);
        } else {
          setTimeout(() => {
            barsArray[curr].style.backgroundColor = 'green';
            barsArray[before].style.backgroundColor = 'green';
          }, i * animationSpeed);
        }
      } else {
        setTimeout(() => {
          barsArray[curr].style.height = `${beforeValue}px`;
          barsArray[before].style.height = `${currValue}px`;
        }, i * animationSpeed);
      }
    }
  }

  bubbleSort() {
    const { animationSpeed, array } = this.state;
    const animations = getBubbleSortAnimations(array);
    const arrayBars = document.getElementsByClassName('barArray');
    const barsArray = Array.from(arrayBars);

    for (let i = 0; i < animations.length; i++) {
      const [curr, before, currValue, beforeValue] = animations[i];

      if (currValue === -1) {
        if (beforeValue === -1) {
          setTimeout(() => {
            barsArray[curr].style.backgroundColor = 'red';
            barsArray[before].style.backgroundColor = 'red';
          }, i * animationSpeed);
        } else {
          setTimeout(() => {
            barsArray[curr].style.backgroundColor = 'green';
            barsArray[before].style.backgroundColor = 'green';
          }, i * animationSpeed);
        }
      } else {
        setTimeout(() => {
          barsArray[curr].style.height = `${beforeValue}px`;
          barsArray[before].style.height = `${currValue}px`;
        }, i * animationSpeed);
      }
    }
  };

  insertionSort() {
    const { animationSpeed, array } = this.state;
    const animations = getInsertionSortAnimations(array);
    const arrayBars = document.getElementsByClassName('barArray');
    const barsArray = Array.from(arrayBars);

    for (let i = 0; i < animations.length; i++) {
      const [curr, before, currValue, beforeValue] = animations[i];

      if (currValue === -1) {
        if (beforeValue === -1) {
          setTimeout(() => {
            barsArray[curr].style.backgroundColor = 'red';
            barsArray[before].style.backgroundColor = 'red';
          }, i * animationSpeed);
        } else {
          setTimeout(() => {
            barsArray[curr].style.backgroundColor = 'green';
            barsArray[before].style.backgroundColor = 'green';
          }, i * animationSpeed);
        }
      } else {
        setTimeout(() => {
          barsArray[curr].style.height = `${beforeValue}px`;
          barsArray[before].style.height = `${currValue}px`;
        }, i * animationSpeed);
      }
    }
  };

  handleAnimationSpeedChange = (value) => {
    this.setState({ animationSpeed: value });
  };

  handleNumElementsChange = (value) => {
    this.setState({ numElements: value });
  };

  render() {
    const { array, animationSpeed, numElements } = this.state;
    return (
      <div className="container">
        <div className="arrayContainer">
          {array.map((value, idx) => (
            <div className="barArray" key={idx} style={{ height: `${value}px` }} />
          ))}
        </div>

        <div className='footerObject'>
            <div className='sliders'>

            <Slider
              axis="x"
              x={animationSpeed}
              xmin={1}
              xmax={20}
              onChange={({ x }) => this.handleAnimationSpeedChange(x)}
              styles={{
                track: {
                  backgroundColor: 'white', // Set your desired color here
                },
                active: {
                  backgroundColor: 'green', // Set your desired color here
                },
                thumb: {
                  backgroundColor: 'white', // Set your desired color here
                },
              }}
            />
            <span> Speed: {animationSpeed} ms </span>

            <Slider
              axis="x"
              x={numElements}
              xmin={10}
              xmax={500}
              onChange={({ x }) => this.handleNumElementsChange(x)}
              styles={{
                track: {
                  backgroundColor: 'white', // Set your desired color here
                },
                active: {
                  backgroundColor: 'green', // Set your desired color here
                },
                thumb: {
                  backgroundColor: 'white', // Set your desired color here
                },
              }}
            />
            <span>Elements: {numElements} </span>
          </div>

        </div>

        <div className='buttons'>
            <button className="sorting-button" onClick={() => this.resetArray(numElements)}>Generate Array</button>
            <button className="sorting-button" onClick={() => this.mergeSort()}>Merge Sort</button>
            <button className="sorting-button" onClick={() => this.quickSort()}>Quick Sort</button>
            <button className="sorting-button" onClick={() => this.bubbleSort()}>Bubble Sort</button>
            <button className="sorting-button" onClick={() => this.insertionSort()}>Insertion Sort</button>
          </div>
        {/* redesign button haha */}
      </div>
    );
  }
}
