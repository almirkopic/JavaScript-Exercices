// Object-oriented programming (OOP) in JavaScript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const john = new Person("John", 30);
john.introduce();

// Asynchronous programming with Promises
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: "Data fetched successfully!" };
            resolve(data);
        }, 2000);
    });
}

fetchData()
    .then((data) => {
        console.log(data.message);
    })
    .catch((error) => {
        console.error(error);
    });

// Arrow functions and array methods
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15

// Asynchronous programming with async/await
async function fetchDataAsync() {
    try {
        const data = await fetchData();
        console.log(data.message);
    } catch (error) {
        console.error(error);
    }
}

fetchDataAsync();

// Module import/export (CommonJS style)
const math = require("./math.js");
console.log(math.add(5, 3)); // Output: 8

// Module import/export (ES6 module syntax)
import { subtract } from "./math.js";
console.log(subtract(10, 5)); // Output: 5

// Functional programming concepts (higher-order functions)
const names = ["Alice", "Bob", "Charlie"];

const nameLengths = names.map((name) => name.length);
console.log(nameLengths); // Output: [5, 3, 7]

const longNames = names.filter((name) => name.length > 4);
console.log(longNames); // Output: ["Alice", "Charlie"]

// Error handling and custom exceptions
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function throwError() {
    throw new CustomError("This is a custom error.");
}

try {
    throwError();
} catch (error) {
    if (error instanceof CustomError) {
        console.error(`Caught custom error: ${error.message}`);
    } else {
        console.error(`Caught an unexpected error: ${error.message}`);
    }
}

// This is a separate "math.js" module for demonstration purposes
// math.js
// CommonJS export
module.exports = {
    add: (a, b) => a + b,
};

// ES6 module export
export function subtract(a, b) {
    return a - b;
}
