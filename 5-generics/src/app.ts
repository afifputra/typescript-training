// const names: Array<string> = []; // string[]
// // names[0].split(' ');

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This is done!");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

// Own Generic Function
function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  const mergedObj = Object.assign(objA, objB);
  return mergedObj;
}

const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });

console.log(mergedObj);

interface Lengthy {
  length: number;
}

const countAndDescribe = <T extends Lengthy>(element: T): [T, string] => {
  let descriptionText = "Got no value.";

  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }

  return [element, descriptionText];
};

console.log(countAndDescribe("Hi there!"));
