interface Shape {
    calculateArea(): number;
  }
  
  class Circle implements Shape {
    radius: number;
  
    constructor(radius: number) {
      this.radius = radius;
    }
  
    calculateArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  class Rectangle implements Shape {
    width: number;
    height: number;
  
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
  
    calculateArea(): number {
      return this.width * this.height;
    }
  }
  
  const circle = new Circle(5);
  console.log(circle.calculateArea());
  
  const rectangle = new Rectangle(4, 5);
  console.log(rectangle.calculateArea());

  export{}