// import _ from "lodash";
import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Product } from "./product.model";

// declare var GLOBAL: string;

// console.log(_.shuffle([1, 2, 3, 4, 5]));

// console.log(GLOBAL);

const products = [
  {
    title: "A Carpet",
    price: 29.99,
  },
  {
    title: "A Book",
    price: 12.99,
  },
];

/**
 * * Manual instantiate objects as Product class
 */

// const loadedProducts = products.map((prod) => {
//   return new Product(prod.title, prod.price);
// });

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}

// Class Validator
const newProd = new Product("", -5.99);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log("Validation errors!");
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});
