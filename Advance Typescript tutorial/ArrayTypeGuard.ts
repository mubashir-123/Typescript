type Square = {
  type: "sqaure";
  size: number;
};

type Rectangle = {
  type: "rectangle";
  height: number;
  width: number;
};

type Shape = Square | Rectangle;

const shape: Shape[] = getShape();

// By using the type guard s is Square or Rectangle can helps to find the type in Union.
// If we skip the above code then we will see error in s.type

const isSquare = (s: Shape): s is Square => s.type == "sqaure";
const isRectangle = (s: Shape): s is Rectangle => s.type == "rectangle";

const square = shape.find(isSquare);
const size = square?.size;

const squares = shape.filter(isSquare);
const sizes = squares.map((s) => s.size);
