// output and return values 

//exercise 1 - ''robot buying a drink'' vanilla JS using output of functions!

function getDrink(money, costPerBottle) {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");

var numberOfBottles = Math.floor(money/costPerBottle);
console.log("buy" + numberOfBottles + " bottles of milk");


    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

    return calcChange(money, costPerBottle);
  }


function calcBottles(startingMoney,costPerBottle) {

    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle){
    var change= startingAmount % costPerBottle;
    return change;
}

console.log("Hello Sir, here is your " + getDrink(10,3) + " change");

