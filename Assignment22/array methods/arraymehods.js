let arr = [1, 2, 3, 4, 5];
console.log(arr.map((y) => y * 3));

let arr4 = [1, 2, 2, 3, 3, 4, 5];

arr4 = arr4.filter((value, index, arr) => arr.indexOf(value) === index);

console.log(arr4);

let arr5 = [
  { name: "hussam", age: 30 },
  { name: "Ali", age: 40 },
  { name: "Ahmad", age: 22 },
];

arr5.sort((a, b) => a.age - b.age);

console.log(arr5);
