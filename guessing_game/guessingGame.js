const prompt = require(`prompt-sync`)()
let name = prompt(`what's your name? `);
console.log(`Welcome, ${name}, good to see yah. Let the games begin 🙂\n`);

let counter = 0
let x = Math.floor(Math.random() * 11);
//console.log(x);

while (counter < 3){
  let y = parseInt(prompt(`Guess any number between 0 and 10 🙂: `));
  if (isNaN(y)){
    console.log(`Buddy, I said NUMBERS 🙂, like 1,2,3..? 🤔`)
    continue;
  }
  
  if (y === x){
    console.log(`\nWow! 😮, Hoooly cow you guessed it! Here is you mil 💰\n`)
    break;
  } else if (y >= x-2 && y <= x+2){
    counter++
    if (counter != 3){
      console.log(`\nYou're pretty close dude, you have ${3-counter} more chances to try 🙂. Again: `)
    }
    else {
      console.log(`Sorry buddy, you were not meant to be a millionaire 🤭`)
    }
  } else {
    console.log(`\nKeep guessing mate. If you get too close I'll notify you and you'll have 2 more chances `)
  }
}
