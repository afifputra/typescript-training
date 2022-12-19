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
function merge<T, U>(objA: T, objB: U): T & U {
  const mergedObj = Object.assign(objA as object, objB as object) as T & U;
  return mergedObj;
}

const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
const mergedObj2 = merge({ name: "Max" }, { age: 30 });

console.log(mergedObj);
console.log(mergedObj2);
