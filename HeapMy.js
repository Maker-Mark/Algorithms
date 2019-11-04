// let A = [5, 3, 17, 10, 84, 19, 6, 22, 9];
let A = [90, 91, 92, 93];

function buildHeap(A) {
  let i = 0;
  while (A[i]) {
    if (heapify(A, i)) i++;
    heapify(A, 0);
  }
}

function heapify(A, i) {
  let l = left(i); //Left index
  let r = right(i); //right index
  let largest = i; //We don't know what the largest is yet
  //If val at left > value at parent (i), largest is l
  if (A[l] > A[largest]) {
    largest = l;
    //Otherwise assume largest to be the parent
  } else {
    largest = i;
  }
  //If the right is larger than the current largest (will be i or the left)
  if (A[r] > A[largest]) {
    largest = r; // Set right as the largest
  }

  //If the maxHeap property was violated, we need to swap the current i and the largest
  //And then keep going
  if (i != largest) {
    swap(A, i, largest);
    console.log(A);
    heapify(A, i + 1);
  } else {
    return true;
  }
}

function swap(A, i, j) {
  let temp = A[i];
  A[i] = A[j];
  A[j] = temp;
}

function left(i) {
  return 2 * i + 1;
}
function right(i) {
  return 2 * i + 2;
}
console.log(A);
buildHeap(A);
console.log(A);
