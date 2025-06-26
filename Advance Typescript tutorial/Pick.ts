type Point3D = {
  x: number;
  y: number;
  z: number;
};

// We can choose some proprerties intead of all by creating a custom pick
// type pick<T,K extends keyof T> = {[P in K]: T[P] }

// We can use built in function Pick to choose any properties
type Point2D = Pick<Point3D, "x" | "y">;

// similarly we can take other example
type CSSProperties = {
  color?: string;
  backgroundColor?: string;
  width?: number;
  height?: number;
  length?: number;
  // ... lots more
};

function setSize(
  element: HTMLElement,
  // Usage: just need to size the properties
  // By defining these properties we can only use them
  // size: {length?: number, width?: number}

  // but if we are not sure then we use the Pick method cssProperites choose any properties.
  size: Pick<CSSProperties, "width" | "length">
) {
  element.setAttribute("width", (size.width ?? 0) + "px");
  element.setAttribute("length", (size.length ?? 0) + "px");
}
