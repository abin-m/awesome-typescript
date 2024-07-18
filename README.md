# TypeScript Beginner-Friendly Questions

## 1. Basic Types and Type Annotations
Question: Declare a variable that holds your name and specify its type.

Hint: Use `let` or `const` followed by the variable name, a colon, and the type `string`.

```typescript
let myName: string = "YourName";
```

## 2. Type Inference
Question: Create a variable that holds your age and let TypeScript infer its type.

Hint: Assign a number directly to the variable.

```typescript
const myAge = 25;

```
## 3. Arrays and Generics
Question: Create an array of numbers containing your favorite numbers.

Hint: Use the type number[] or Array<number>.

```typescript
const favoriteNumbers: number[] = [7, 14, 21];
```

## 4. Functions and Parameter Types
Question: Write a function that takes two numbers as parameters and returns their sum. Specify the types for the parameters and the return type.

Hint: Use (param1: type, param2: type): returnType.

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

## 5. Interfaces
Question: Define an interface for a Person object with name and age properties, and create an object that conforms to this interface.

Hint: Use the interface keyword to define the structure.

```typescript
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "John",
  age: 30,
};

```

## 6. Optional Properties
Question: Modify the Person interface to make the age property optional.

Hint: Use a question mark ? after the property name.

```typescript
interface Person {
  name: string;
  age?: number;
}

const person: Person = {
  name: "John",
};

```
## 7. Union Types
Question: Create a function that accepts either a string or a number as an argument and returns its length. For numbers, return the number of digits.

Hint: Use the | symbol for union types and type guards.

```typescript
function getLength(input: string | number): number {
  if (typeof input === "string") {
    return input.length;
  } else {
    return input.toString().length;
  }
}

```

## 8. Enums
Question: Define an enum for the days of the week and create a function that takes a day as an argument and returns whether it's a weekend.

Hint: Use the enum keyword and the switch statement.

```typescript
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: Day): boolean {
  switch (day) {
    case Day.Saturday:
    case Day.Sunday:
      return true;
    default:
      return false;
  }
}

```

## 9. Classes
Question: Create a Car class with properties for make, model, and year, and a method to display the car's details.

Hint: Use the class keyword and define a constructor.

```typescript
class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayDetails(): string {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

const myCar = new Car("Toyota", "Corolla", 2020);
console.log(myCar.displayDetails());

```

## 10. Type Assertions
Question: Write a function that takes a value and returns it as a string. Use type assertions to convert the value.

Hint: Use the as keyword or angle-bracket syntax.

```typescript
function convertToString(value: any): string {
  return value as string;
  // Or
  // return <string>value;
}

```
