type Name = {
  name: string;
};
type Age = {
  age: number;
};
// type nameAndAge = {
//   name: string;
//   age: number;
// };
type Union = Name | Age;
type Intersection = Name & Age;

const named = { name: "john" };
const ages = { age: 39 };
const nameAndAges = { name: "John", age: 39 };

let unions: Union;

console.log((unions = named));
console.log((unions = ages));
console.log((unions = nameAndAges));

let intersections: Intersection;
// intersection = names;
// intersection = age;
intersections = nameAndAges;

function filters(unions: Union) {
  if ("name" in unions) {
    unions.name;
  }
  if ("age" in unions) {
    unions.age;
  }
  if ("name" in unions && "age" in unions) {
    console.log(unions.name);
    console.log(unions.age);
  }
}
