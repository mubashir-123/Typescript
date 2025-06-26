// mapped Types

// type State = {
//   name: string;
//   age: number;
// };

//  we can use both

// type Setters = {
//   [k in keyof State as `set${Capitalize<k>}`]: (value: State[k]) => void;
// };

// type setProperty <k extends string> = `set${Capitalize<k>}`
// type ExampleName = setProperty<'name'>;
// type ExampleAge = setProperty<'age'>;

// Generic types

type Setters<State> = {
  [k in keyof State & string as `set${Capitalize<k>}`]: (
    value: State[k]
  ) => void;
};

type Getters<State> = {
  [k in keyof State & string as `get${Capitalize<k>}`]: () => State[k];
};

type Store<State> = Setters<State> & Getters<State>;

type personState = {
  name: string;
  age: number;
};

type personStore = Store<personState>;
declare const person: personStore;
person.setName("Muabshir");
person.setAge(20);
const names: string = person.getName();
const ages: number = person.getAge();
