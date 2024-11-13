// Instanceof is checking wheather an object is the intance or part of the class or not 
new Date();
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString);
    }
    else {
        console.log(x.toLowerCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function isBird(pet) {
    if (isFish(pet)) {
        pet;
        return "Pet is Fish";
    }
    else {
        pet;
        return "Pet is Bird";
    }
}
