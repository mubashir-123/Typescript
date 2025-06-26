// remainder in javascript uses the number which is the float type.

console.log(3 % 2); // 1
console.log(4 % 2); // 0
console.log(4 % 3); // 1

console.log(4.25 % 1.5); // 1.25

//  the most common use of remainder isEven

const isEven = (value: number) => value % 2 === 0;

console.log(isEven(1)); // False
console.log(isEven(2)); // True
console.log(isEven(3)); // False
console.log(isEven(4)); // True

// by using the loop

for (let x = 0; x <= 100; x++) {
  if (x % 9 === 0) {
    console.log(x); // The output will be the table of 9
  }
}

// we can also take array as paramater in functiona and apply the same divisibility on array
function getNthItem<T>(array: T[], nth: number): T[] {
  return array.filter((_, i) => i % nth === 0);
}

console.log(getNthItem([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

// we can also use it with different units

type Time = {
  hours: number;
  minutes: number;
  second: number;
};

function takeTime(seconds: number): Time {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor(seconds / 60) % 60;
  const second = seconds % 60;

  return { hours, minutes, second };
}

console.log(takeTime(3666));
