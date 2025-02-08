// Helper function to generate an array of n elements
function generateArray(n) {
  return Array.from({ length: n }, (_, i) => i + 1);
}

// O(1) - Constant Time
function constantTime(arr) {
  console.log("O(1) - Constant Time");
  console.log(arr[0]);
}

// O(log n) - Logarithmic Time
function logarithmicTime(n) {
  console.log("O(log n) - Logarithmic Time");
  let count = 0;
  for (let i = 1; i < n; i = i * 2) {
    count++;
  }
  console.log(`Steps for n=${n}: ${count}`);
}

// O(n) - Linear Time
function linearTime(arr) {
  console.log("O(n) - Linear Time");
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  console.log(`Sum: ${sum}`);
}

// O(n log n) - Linearithmic Time
function linearithmicTime(arr) {
  console.log("O(n log n) - Linearithmic Time");
  console.log("Merge Sort:");
  console.log(mergeSort(arr));
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// O(n^2) - Quadratic Time
function quadraticTime(arr) {
  console.log("O(n^2) - Quadratic Time");
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(`(${arr[i]}, ${arr[j]})`);
    }
  }
}

// O(2^n) - Exponential Time
function exponentialTime(n) {
  console.log("O(2^n) - Exponential Time");
  console.log(`Fibonacci(${n}): ${fibonacci(n)}`);
}

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// O(n!) - Factorial Time
function factorialTime(arr) {
  console.log("O(n!) - Factorial Time");
  console.log("All permutations:");
  permute(arr, 0, arr.length - 1);
}

function permute(arr, l, r) {
  if (l === r) {
    console.log(arr.join(''));
  } else {
    for (let i = l; i <= r; i++) {
      [arr[l], arr[i]] = [arr[i], arr[l]]; // Swap
      permute(arr, l + 1, r);
      [arr[l], arr[i]] = [arr[i], arr[l]]; // Backtrack
    }
  }
}

// Test the functions
const smallArray = generateArray(5);
const mediumArray = generateArray(10);

console.log("Small Array:", smallArray);
console.log("Medium Array:", mediumArray);

constantTime(smallArray);
logarithmicTime(16);
linearTime(mediumArray);
linearithmicTime(smallArray);
quadraticTime(smallArray);
exponentialTime(10);
factorialTime(['A', 'B', 'C']);