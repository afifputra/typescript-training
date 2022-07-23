type NumString = number | string;
type Conversion = "as-number" | "as-text";

function combine(input1: NumString, input2: NumString, resultType: Conversion) {
  let result: any;
  if ((typeof input1 === "number" && typeof input2 === "number") || resultType === "as-number") {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 20, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "20", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Afif", "Ahmad", "as-text");
console.log(combinedNames);

// Object Type declaration

type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Afif",
  age: 23,
};

const greet = (user: User) => {
  console.log(`Hello, ${user.name}. You are ${user.age} years old.`);
};

greet(user);

// Try Quiz
type Product = {
  title: string;
  price: number;
};

const p1: Product = {
  title: "Book",
  price: 12.99,
};
