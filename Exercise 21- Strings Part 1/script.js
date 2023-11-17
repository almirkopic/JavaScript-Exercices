// Strings

const airline = "TAP air Portugal";
// const plane = 'A320';

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s == "B" || s === "E") console.log("You got the middle seat");
  else console.log("You got lucky");
};
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//fix capitalization in name

const passenger = "aLmIr";
const passengerLower = passenger.toLowerCase();

const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//comparing email

const email = "almir@gmail.com";
const loginEmail = "Hello@almir.com \n";

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);

//replacing

const priceEU = "288.87E";
const priceUS = priceEU.replace("E", "$");
console.log(priceUS);

const announcement = "All passengers come to barding door 23, Boarding door 23";

console.log(announcement.replace("door", "gate"));
console.log(announcement.replaceAll("door", "gate"));

//boolians
const plane = "A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Air"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the NEW Airbus family");
}

//practice exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board");
  } else {
    console.log("Welcome aboard");
  }
};

checkBaggage("I have a laptop, some food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");
