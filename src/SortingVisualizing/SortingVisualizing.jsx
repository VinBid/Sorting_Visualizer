import React from 'react';
import './SortingVisualizing.css';
import { getMergeSortAnimations, getInsertionSortAnimations, getQuickSortAnimations, getBubbleSortAnimations} from './SortingAlgo';

const ANIMATION_MS_SPEED = 15;
const NUM_ELEMENTS = 20;

export default class SortingVisualizing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [], // array starts empty
    };
  }

  componentDidMount() {
    this.resetArray(NUM_ELEMENTS); // add interval value with slider!
  }

  resetArray(number_vals) {
    const array = [];
    for (let i = 0; i < number_vals; i++) {
      array.push(this.pushRandIntInterval(5, 700));
    }
    this.setState({ array });
  }

  pushRandIntInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    const arrayBars = document.getElementsByClassName('barArray');
    const arrayBarsArray = Array.from(arrayBars);

    for (let i = 0; i < animations.length; i++) {
      const [barOneID, newHeight] = animations[i];
      // Every first element and second element in array is a color change. Every third is a swap
      if (i % 3 !== 2) { // this is used so we know which iteration is a color change and which is a swap
        const styleBarOne = arrayBars[barOneID].style;
        const styleBarTwo = arrayBars[newHeight].style;
        const whichColor = i % 3 === 0 ? 'red' : 'green'; // if it is 0 this var stores first color. Else stores second color

        setTimeout(() => { // timeout allows us to adjust animation speed to our liking
          styleBarOne.background = whichColor;
          styleBarTwo.background = whichColor;
        }, i * ANIMATION_MS_SPEED);
      } else {
        if (arrayBarsArray[barOneID]) {
          setTimeout(() => {
            const barOneStyle = arrayBarsArray[barOneID].style;
            barOneStyle.height = `${newHeight}px`; // Update the height of the bar to visualize the swap
          }, i * ANIMATION_MS_SPEED);
        }
      }
    }
  }

  quickSort() {
    const animations = getQuickSortAnimations(this.state.array);
    const arrayBars = document.getElementsByClassName('barArray');
    const barsArray = Array.from(arrayBars);
  
    for (let i = 0; i < animations.length; i++) {
      const [curr, before, currValue, beforeValue] = animations[i];
  
      if (currValue === -1) {
        if (beforeValue === -1) {
          // Highlight the elements being compared (color 1)
          setTimeout(() => {
            barsArray[curr].style.backgroundColor = 'red';
            barsArray[before].style.backgroundColor = 'red';
          }, i * ANIMATION_MS_SPEED);
        } else {
          // Set the color back to green after highlighting (color 2)
          setTimeout(() => {
            barsArray[curr].style.backgroundColor = 'green';
            barsArray[before].style.backgroundColor = 'green';
          }, i * ANIMATION_MS_SPEED);
        }
      } else {
        // Swap the elements and update their height
        setTimeout(() => {
          barsArray[curr].style.height = `${beforeValue}px`;
          barsArray[before].style.height = `${currValue}px`;
        }, i * ANIMATION_MS_SPEED);
      }
    }
  }

  bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
    const arrayBars = document.getElementsByClassName('barArray');
    const barsArray = Array.from(arrayBars);
  
    for (let i = 0; i < animations.length; i++) {
      const [curr, before, currValue, beforeValue] = animations[i];
  
      if (currValue === -1) {
        if (beforeValue === -1) {
          // Highlight the elements being compared (color 1)
          setTimeout(() => {
            barsArray[curr].style.backgroundColor = 'red';
            barsArray[before].style.backgroundColor = 'red';
          }, i * ANIMATION_MS_SPEED);
        } else {
          // Set the color back to green after highlighting (color 2)
          setTimeout(() => {
            barsArray[curr].style.backgroundColor = 'green';
            barsArray[before].style.backgroundColor = 'green';
          }, i * ANIMATION_MS_SPEED);
        }
      } else {
        // Swap the elements and update their height
        setTimeout(() => {
          barsArray[curr].style.height = `${beforeValue}px`;
          barsArray[before].style.height = `${currValue}px`;
        }, i * ANIMATION_MS_SPEED);
      }
    }
  };

  insertionSort() {
    const animations = getInsertionSortAnimations(this.state.array);
    const arrayBars = document.getElementsByClassName('barArray');
    const barsArray = Array.from(arrayBars);
  
    for (let i = 0; i < animations.length; i++) {
      const [curr, before, currValue, beforeValue] = animations[i];
  
      if (currValue === -1) {
        if (beforeValue === -1) {
          // Highlight the elements being compared (color 1)
          setTimeout(() => {
            barsArray[curr].style.backgroundColor = 'red';
            barsArray[before].style.backgroundColor = 'red';
          }, i * ANIMATION_MS_SPEED);
        } else {
          // Set the color back to green after highlighting (color 2)
          setTimeout(() => {
            barsArray[curr].style.backgroundColor = 'green';
            barsArray[before].style.backgroundColor = 'green';
          }, i * ANIMATION_MS_SPEED);
        }
      } else {
        // Swap the elements and update their height
        setTimeout(() => {
          barsArray[curr].style.height = `${beforeValue}px`;
          barsArray[before].style.height = `${currValue}px`;
        }, i * ANIMATION_MS_SPEED);
      }
    }
  };
    

  render() {
    const { array } = this.state;
    return (
      <div className="container">
        <div className="arrayContainer">
          {array.map((value, idx) => (
            <div className="barArray" key={idx} style={{ height: `${value}px` }} />
          ))}
        </div>
        <button onClick={() => this.resetArray(NUM_ELEMENTS)}>Generate Array</button>
        <button onClick={() => this.mergeSort()}>Merge Sort</button>
        <button onClick={() => this.quickSort()}>Quick Sort</button>
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
        <button onClick={() => this.insertionSort()}>Insertion Sort</button>
        {/* redesign button haha */}
      </div>
    );
  }
}

