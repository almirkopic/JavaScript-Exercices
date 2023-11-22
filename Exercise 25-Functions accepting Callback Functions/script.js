const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};
//higher order funct
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
};

transformer(`JavaScript is the best!`, upperFirstWord);

transformer(`JavaScript is the best!`, oneWord);

const high5 = function () {
  console.log("✔");
};

document.body.addEventListener("click", high5);

["Almir", "Ana", "Jane"].forEach(high5);
