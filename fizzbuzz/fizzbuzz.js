let x = [];

let a = 0, b = 0, c = 0;

for (let i = 1; i<=100; i++){
  if (i%3 === 0 && i%5 === 0){
    x.push(`FizzBuzz`)
	  c++;
  } else if (i%5===0){
    x.push(`Buzz`)
	  b++;
  } else if (i%3 === 0){
    x.push(`Fizz`);
	  a++;
  } else {
    x.push(i);
  }
}
console.log(x)
/*
let a = 0;
let b = 0;
let c = 0;

for (temp of x){
  if (temp === `Fizz`){
    a++
  } else if (temp === `Buzz`){
    b++;
  } else if (temp === `FizzBuzz`){
    c++
  }
}
*/
console.log(`\nThere are are ${a} Fizz, ${b} Buzz, and ${c} FizzBuzz 🙂\n`);
