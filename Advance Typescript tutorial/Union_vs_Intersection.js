var named = { name: "john" };
var ages = { age: 39 };
var nameAndAges = { name: "John", age: 39 };
var unions;
console.log((unions = named));
console.log((unions = ages));
console.log((unions = nameAndAges));
var intersections;
// intersection = names;
// intersection = age;
intersections = nameAndAges;
function filters(unions) {
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
