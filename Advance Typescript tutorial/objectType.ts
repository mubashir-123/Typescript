let isPresent: boolean = true;
let magic: number = 66.66;
let hello: string = "world";

let notDefined: undefined = undefined;
let notPresent: null = null;

let penta: symbol = Symbol("Star");
let biggy: bigint = 24n;

let car = { comapny: "ford", model: "mustang" };
let person = { name: "john", age: 23 };

// The object type will allow only objects as type annotation not the primitive types
let iTakeNonPrimitiveOnly: object;
iTakeNonPrimitiveOnly = car; // Allow
iTakeNonPrimitiveOnly = person; // Allow
// iTakeNonPrimitiveOnly  magic // Error
// iTakeNonPrimitiveOnly = hello // Error

const objectToValue = new WeakMap();
objectToValue.set(car, 50000);
// objectToValue.set(456,50000) // this will throw error as the key type will be object only in the Weakmap(), no primitive types are allowed
