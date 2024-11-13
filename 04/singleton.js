// Singleton is a concept that a class can have only one object.It cannot make other object, it is a control over a class.
var Human = /** @class */ (function () {
    function Human(name) {
        this.name = name;
    }
    Human.getObject = function (name) {
        if (this.object) {
            return this.object;
        }
        this.object = new Human(name);
        return this.object;
    };
    return Human;
}());
var mubashir = Human.getObject("mubashir");
console.log(mubashir);
var ansari = Human.getObject("ansari");
console.log(ansari);
