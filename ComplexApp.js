/*
File: ComplexApp.js
Description: A complex and sophisticated JavaScript application that performs various mathematical operations on arrays.
Author: Your Name
Date: DD/MM/YYYY
*/

// Array of numbers to perform operations on
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function to find the sum of all elements in the array
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Function to find the product of all elements in the array
function findProduct(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}

// Function to find the maximum element in the array
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Function to find the minimum element in the array
function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// Function to find the average of all elements in the array
function findAverage(arr) {
  const sum = findSum(arr);
  return sum / arr.length;
}

// Function to sort the array in ascending order
function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

// Function to reverse the order of elements in the array
function reverseArray(arr) {
  return arr.reverse();
}

// Function to check if the array contains a specific number
function hasNumber(arr, number) {
  return arr.includes(number);
}

// Function to get the unique elements from the array
function getUniqueElements(arr) {
  return arr.filter((value, index, self) => self.indexOf(value) === index);
}

// Usage examples
console.log("Sum:", findSum(numbers));
console.log("Product:", findProduct(numbers));
console.log("Max:", findMax(numbers));
console.log("Min:", findMin(numbers));
console.log("Average:", findAverage(numbers));
console.log("Sorted Array:", sortArray(numbers));
console.log("Reversed Array:", reverseArray(numbers));
console.log("Has 5:", hasNumber(numbers, 5));
console.log("Unique Elements:", getUniqueElements(numbers));

// Output:
// Sum: 55
// Product: 3628800
// Max: 10
// Min: 1
// Average: 5.5
// Sorted Array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Reversed Array: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// Has 5: true
// Unique Elements: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]