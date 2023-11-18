// Strings-split

console.log("a+very+nice+string".split("+"));
console.log("Almir Kopic".split(""));

const [firstName, lastName] = "Almir Kopic".split(" ");

const newName = `Mr ${firstName} ${lastName.toUpperCase()}`;
console.log(newName);

const caplitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(" "));
};

caplitalizeName("jessica ann smith davis");
caplitalizeName("almir kopic");

//padding string

const message = "Go to gate 23!";
console.log(message.padStart(25, "+").padEnd(30, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};
console.log(maskCreditCard(5846888)); //***6888
console.log(maskCreditCard(435465456465686464)); //**************6460
console.log(maskCreditCard("45654566564646456565")); //************6565

//Repeat

const message2 = "Bad weather ... All departues Delayed...";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"bay".repeat(n)}`);
};

planesInLine(5);
