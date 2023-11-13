/*
Filename: complex_program.js
Content: Complex program for calculating Fibonacci sequence
*/

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

function generateFibonacciSequence(length) {
  let sequence = [];
  for (let i = 0; i < length; i++) {
    sequence.push(fibonacci(i));
  }
  return sequence;
}

function sumOfFibonacciSequence(sequence) {
  let sum = 0;
  for (let i = 0; i < sequence.length; i++) {
    sum += sequence[i];
  }
  return sum;
}

function printFibonacciSequence(sequence) {
  console.log("Fibonacci Sequence:");
  for (let i = 0; i < sequence.length; i++) {
    console.log(`#${i + 1}: ${sequence[i]}`);
  }
}

const sequenceLength = 10;
const fibonacciSequence = generateFibonacciSequence(sequenceLength);
printFibonacciSequence(fibonacciSequence);

const sum = sumOfFibonacciSequence(fibonacciSequence);
console.log(`Sum of Fibonacci Sequence: ${sum}`);

/* Output:
Fibonacci Sequence:
#1: 0
#2: 1
#3: 1
#4: 2
#5: 3
#6: 5
#7: 8
#8: 13
#9: 21
#10: 34
Sum of Fibonacci Sequence: 88
*/