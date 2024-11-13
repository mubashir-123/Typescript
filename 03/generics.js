var score = [];
var names = [];
function identity(val) { return val; }
// The any data type can accept one data type and can return the other data type.
function identityTwo(val) { return val; }
// This is a generic function when we give the data it will lock the data type and will accept the same data type return the same data type
function identityThree(val) { return val; }
identityThree(3);
// Aonther syntax
function identityFour(val) { return val; }
identityFour("Hello");
// identityFour<Bottle>({}) we can also use interface as a data type in generics
// We can use generics to get the array 
function getProducts(products) {
    var Index = 0;
    return products[Index];
}
// Syntax of suing generics in arrow functions
var getMoreProducts = function (products) {
    var Index = 0;
    return products[Index];
};
// Generic Classes
// We can extend predefine data types
function anotherFunction(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo
    };
}
anotherFunction("HI", 5);
// We can extend our own data types, Eg interface
function otherFunction(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo
    };
}
// otherFunction(2,{})
var sellable = /** @class */ (function () {
    function sellable() {
        this.cart = [];
    }
    sellable.prototype.addToCart = function (product) {
        this.cart.push(product);
    };
    return sellable;
}());
