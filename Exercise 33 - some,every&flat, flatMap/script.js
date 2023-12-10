//some and every
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

//equality
console.log(movements.includes(-130));

//some: condition
const anyDeposits = movements.some((mov) => mov > 5000);
console.log(anyDeposits);

//every

console.log(movements.every((mov) => mov > 0));
console.log(account4.movements.every((mov) => mov > 0));

//separate callback

const deposit = (mov) => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

///////flat

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2)); //two level deep

const overalBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

/*flatMap//going only 1 level deep, in case we need to go 
more lvl deep into array we need to use flat method */

const overalBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);
