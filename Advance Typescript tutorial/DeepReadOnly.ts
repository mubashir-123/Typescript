// ReadOnly builtin function works for the first layer of the objects, but if we want more deep readonly proprerty then we will use custome fucntion to check make the property readonly

type DeepReadOnly<T> = {
  readonly [P in keyof T]: DeepReadOnly<T[P]>;
};

type Example = {
  a: {
    b: {
      c: number;
    };
  };
};

let example: DeepReadOnly<Example> = {
  a: {
    b: {
      c: 123,
    },
  },
};
// example.a.b.c = 12;
