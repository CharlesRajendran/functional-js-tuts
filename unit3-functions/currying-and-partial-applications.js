// Currying is converting a function which take multiple arguments into nested functions which will take one argument

function sumOf123(num1, num2, num3) {
    return num1 + num2 + num3
}

function sum(num1) {
    return function (num2) {
        return function (num3) {
            return num1 + num2 + num3;
        }
    }
}

const sum1 = sumOf123(100, 200, 300)
const sum2 = sum(100)(200)(300)

// Partial Applications
// Partial application is the implementation of the curried function
// Partial applications are functions which perform some tasks

// Example
const sumWith100 = sum(100)
const addWith100And200 = sumWith100(200)

const finalsum = addWith100And200(450)