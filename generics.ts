function getFirstElement<T>(array: T[]): T {
    return array[0];
  }
  
  console.log(getFirstElement([1, 2, 3])); // 1
  console.log(getFirstElement(["a", "b", "c"])); // "a"

  export{}