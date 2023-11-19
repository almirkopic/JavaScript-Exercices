'use strict';

//Default Parameters
const bookings = [];

const createBooking = function (
  flightNum1,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum1,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);

//Passing Arguments-Value vs Reference

const flight = 'LH234';
const almir = {
  name: 'Almir Kopic',
  passport: 2347954556,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2347954556) {
    alert('check In');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, almir);
console.log(flight);
console.log(almir);

//is the same as doing...
const flightNum = flight;
const passenger = almir;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};
newPassport(almir);
checkIn(flight, almir);
