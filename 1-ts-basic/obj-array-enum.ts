// Basic Object
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[]; // String array type check
//   role: [number, string]; // Tuple type check
// }

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Afif",
  age: 23,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

console.log(person);
// person.role.push("admin"); // Exeption: Cannot add to a fixed-length tuple
// person.role[1] = 12;

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  /* console.log(hobby.map()) */ // This will not work because hobby is not an array
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}

// Nested Object
const product: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
} = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};

console.log(product);
