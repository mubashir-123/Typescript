// Only one class is extends in Typescript if we have the following classes
class disposible {
  isDisposible: boolean = false;
  disposible() {
    this.isDisposible = true;
  }
}

class Activable {
  isActive: boolean = false;
  activate() {
    this.isActive = true;
  }
  deActivate() {
    this.isActive = false;
  }
}

// class Example extends disposible, Activable{

// }

// We will use the mixins to extend multiple classes

type Class = new (...args: any[]) => any;

function DisposibleMixins<Base extends Class>(base: Base) {
  return class extends base {
    isDisposible: boolean = false;
    disposible() {
      this.isDisposible = true;
    }
  };
}

function ActivableMixins<Base extends Class>(base: Base) {
  return class extends base {
    isActive: boolean = false;
    activate() {
      this.isActive = true;
    }
    deActivate() {
      this.isActive = false;
    }
  };
}

const Example = DisposibleMixins(
  ActivableMixins(
    class {
      // ...
      member = 123;
    }
  )
);

// Now with this class we can create intances
// const example = new Example();

// but if we want instance in the function as argument it will give error, so here is the solution of it

// function takeExample(example: Example){
// }

// Now we can have access to all mthods and vairiable of extended classes and also the base class
//  but we cannot make constructor here as it is a function

type Example = InstanceType<typeof Example>;
function takeExample(example: Example) {
  example;
}

// we will use the mixins as the base class extends

class Examples extends DisposibleMixins(ActivableMixins(class {})) {
  member = 123;
  constructor() {
    super();
  }
}

// In above we us class so we can annotate the types and as value
const examples: Example = new Examples();
