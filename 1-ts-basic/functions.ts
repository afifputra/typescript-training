const newAdd = (n1: number, n2: number): number => {
  return n1 + n2;
};

const newPrintResult = (num: number): void => {
  console.log(`Result is: ${num}`);
};

newPrintResult(newAdd(5, 2));

// Type Function

let combinedValues: (a: number, b: number) => number;

combinedValues = newAdd;

console.log(combinedValues(8, 8));

// Callback Function
const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
  cb(result);
};

addAndHandle(10, 10, (result) => {
  console.log(result);
});
