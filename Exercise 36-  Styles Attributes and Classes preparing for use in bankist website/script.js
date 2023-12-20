//styles Attributes and Clases

//styles

message.style.backgroundColor = "#37383d";
message.style.width = "120%";

console.log(message.style.height);
console.log(message.style.backgoundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

document.documentElement.style.setProperty("--color-primary", "orangered"); //hover color change on object move

//Atributes
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = "Beautiful minimalist logo";

//non-standard
console.log(logo.designer);
console.log(logo.getAttribute("designer"));
logo.setAttribute("company", "Bankist");

console.log(logo.src);
console.log(logo.getAttribute("src"));

const link = document.querySelector(".twitter-link");
console.log(link.href);
console.log(link.getAttribute("href"));

//Data attribute
console.log(logo.dataset.versionNumber);

// Classes

logo.classList.add("c", "j"); //adding more classes
logo.classList.remove("c", "j");
logo.classList.toggle("c");
logo.classList.contains("c"); //not includes

//do not use

logo.className = "Almir"; // this will overwrite all existing classes it allowes us to put only one class into element
