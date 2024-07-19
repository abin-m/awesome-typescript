"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPerson(object) {
    return 'name' in object;
}
function printDetails(entity) {
    if (isPerson(entity)) {
        console.log("Person: ".concat(entity.name, ", ").concat(entity.age));
    }
    else {
        console.log("Animal: ".concat(entity.species, ", ").concat(entity.age));
    }
}
var person = { name: "Alice", age: 30 };
var animal = { species: "Dog", age: 5 };
printDetails(person);
printDetails(animal);
