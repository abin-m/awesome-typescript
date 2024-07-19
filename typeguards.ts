interface Person {
    name: string;
    age: number;
  }
  
  interface Animal {
    species: string;
    age: number;
  }
  
  function isPerson(object: any): object is Person {
    return 'name' in object;
  }
  
  function printDetails(entity: Person | Animal): void {
    if (isPerson(entity)) {
      console.log(`Person: ${entity.name}, ${entity.age}`);
    } else {
      console.log(`Animal: ${entity.species}, ${entity.age}`);
    }
  }
  
  const person: Person = { name: "Alice", age: 30 };
  const animal: Animal = { species: "Dog", age: 5 };
  
  printDetails(person);
  printDetails(animal);

  export{}