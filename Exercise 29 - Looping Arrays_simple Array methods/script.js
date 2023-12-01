let arr = ["a", "b", "c", "d", "e"];

console.log(arr.slice(2)); //['c', 'd', 'e'];
console.log(arr.slice(2, 4)); //['c', 'd'];
console.log(arr.slice(-2)); //['e'];
console.log(arr.slice(1, -2)); //["b","c"]
console.log(arr.slice());
console.log([...arr]); //['a', 'b', 'c', 'd', 'e'];

//splice

// console.log(arr.splice(2)); //["a","b"]

arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

//REVERSE

arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

//Concat

const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, arr2]);

//Join

console.log(letters.join("-"));

//The new at Method

const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(0));

//getting last element

console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1));

//Looping arrays:For Each

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//for loop example
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}
console.log("----forEach-----");

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
