let A = [34, 2, 4, 45, 1, 2, 3];

function buildHeap(A) {
  A.heapsize = A.length;
  let mid = A.length / 2 - 1;
  console.log(Math.floor(A.length / 2));
  for (let i = Math.floor(mid); i >= 0; i--) {
    heapify(A, i);
  }
}

function heapify(A, i) {
  let l = 2 * i + 1; //Left index
  let r = l + 1; //right index
  let largest = i; //We don't know what the largest is yet
  //If val at left > value at parent (i), largest is l
  if (A[l] > A[largest] && l <= A.heapsize) {
    largest = l;
    //Otherwise assume largest to be the parent
  } else {
    largest = i;
  }
  //If the right is larger than the current largest (will be i or the left)
  if (A[r] > A[largest] && r <= A.heapsize) {
    largest = r; // Set right as the largest
  }

  //If the maxHeap property was violated, we need to swap the current i and the largest
  //And then keep going
  if (i != largest) {
    swap(A, i, largest);
    heapify(A, largest);
  }
}

function swap(A, i, j) {
  let temp = A[i];
  A[i] = A[j];
  A[j] = temp;
}

function left(i) {
  if (i == 0) {
    return 1;
  }
  return 2 * i;
}

// buildHeap(A);
// console.log(A);

function heapSort(A) {
  buildHeap(A); //First make the heap
  console.log(A);
  //Go through and heapify everything
  //We want to use the max heap property to fill up the last element inthe array
  for (let i = A.length - 1; i >= 0; i--) {
    A.heapsize--;
    console.log(A[0]);
    swap(A, i, 0);
    console.log(A);

    heapify(A, 0);
  }
}

console.log(A);
heapSort(A);
console.log(A);
