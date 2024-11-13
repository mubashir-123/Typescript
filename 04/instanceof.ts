// Instanceof is checking wheather an object is the intance or part of the class or not 
new Date();
function logValue(x: Date | string){
    if(x instanceof Date){
       console.log(x.toUTCString);
    }
    else{
       console.log(x.toLowerCase()); 
    }
}

// Type predicates
type Fish = {swim: () => void}
type Bird = {fly: () => void}

function isFish(pet: Fish | Bird):pet is Fish{
    return (pet as Fish).swim !== undefined 
}

function isBird(pet: Fish | Bird){
    if(isFish(pet)){
       pet
       return "Pet is Fish"
    }else{
        pet
        return "Pet is Bird"
    }
}

export{}