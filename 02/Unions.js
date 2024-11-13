"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var id = 8;
id = "23";
var register = { name: "Mubashir", id: 99 };
register = { username: "Muabshir", id: 34, dept: "IT", isActive: true };
function getDBId(id) {
    // console.log(`YOur DB id is ${id}`);
    if (typeof (id) === "string") {
        id.toLowerCase();
    }
    else {
        id.toExponential();
    }
    return id;
}
getDBId(4);
getDBId("2");
