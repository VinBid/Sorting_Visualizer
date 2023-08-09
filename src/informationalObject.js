import React from 'react';
import './informationalObject.css'; // Correct the filename and path

class InformationalObject extends React.Component {
  render() {
    return (
      <div className='InformationObject' id='information'> {/* Correct the class name */}
        <div className='Title'>
          Sorting Algorithms
        </div>

        <div className='SortingAlgoInfo'>
          A sorting algorithm is an algorithm that puts elements in a list in an order.
          This usecase is extemely important in Computer Science and different algorithms have been
          divised for this usesecase. Making this procedure as quick as possible is a very important part of
          Computer science applications.

          There are two main ways sorting algorithms are defined using. O, Ω, θ.
           O represents the worst case runtime. θ represents the average runtime.
          Ω represents the best case runtime.

          This visualizer visualizes 4 very popular sorting algorithms: Merge Sort, Quick Sort,
          Insertion Sort, Bubble Sort.
        </div>

        <div className='Runtimes' id='runtimes'>
          Sorting Algorithm runtimes tend to fit into two different runtime totals: <b>Quadratic</b> and <b>Logrithmic Linear</b>.

          Here are the runtimes for the 4 algorithms displayed in the visualizer:

          <div className='FlexContainer1'>
            <div className='LogCards'>
              <u>Linear Logrithmic Algorithms</u>
              <div className='MergeQuickCards'>
                <div className='Card'>
                  <div className='CardTitle'>Merge Sort</div>
                  <div className='CardDescription'>
                    Merge sort is a divide-and-conquer algorithm that divides the input array into two halves,
                    sorts each half, and then merges the sorted halves back together. Merge sort tends to work faster 
                    than Quick Sort with larger arrays.
                    <div className='AlgoRuntimes'>
                      <div className='AlgoRuntime'>
                        <span>Best Case:</span>
                        <span className='AlgoRuntimeValue'>Ω(nlogn)</span>
                      </div>
                      <div className='AlgoRuntime'>
                        <span>Average Case: </span>
                        <span className='AlgoRuntimeValue'>θ(nlogn)</span>
                      </div>
                      <div className='AlgoRuntime'>
                        <span>Worst Case: </span>
                        <span className='AlgoRuntimeValue'>O(nlogn)</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='Card'>
                  <div className='CardTitle'>Quick Sort</div>
                  <div className='CardDescription'>
                    Quick sort is another efficient divide-and-conquer algorithm that selects a 'pivot' element,
                    partitions the array into two sub-arrays around the pivot, and recursively sorts the sub-arrays.
                    Quick Sort tends to work faster than Merge Sort with smaller arrays. 
                    <div className='AlgoRuntimes'>
                      <div className='AlgoRuntime'>
                        <span>Best Case:</span>
                        <span className='AlgoRuntimeValue'>Ω(nlogn)</span>
                      </div>
                      <div className='AlgoRuntime'>
                        <span>Average Case:</span>
                        <span className='AlgoRuntimeValue'>θ(nlogn)</span>
                      </div>
                      <div className='AlgoRuntime'>
                        <span>Worst Case:</span>
                        <span className='AlgoRuntimeValue'>O(n<sup>2</sup>)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className='QuadraticCards'>
              <u>Quadratic Algorithms </u>
              <div className='InsertionBubbleCards'>
                <div className='Card'>
                  <div className='CardTitle'>Insertion Sort</div>
                  <div className='CardDescription'>
                    Insertion Sort is an algorithm that builds the final sorted array one element
                    at a time. It takes elements from the unsorted part of the
                    array and inserts them into their correct positions within the sorted part of the array.
                    <div className='AlgoRuntimes'>
                      <div className='AlgoRuntime'>
                        <span>Best Case:</span>
                        <span className='AlgoRuntimeValue'>Ω(n)</span>
                      </div>
                      <div className='AlgoRuntime'>
                        <span>Average Case:</span>
                        <span className='AlgoRuntimeValue'>θ(n<sup>2</sup>)</span>
                      </div>
                      <div className='AlgoRuntime'>
                        <span>Worst Case:</span>
                        <span className='AlgoRuntimeValue'>O(n<sup>2</sup>)</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='Card'>
                  <div className='CardTitle'>Bubble Sort</div>
                  <div className='CardDescription'>
                    Bubble Sort is another simple sorting algorithm that repeatedly steps through the
                    list, compares adjacent elements, and swaps them if they are in the wrong order.
                    The pass through the list is repeated until no more swaps are needed,
                    indicating that the list is sorted.
                    <div className='AlgoRuntimes'>
                      <div className='AlgoRuntime'>
                        <span>Best Case:</span>
                        <span className='AlgoRuntimeValue'>Ω(n)</span>
                      </div>
                      <div className='AlgoRuntime'>
                        <span>Average Case:</span>
                        <span className='AlgoRuntimeValue'>θ(n<sup>2</sup>)</span>
                      </div>
                      <div className='AlgoRuntime'>
                        <span>Worst Case:</span>
                        <span className='AlgoRuntimeValue'>O(n<sup>2</sup>)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    );
  }
}

export default InformationalObject;
