export function getMergeSortAnimations(array) {
  const animations = []; // this stores animations that will be done on screen. Stored throughout sort
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSort(array, auxiliaryArray, animations, 0, array.length - 1); // calls merge sort function. 
  return animations; //Returns animations for use 
}

export function getInsertionSortAnimations(array) {
  const animations = []; // this stores animations that will be done on screen. Stored throughout sort
  if (array.length <= 1) return array;
  insertionSort(array, animations); // calls merge sort function. 
  return animations; //Returns animations for use 
}

export function getQuickSortAnimations(array) {
  const animations = []; // this stores animations that will be done on screen. Stored throughout sort
  if (array.length <= 1) return array;
  quickSort(array, 0, array.length - 1, animations); // calls merge sort function. 
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

function swap(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
}


const insertionSort = (array, animations) => {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    animations.push([j, j - 1, -1, -1]);
    animations.push([j, j - 1, -1, -2]);
    while (j > 0 && array[j] < array[j - 1]) {
      // Animation data for highlighting the elements being compared (color 1)
      animations.push([j, j - 1, -1, -1]);
      animations.push([j, j - 1, -1, -2]);

      // Swap the elements (store the indices for animation)
      animations.push([j, j - 1, array[j], array[j - 1]]);

      swap(array, j, j - 1);

      // Animation data for highlighting the elements being compared (color back)
      animations.push([j, j - 1]);
      animations.push([j, j - 1]);

      j--;
    }
  }
};


const partition = (array, start, end, animations) => {
  const pivot = array[end];
  let i = start;
  let j = end - 1;
  while (i <= j) {
    while (array[i] < pivot) { 
      animations.push([i, end, -1, -1]);
      animations.push([i, end, -1, -2]);
      i++;
    }
    while (array[j] > pivot) {
      animations.push([j, end, -1, -1]);
      animations.push([j, end, -1, -2]);
      j--;
    }
    if (i <= j) {
      animations.push([i, j, -1, -1]);
      animations.push([i, j, -1, -2]);
      animations.push([i, j, array[i], array[j]]);
      swap(array, i, j);
      i++;
      j--;
    }
  }

  animations.push([i, end, -1, -1]);
  animations.push([i, end, -1, -2]);
  animations.push([i, end, array[i], array[end]]);

  swap(array, i, end); // Corrected swapping here (pivot to its correct position)
  return i;
};

const quickSort = (array, low, high, animations) => {
  if (low < high) {
    const p = partition(array, low, high, animations);
    quickSort(array, low, p - 1, animations);
    quickSort(array, p + 1, high, animations);
  }
};







