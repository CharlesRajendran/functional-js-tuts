/*
    Higher Order Functions are functions that will take functions as argument or return function.
    ex - map, filter, reduce and etc.
*/

// Map functions
// Map functions will convert elements in the array into something else, 
// it will take a function as a argument where the inner function will take one argument

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((number) => {
    return Math.pow(number, 2) 
});

// Filter function
// Filter function is used to filter specific elements in the array,
// This is also an higher order function which will take one argument, which is the element of the array
// The inner function will return either true or false, elements 
// which return true will be kept and other will be ignored in the new array

const oddNumbers = numbers.filter((number) => {
    return number%2 === 0 ? false: true
});

// Reduce function
// Reduce is an accumalative function for array, which can be used to perform some accumalative tasks
// This will take two parameters, first a function with two parameters 
// one will be for the accumalative value, second one is for each element
// and for reduce function, along with the inner function, it can take optional parameter which is the default value.

const sumOfArray = numbers.reduce((sum, number) => {
    return sum + number
})

const sumOfOddAndEven = numbers.reduce((sum, number) => {
    const {oddSum = 0, evenSum = 0} = sum;
    
    return number%2 === 0 ? {...sum, evenSum: evenSum + number} : {...sum, oddSum: oddSum + number}
}, {})
