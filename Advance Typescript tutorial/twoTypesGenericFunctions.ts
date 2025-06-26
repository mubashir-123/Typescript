type A<T> = (x: T) => T;
interface GenericInterfaceFunction<T> {
  (x: T): T;
}

type B = <T>(x: T) => T;
interface IntergaceForGenericFucntion {
  <T>(x: T): T;
}

// declare const a: A //Throw error as need to assign the type here in generic
declare const aNum: A<number>;
declare const astr: A<string>;

declare const b: B;
// declare const bIsNotGeneric: B<string> //Throw error as it is not a generic

const numToNum: A<number> = function (x: number) {
  return x * 10;
};
const strToStr: A<string> = function (x: string) {
  return x + "world";
};

const identity: B = function <T>(x: T) {
  //B is not geberic but points to the geberic function
  return x;
};
