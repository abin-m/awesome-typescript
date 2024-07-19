class Animal {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    makeSound(): void {
      console.log("Some generic animal sound");
    }
  }
  
  class Dog extends Animal {
    makeSound(): void {
      console.log("Woof! Woof!");
    }
  }
  
  class Cat extends Animal {
    makeSound(): void {
      console.log("Meow!");
    }
  }
  
  const dog = new Dog("Buddy", 3);
  dog.makeSound();
  
  const cat = new Cat("Whiskers", 2);
  cat.makeSound();
  
  export{}