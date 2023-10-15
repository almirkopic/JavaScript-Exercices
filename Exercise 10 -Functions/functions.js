//Function Declaration
 
function calcAge1(birthYear) {
    return 2037 - birthYear;
    }
    
     console.log(age1);
    
     //Function Expression
    
     const calcAge2 = function(birthYear) {
         return 2037-birthYear;
    }
    
    const age2 = calcAge2(1991);
    console.log(age1, age2);
    
    //Arrow functions
    
    const calcAge3 = birthYear => 2037 - birthYear;
    const age3 = calcAge3(1991);
    console.log(age3)
    
    
    const yearsUntilRetirement = (birthYear, firstName) => {
        const age = 2037- birthYear;
        const retirement = 65- age;
        //return retirement;
        return `${firstName} retires in ${retirement} years.`
    }
    
    console.log(yearsUntilRetirement(1991,Jonas));
    console.log(yearsUntilRetirement(1980,Bob));

//Function calling function

function cutFruitPieces (fruit){
    return fruit *4;
}


function fruitProcessor(apples, oranges) {
const applePieces = cutFruitPieces(apples);
const orangePieces = cutFruitPieces(oranges);


const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange` ;
return juice;
};

console.log(fruitProcessor(2,3));
