interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

let user: Person;

user = {
  name: "Afif",
  age: 30,
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  },
};

user.greet("Hi there - I am");
