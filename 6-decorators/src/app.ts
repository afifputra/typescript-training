function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}
@Logger
class Person {
  name = "Afif";

  constructor() {
    console.log("Creating person object...");
  }
}

const person = new Person();
console.log(person);
