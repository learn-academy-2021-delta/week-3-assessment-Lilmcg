// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// Input is a number
// Declare a function fibonacci that takes in a number and returns an array
  // Initiate an array at [1, 1]
  // For loop starting the count at 2. Stop looping when the length is less than the given number. Push each new Fibonacci sequence number (i-1 + i-2) onto the array up until you reach the length of the given number
// Return an array that is the length of the given number


var num1 = 6
var num2 = 10
//
describe ("fibonacci", () => {
  test("a given number greater than two returns an array of numbers with that number's length of the Fibonacci sequence", () => {
    expect(fibonacci(num1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonacci(num2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// Ran test.
// Test failed.
// Error message: fibonacci is not defined

// b) Create the function that makes the test pass.


const fibonacci = (num) => {
  let array = [1,1]
  for(let i=2; i<num; i++){
    array.push(array[i - 1] + array[i - 2])
  }
  return array
}

// Ran test again.
// Test passed!


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

// Input is an array
// Create a function that takes in an array
// Look at each data type in the array and determine if the typeof data is a number
  // Return an array of only numbers
// Look at each number in the array of only numbers and determine if the number is odd
  // Return an new array of only odd numbers
  // Return the new array and use .sort to arrange its numbers from least to greatest

  describe ("oddSorted", () => {
    test("given a mixed array return only the odd numbers sorted least to greatest", () => {
      expect(oddSorted[fullArr1]).toEqual([-9, 7, 9, 199])
      expect(oddSorted[fullArr2]).toEqual([-823, 7, 23])
    })
  })

  // Ran test.
  // Test failed.
  // Error message: oddSorted is not defined

// b) Create the function that makes the test pass.

const oddSorted = (array) => {
  let numbersOnly = (value) => {
    if (typeof(value) === 'number') {
      return value
    }
  }
  let oddNumbers = array.filter((numbersOnly) %2 !==0)
    return array.sort(oddNumbers)
  }


// Test failed again.
// Error message = Received: undefined


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9]
// // Excpected output: [2, 6, 51, 60]
//
var numbersToAdd2 = [0, 7, -8, 12]
// // Expected output: [0, 7, -1, 11]
//
var numbersToAdd3 = []
// Expected output: []

// Input is an array
// Declare a function umulativeSum that takes in an array and returns an array
  // Initiate an array at 1
  // For loop starting at 1. Stop looping when the length is less than the length of the array. Return a value in the array that is the sum of the previous value (i-1) plus the current value (i), until you reach the length of the array
// Return an array that is the length of the given number
// Return an empty array if the input array is empty

describe ("cumulativeSum", () => {
  test("given an array return an array of the accumulating sum and empty array returns an empty array", () => {
    expect(cumulativeSum[numbersToAdd1]).toEqual([2, 4, 45, 9])
    expect(cumulativeSum[numbersToAdd2]).toEqual([0, 7, -8, 12])
    expect(cumulativeSum[numbersToAdd3]).toEqual([])
  })
})

// Ran test.
// Test failed.
// Error message: newArray is not defined


// b) Create the function that makes the test pass.

const cumulativeSum = (array) => {
  for(let i=1; i<array.length; i++){
    array.push(array[i-1] + array[i])
  }
  return cumulativeSum
}

// Ran test.
// Test failed.
// Error message: deep equality, received: undefined

// Tried this code also...

// const cumulativeSum = (array) => {
//   for(let i=1; i<array.length; i++){
//     array[i] = array[i-1] + array[i]
//   }
//   return cumulativeSum
// }

// Ran test.
// Test failed.
// Error message: deep equality, received: undefined
