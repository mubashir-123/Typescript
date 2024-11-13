"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    //There are syntax for constructor
    // constructor(name: string, email: string){
    //       this.name = name
    //       this.email = email
    // }
    function User(name, email) {
        this.name = name;
        this.email = email;
        // name: string
        // email: string
        this.city = "Karachi";
        this._courseNum = 1;
    }
    //We can have private methods and can be access within the class
    User.prototype.deleteToken = function () {
        console.log("Token Deleted successfully");
    };
    Object.defineProperty(User.prototype, "courseCount", {
        //Getter and setter methods are used to access and manupulate the value of private declaration
        get: function () {
            return this._courseNum;
        },
        // Setter method does not allow to define the type even void but it takes the parameter
        set: function (count) {
            if (count <= 1) {
                throw new Error("The course should be greater than one");
            }
            this._courseNum = count;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
//The private decleration is not accessible outside the class even if the class is inherited.
// Protected declaration allows only the accessible if the class is bieng inherited.
var subUser = /** @class */ (function (_super) {
    __extends(subUser, _super);
    function subUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFamily = true;
        return _this;
    }
    subUser.prototype.changeCount = function () {
        this._courseNum = 4;
    };
    return subUser;
}(User));
var mubashir = new User("Mubashir", "@example.com");
mubashir.name = "Ansari";
mubashir.city;
