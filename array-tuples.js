"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define an array and a tuple
var myArray = [1, 2, 3, 4];
var myTuple = ["Alice", 30];
// Function to print the tuple
function printTuple(tuple) {
    console.log("Name: ".concat(tuple[0], ", Age: ").concat(tuple[1]));
}
printTuple(myTuple);
