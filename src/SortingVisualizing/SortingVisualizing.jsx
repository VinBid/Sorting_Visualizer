import React, { useState } from 'react';
import './SortingVisualizing.css';
import { getMergeSortAnimations, getInsertionSortAnimations, getQuickSortAnimations, getBubbleSortAnimations} from './SortingAlgo';
import Slider from 'react-input-slider';

const ACCENTCOLOR = 'green'



export default class SortingVisualizing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
      animationSpeed: 6,
      numElements: 500,
      animations: [], // Keep a reference to the setTimeout functions
      isRunning: false,
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
    if (this.state.isRunning) {
      this.stopSorting();
    }
  
    const array = [];
    for (let i = 0; i < number_vals; i++) {
      array.push(this.pushRandIntInterval(5, 550));
    }
    this.setState({ array, animations: [], isRunning: false }, () => {
      // Set the background color of all bars to green after generating the new array
      const arrayBars = document.getElementsByClassName('barArray');
      for (let i = 0; i < arrayBars.length; i++) {
        arrayBars[i].style.background = ACCENTCOLOR;
      }
    });
  }
  
  

  pushRandIntInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  mergeSort() {
    if (this.state.isRunning) {
      return;
    }
  
    this.setState({ isRunning: true }, () => {
      const { animationSpeed, array } = this.state;
      const animations = getMergeSortAnimations(array);
      const arrayBars = document.getElementsByClassName('barArray');
      const barsArray = Array.from(arrayBars);
      let continueSorting = true;
  
      for (let i = 0; i < animations.length; i++) {
        const [barOneID, newHeight] = animations[i];
  
        if (!continueSorting) {
          break;
        }
  
        if (i % 3 !== 2) {
          const styleBarOne = arrayBars[barOneID].style;
          const styleBarTwo = arrayBars[newHeight].style;
          const whichColor = i % 3 === 0 ? 'red' : ACCENTCOLOR;
  
          const timeout1 = setTimeout(() => {
            styleBarOne.background = whichColor;
            styleBarTwo.background = whichColor;
          }, i * animationSpeed);
  
          this.state.animations.push(timeout1);
        } else {
          if (arrayBars[barOneID]) {
            const timeout2 = setTimeout(() => {
              const barOneStyle = barsArray[barOneID].style;
              barOneStyle.height = `${newHeight}px`;
  
              // If this is the last animation, mark the sorting as finished
              if (i === animations.length - 1) {
                this.setState({ isRunning: false });
              }
            }, i * animationSpeed);
  
            this.state.animations.push(timeout2);
          }
        }
      }
    });
  }
  
  quickSort() {
    if (this.state.isRunning || this.state.isGeneratingArray) {
      return;
    }
    this.setState({ isRunning: true }, () => {
      const { animationSpeed, array } = this.state;
      const animations = getQuickSortAnimations(array);
      const arrayBars = document.getElementsByClassName('barArray');
      const barsArray = Array.from(arrayBars);
      let continueSorting = true;

      for (let i = 0; i < animations.length; i++) {
        const [curr, before, currValue, beforeValue] = animations[i];
        if (!continueSorting) {
          break;
        }

        if (currValue === -1) {
          if (beforeValue === -1) {
            const timeout1 = setTimeout(() => {
              barsArray[curr].style.backgroundColor = 'red';
              barsArray[before].style.backgroundColor = 'red';
              if (i === animations.length - 1) {
                this.setState({ isRunning: false });
              }
            }, i * animationSpeed);
            this.state.animations.push(timeout1);
          } else {
            const timeout2 = setTimeout(() => {
              barsArray[curr].style.backgroundColor = ACCENTCOLOR;
              barsArray[before].style.backgroundColor = ACCENTCOLOR;
              if (i === animations.length - 1) {
                this.setState({ isRunning: false });
              }
            }, i * animationSpeed);
            this.state.animations.push(timeout2);

          }
        } else {
          const timeout3 = setTimeout(() => {
            barsArray[curr].style.height = `${beforeValue}px`;
            barsArray[before].style.height = `${currValue}px`;
            
          }, i * animationSpeed);
          this.state.animations.push(timeout3);

        }
      }

      const timeout4 = setTimeout(() => {
        this.setState({ isRunning: false });
      }, animations.length * animationSpeed);
      this.state.animations.push(timeout4);


    });

  }

  bubbleSort() {
    if (this.state.isRunning) {
      return;
    }
    this.setState({ isRunning: true }, () => {
      const { animationSpeed, array } = this.state;
      const animations = getBubbleSortAnimations(array);
      const arrayBars = document.getElementsByClassName('barArray');
      const barsArray = Array.from(arrayBars);
      let continueSorting = true;

      for (let i = 0; i < animations.length; i++) {
        const [curr, before, currValue, beforeValue] = animations[i];
        if (!continueSorting) {
          break;
        }

        if (currValue === -1) {
          if (beforeValue === -1) {
            const timeout1 = setTimeout(() => {
              barsArray[curr].style.backgroundColor = 'red';
              barsArray[before].style.backgroundColor = 'red';
            }, i * animationSpeed);
            this.state.animations.push(timeout1);

          } else {
            const timeout2 = setTimeout(() => {
              barsArray[curr].style.backgroundColor = ACCENTCOLOR;
              barsArray[before].style.backgroundColor = ACCENTCOLOR;
            }, i * animationSpeed);
            this.state.animations.push(timeout2);

          }
        } else {
          const timeout3 = setTimeout(() => {
            barsArray[curr].style.height = `${beforeValue}px`;
            barsArray[before].style.height = `${currValue}px`;
          }, i * animationSpeed);
          this.state.animations.push(timeout3);

        }
      }
      const timeout4 = setTimeout(() => {
        this.setState({ isRunning: false });
      }, animations.length * animationSpeed);
      this.state.animations.push(timeout4);

    });

  };

  insertionSort() {
    if (this.state.isRunning) {
      return;
    }
    this.setState({ isRunning: true }, () => {
      const { animationSpeed, array } = this.state;
      const animations = getInsertionSortAnimations(array);
      const arrayBars = document.getElementsByClassName('barArray');
      const barsArray = Array.from(arrayBars);
      let continueSorting = true;

      for (let i = 0; i < animations.length; i++) {
        const [curr, before, currValue, beforeValue] = animations[i];
        if (!continueSorting) {
          break;
        }

        if (currValue === -1) {
          if (beforeValue === -1) {
            const timeout1 = setTimeout(() => {
              barsArray[curr].style.backgroundColor = 'red';
              barsArray[before].style.backgroundColor = 'red';
            }, i * animationSpeed);
            this.state.animations.push(timeout1);

          } else {
            const timeout2 = setTimeout(() => {
              barsArray[curr].style.backgroundColor = ACCENTCOLOR;
              barsArray[before].style.backgroundColor = ACCENTCOLOR;
            }, i * animationSpeed);
            this.state.animations.push(timeout2);

          }
        } else {
          const timeout3 = setTimeout(() => {
            barsArray[curr].style.height = `${beforeValue}px`;
            barsArray[before].style.height = `${currValue}px`;
          }, i * animationSpeed);
          this.state.animations.push(timeout3);

        }
      }
      const timeout4 = setTimeout(() => {
        this.setState({ isRunning: false });
      }, animations.length * animationSpeed);
      this.state.animations.push(timeout4);

    });
  };

  handleAnimationSpeedChange = (value) => {
    const { isRunning } = this.state;
  
    if (!isRunning) {
      this.setState({ animationSpeed: value });
    }  
  };

  handleNumElementsChange = (value) => {
    const { isRunning } = this.state;
  
    if (!isRunning) {
      this.setState({ numElements: value, isAdjusting: true });
    }
  }

  stopSorting() {
    this.state.animations.forEach(timeout => clearTimeout(timeout));
    this.setState({ isRunning: false, animations: [] });
  }
  


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
                  backgroundColor: ACCENTCOLOR, // Set your desired color here
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
                  backgroundColor: ACCENTCOLOR, // Set your desired color here
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
            <button className="sorting-button" onClick={() => {
              this.setState({ sorting: false });
              this.resetArray(numElements);
              }}>
                Generate Array
            </button>            
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
