export function getMergeSortAnimations(array) {
    const animations = []; // this stores animations that will be done on screen. Stored throughout sort
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSort(array, auxiliaryArray, animations, 0, array.length - 1); // calls merge sort function. 
    return animations; //Returns animations for use 
  }

  /* We chose the in place Merge Sort Implementation. 
  This was so we had access to the array itself to animate effectively. 
  Also it is more space efficient than simply creating an array every time ourselves. 
  However, it is significantly more complicated than the Naive O(n) space approach */
  
  const mergeSort = (mainArray, auxiliaryArray, animations, start, end) => { //classic merge sort implementation
    if (start === end) return;
    const middleIndex = Math.floor((start + end) / 2);
    mergeSort(auxiliaryArray, mainArray, animations, start, middleIndex);
    mergeSort(auxiliaryArray, mainArray, animations, middleIndex + 1, end);
    merge(mainArray, auxiliaryArray, animations, start, middleIndex, end);
  };
  
  const merge = (mainArray, auxiliaryArray, animations, start, mid, end) => { // classic merge implementation
    let i = start;
    let j = mid + 1;
    let k = start;
    while (i <= mid && j <= end) {
      animations.push([i, j]); // push the position of the bars
      animations.push([i, j]); // we do this twice so that we can change the color of both bars then revert them to the original color
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        animations.push([k, auxiliaryArray[i]]); // Push index and new height to visualize the swap
        mainArray[k++] = auxiliaryArray[i++]; // We store the element in the og array and the thing its being replaced with
      } else {
        animations.push([k, auxiliaryArray[j]]); // Push index and new height to visualize the swap
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= mid) {
      animations.push([i, i]);
      animations.push([i, i]);
      animations.push([k, auxiliaryArray[i]]); // Push index and new height to visualize the swap
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= end) {
      animations.push([j, j]);
      animations.push([j, j]);
      animations.push([k, auxiliaryArray[j]]); // Push index and new height to visualize the swap
      mainArray[k++] = auxiliaryArray[j++];
    }
  };
  