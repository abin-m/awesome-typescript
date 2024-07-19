interface Address {
    street: string;
    city: string;
    zipCode: string;
  }
  
  interface Person {
    name: string;
    age: number;
    address: Address;
  }
  
  function printPersonDetails(person: Person): void {
    console.log(`${person.name}, ${person.age}`);
    console.log(`Address: ${person.address.street}, ${person.address.city}, ${person.address.zipCode}`);
  }
  
  const person: Person = {
    name: "Alice",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Wonderland",
      zipCode: "12345"
    }
  };
  
  printPersonDetails(person);

  export {}