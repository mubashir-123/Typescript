function getShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    else if (shape.kind === "square") {
        return shape.side * shape.side;
    }
    else {
        return shape.length * shape.width;
    }
}
function trueShape(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            var forShape = shape;
            return forShape;
    }
}
