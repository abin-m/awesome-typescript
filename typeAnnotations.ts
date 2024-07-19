let myString: string = "Hello, TypeScript!";
let myNumber: number = 42;
let myBoolean: boolean = true;

// A function with annotated parameters and return type
function formatMessage(name: string, age: number): string {
  return `Hello, my name is ${name} and I am ${age} years old.`;
}

console.log(formatMessage("Alice", 30));
