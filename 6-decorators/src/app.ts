// function Logger(logString: string) {
//   console.log("LOGGER FACTORY");
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// function WithTemplate(template: string, hookId: string) {
//   console.log("TEMPLATE FACTORY");
//   return function (constructor: any) {
//     console.log("Rendering template");
//     const hookEl = document.getElementById(hookId);
//     const p = new constructor();
//     if (hookEl) {
//       hookEl.innerHTML = template;
//       hookEl.querySelector("h1")!.textContent = p.name;
//     }
//   };
// }

// @Logger("LOGGING - PERSON")
// @WithTemplate("<h1>My Person Object</h1>", "app")
// class Person {
//   name = "Afif";

//   constructor() {
//     console.log("Creating person object...");
//   }
// }

// const person = new Person();
// console.log(person);

// ---

function Log() {
  console.log("LOGGING");
  return function (target: any, propertyName: string | Symbol) {
    console.log("Property decorator!");
    console.log(target, propertyName);
  };
}

function Log2() {
  return function (target: any, name: string, descriptor: PropertyDescriptor) {
    console.log("Accessor decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
  };
}

function Log3() {
  return function (target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log("Method decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
  };
}

function Log4() {
  return function (target: any, name: string | Symbol, position: number) {
    console.log("Parameter decorator!");
    console.log(target);
    console.log(name);
    console.log(position);
  };
}

class Product {
  @Log()
  title: string;
  private _price: number;

  @Log2()
  set price(value: number) {
    if (value < 0) throw new Error("Invalid price - should be positive");
    this._price = value;
  }

  constructor(title: string, price: number) {
    this.title = title;
    this._price = price;
  }

  @Log3()
  getPriceWithTax(@Log4() tax: number) {
    return this._price * (1 + tax);
  }
}
