const prompt = require(`prompt-sync`)();
let y = prompt(`enter a string or paragraph 🙂: `);
let x = y.trim(); // this trims trailing and leading spaces.

let newX = x.split(/\s+/) //this splits the sentence into individual words where spaces are, regardless of how many spaces are

let arrays = [];
let counter = 0;

for (temp of newX){
  //if (temp !== ` `){ unnecessary
    arrays.push(temp);
    counter++
  //}
}

/* this is flawed... if 2 spaces were inputed.
function wordCounter(){ 
  let counter = 0;
  for (let temp of x){
    if (temp === ` `){
      counter++;
    }
  }
  return counter + 1;
}*/

console.log(`\nYour sentence is: "${x}."\n\nThe number words in it is: ${counter}\n\n`);
console.log(arrays)
