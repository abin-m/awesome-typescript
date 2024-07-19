// Define an array and a tuple
let myArray: number[] = [1, 2, 3, 4];
let myTuple: [string, number] = ["Alice", 30];

// Function to print the tuple
function printTuple(tuple: [string, number]): void {
  console.log(`Name: ${tuple[0]}, Age: ${tuple[1]}`);
}

printTuple(myTuple);

export{}
