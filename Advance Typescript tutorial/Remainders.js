// remainder in javascript uses the number which is the float type.
console.log(3 % 2); // 1
console.log(4 % 2); // 0
console.log(4 % 3); // 1
console.log(4.25 % 1.5); // 1.25
//  the most common use of remainder isEven
var isEven = function (value) { return value % 2 === 0; };
console.log(isEven(1)); // False
console.log(isEven(2)); // True
console.log(isEven(3)); // False
console.log(isEven(4)); // True
// by using the loop
for (var x = 0; x <= 100; x++) {
    if (x % 9 === 0) {
        console.log(x); // The output will be the table of 9
    }
}
// we can also take array as paramater in functiona and apply the same divisibility on array
function getNthItem(array, nth) {
    return array.filter(function (_, i) { return i % nth === 0; });
}
console.log(getNthItem([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
function takeTime(seconds) {
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor(seconds / 60) % 60;
    var second = seconds % 60;
    return { hours: hours, minutes: minutes, second: second };
}
console.log(takeTime(3666));
