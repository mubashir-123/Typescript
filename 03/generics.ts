const score: Array<number> = [];
const names: Array<string> = [];

function identity(val: number): number {
  return val;
}

// The any data type can accept one data type and can return the other data type.
function identityTwo(val: any): any {
  return val;
}

// This is a generic function when we give the data it will lock the data type and will accept the same data type return the same data type
function identityThree<Type>(val: Type): Type {
  return val;
}
identityThree(3);

// Aonther syntax
function identityFour<M>(val: M): M {
  return val;
}
identityFour("Hello");

interface Bottle {
  brand: string;
  price: number;
}

// identityFour<Bottle>({}) we can also use interface as a data type in generics

// We can use generics to get the array
function getProducts<T>(products: T[]): T {
  const Index = 0;
  return products[Index];
}

// Syntax of suing generics in arrow functions
const getMoreProducts = <T>(products: T[]): T => {
  const Index = 0;
  return products[Index];
};

// Generic Classes

// We can extend predefine data types
function anotherFunction<T, U extends number>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}
anotherFunction("HI", 5);

interface database {
  connection: string;
  username: string;
  password: string;
}
// We can extend our own data types, Eg interface
function otherFunction<T, U extends database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}
// otherFunction(2,{})

class sellable<T> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}

export {};
