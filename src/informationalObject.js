import React from 'react';
import './informationalObject.css'; //Code for informational page bellow

class InformationalObject extends React.Component {
  render() {
    return ( //html for informational page
      <div className='informationObject' id='information'>
        <div className='titleAlgoInfo'>  
          Sorting Algorithms
        </div>

        <div className='sortingAlgoInfo'>
          A sorting algorithm is an algorithm that puts elements in a list in an order.
          This usecase is extemely important in Computer Science. Different algorithms have been
          divised for this usesecase, since making this procedure as quick as possible is vital to the Computer Science
          discipline as a while due to the wide array of usecases for the sorting algorithms.

          There are three main ways sorting algorithms are defined -- using <b>O, Ω, θ </b>.
          O represents the worst case runtime. θ represents the average runtime.
          Ω represents the best case runtime. Essentially the best case runtime is the runtime in ideal
          use cases. The worst case runtime is the runtime in fully unideal circumstances. Average case
          is the runtime in an average usecase.

          This visualizer visualizes 4 very popular sorting algorithms: Merge Sort, Quick Sort,
          Insertion Sort, Bubble Sort. The visualizer represents numbers in arrays using bars. The
          larger the bar the larger the number. Elements being compared are highlighted in red as operations
          are done to the array.

          You can visually see each algorithm running in real time using the visualizer. Utilize this visualizer
          to completely understand how each algorithm works and its operational speeds for certain extended
          usecases!
        </div>

        <div className='runtimes' id='runtimes'>
          Sorting Algorithm runtimes tend to fit into two different runtime totals: <b>Quadratic</b> and <b>Logrithmic Linear</b>.

          Here are the runtimes for the 4 algorithms displayed in the visualizer:

          <div className='flexContainer1'>
            <div className='logCards'>
              <u>Logrithmic Linear Algorithms</u>
              <div className='mergeQuickCards'>
                <div className='card'>
                  <div className='cardTitle'>Merge Sort</div>
                  <div className='cardDescription'>
                    Merge sort is a divide-and-conquer algorithm that divides the input array into two halves,
                    sorts each half, and then merges the sorted halves back together. Merge sort tends to work faster
                    than Quick Sort with larger arrays.
                    <div className='algoRuntimes'>
                      <table>
                        <thead>
                          <tr>
                            <th className='tableHeader'>Runtime</th>
                            <th className='tableHeader'>Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className='tableLabel'>Best Case:</td>
                            <td className='tableValue'>Ω(nlogn)</td>
                          </tr>
                          <tr>
                            <td className='tableLabel'>Average Case:</td>
                            <td className='tableValue'>θ(nlogn)</td>
                          </tr>
                          <tr>
                            <td className='tableLabel'>Worst Case:</td>
                            <td className='tableValue'>O(nlogn)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div className='cardTitle'>Quick Sort</div>
                  <div className='cardDescription'>
                    Quick sort is another efficient divide-and-conquer algorithm that selects a 'pivot' element,
                    partitions the array into two sub-arrays around the pivot, and recursively sorts the sub-arrays.
                    Quick Sort tends to work faster than Merge Sort with smaller arrays.
                    <div className='algoRuntimes'>
                      <table>
                        <thead>
                          <tr>
                            <th className='tableHeader'>Runtime</th>
                            <th className='tableHeader'>Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className='tableLabel'>Best Case:</td>
                            <td className='tableValue'>Ω(nlogn)</td>
                          </tr>
                          <tr>
                            <td className='tableLabel'>Average Case:</td>
                            <td className='tableValue'>θ(nlogn)</td>
                          </tr>
                          <tr>
                            <td className='tableLabel'>Worst Case:</td>
                            <td className='tableValue'>O(n<sup>2</sup>)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='quadraticCards'>
              <u>Quadratic Algorithms </u>
              <div className='insertionBubbleCards'>
                <div className='card'>
                  <div className='cardTitle'>Insertion Sort</div>
                  <div className='cardDescription'>
                    Insertion Sort is an algorithm that builds the final sorted array one element
                    at a time. It takes elements from the unsorted part of the
                    array and inserts them into their correct positions within the sorted part of the array.
                    <div className='algoRuntimes'>
                      <table>
                        <thead>
                          <tr>
                            <th className='tableHeader'>Runtime</th>
                            <th className='tableHeader'>Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className='tableLabel'>Best Case:</td>
                            <td className='tableValue'>Ω(n)</td>
                          </tr>
                          <tr>
                            <td className='tableLabel'>Average Case:</td>
                            <td className='tableValue'>θ(n<sup>2</sup>)</td>
                          </tr>
                          <tr>
                            <td className='tableLabel'>Worst Case:</td>
                            <td className='tableValue'>O(n<sup>2</sup>)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div className='cardTitle'>Bubble Sort</div>
                  <div className='cardDescription'>
                    Bubble Sort is another simple sorting algorithm that repeatedly steps through the
                    list, compares adjacent elements, and swaps them if they are in the wrong order.
                    The pass through the list is repeated until no more swaps are needed,
                    indicating that the list is sorted.
                    <div className='algoRuntimes'>
                      <table>
                        <thead>
                          <tr>
                            <th className='tableHeader'>Runtime</th>
                            <th className='tableHeader'>Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className='tableLabel'>Best Case:</td>
                            <td className='tableValue'>Ω(n)</td>
                          </tr>
                          <tr>
                            <td className='tableLabel'>Average Case:</td>
                            <td className='tableValue'>θ(n<sup>2</sup>)</td>
                          </tr>
                          <tr>
                            <td className='tableLabel'>Worst Case:</td>
                            <td className='tableValue'>O(n<sup>2</sup>)</td>
                          </tr>
                        </tbody>
                      </table>
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
