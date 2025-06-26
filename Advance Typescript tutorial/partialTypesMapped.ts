// type partial<T> = { [P in keyof T]?: T[P] };

type Point = { x: number; y: number };

// x and y become optional like this x?: and y:?
// Partial is the builtin method in Typescript or we can define our own partial

type partailPoint = Partial<Point>;

// In the given class we can update any next memeber intead of all members to update by using the Partial
class State<T> {
  constructor(public current: T) {}
  udpate(next: Partial<T>) {
    this.current = { ...this.current, ...next };
  }
}

// Usage
const state = new State({ x: 0, y: 0 });
state.udpate({ y: 123 });
console.log(state.current);
