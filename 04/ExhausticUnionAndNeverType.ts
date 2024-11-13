interface Circle{
    kind: "circle",
    radius: number
}

interface Square{
    kind: "square",
    side: number
}

interface Rectangle{
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle

function getShape(shape: Shape){
   if(shape.kind === "circle"){
      return Math.PI * shape.radius ** 2;
   }else if(shape.kind === "square"){
      return shape.side * shape.side;
   }else{
       return shape.length * shape.width;
   }
}

function trueShape(shape: Shape){
    switch(shape.kind){
        case "circle":
           return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;    
        default:
            const forShape: never = shape;
            return forShape;      
    }
}

export{}