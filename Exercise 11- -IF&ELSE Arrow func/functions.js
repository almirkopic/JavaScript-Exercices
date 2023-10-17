//Function Declaration
// // TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

// // TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.



//TEST 1
const calcAverage = (a,b,c) => (a+b+c) /3;

let scoreDolphins = calcAverage(44,23,71);
let scoreKoalas = calcAverage(65,54,49);

const checkWInner= function(avgDolphins,avgKoalas){

    if(avgDolphins >= 2*avgKoalas){
        console.log(`Dolphins Wins (${avgDolphins}) vs (${avgKoalas}) !`);
    }else if(avgKoalas >= 2*avgDolphins){
        console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`)
    } else {
        console.log("No team wins")
    }

}

checkWInner(scoreDolphins, scoreKoalas);
//No team wins

//TEST 2

scoreDolphins = calcAverage(85,54,41);
scoreKoalas = calcAverage(23,35,27);

console,log(scoreDolphins, scoreKoalas);
checkWInner(scoreDolphins,scoreKoalas)
//*Dolphins win