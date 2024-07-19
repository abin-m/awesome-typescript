var myString = "Hello, TypeScript!";
var myNumber = 42;
var myBoolean = true;
// A function with annotated parameters and return type
function formatMessage(name, age) {
    return "Hello, my name is ".concat(name, " and I am ").concat(age, " years old.");
}
console.log(formatMessage("Alice", 30));
