// if number is divisible by 2 print-Fizz, if number is divisiblke by 5 print Buzz, if number is divisible by 3 and 5 print fizBuzz


var output = [];
var count =1;


function fizzBuzz(){

output.push(count);
count++;  

if(count % 3===0 & count % 5===0){
  output.push('FizzBuzz');
}
  
  else if (count % 3 ===0){
  output.push('Fizz');
} 

else if (count % 5===0){
  output.push('Buzz');
}
  else {
    output.push(count);
  }
  

  
  console.log(output);
}




