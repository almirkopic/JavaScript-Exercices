"use strict";

const runOnce = function () {
  console.log("This will never run again");
};

runOnce();
//IIFE
(function () {
  console.log("This will never run again");
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log("This will ALSO never run again"))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}

console.log(notPrivate);

////CLOSURES

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker(); //1
booker(); //2
booker(); //3

console.dir(booker);
