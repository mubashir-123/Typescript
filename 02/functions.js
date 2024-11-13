"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addNumber(num) {
    return num + 2;
}
addNumber(6);
function loginUser(name, isPaid) {
    if (name === void 0) { name = "JohnDoe"; }
    if (isPaid === void 0) { isPaid = false; }
}
loginUser("");
var hero = ["thor", "hulk", "antman"];
hero.map(function (hero) { return "My hero is ".concat(hero); });
var UppserCase = function (val) { return val; };
UppserCase("hello my world");
//This function return nothing or void
function consoleMsg(msg) {
    console.log(msg);
}
consoleMsg("Hi there I am using whatsapp");
//This function will never return value it terminate the program or stop from crash the program
function errMsg(msg) {
    throw new Error(msg);
}
