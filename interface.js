"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printPersonDetails(person) {
    console.log("".concat(person.name, ", ").concat(person.age));
    console.log("Address: ".concat(person.address.street, ", ").concat(person.address.city, ", ").concat(person.address.zipCode));
}
var person = {
    name: "Alice",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Wonderland",
        zipCode: "12345"
    }
};
printPersonDetails(person);
