const prompt = require(`prompt-sync`)();
console.log(`Welcome. Operations are: 1 for Addition, 2 for Subtraction, 3 for Division, 4, for Multiplication`)

while (true){
let option = parseInt(prompt(`which operation do you want?`));
if (isNaN(option)){
  console.log(`I gave you only four options buddy, just 1,2,3,4.`);
  continue;
}

let x = parseInt(prompt(`Okay. Enter first number: `));
if (isNaN(x)){
  console.log(`Only working with numbers`)
}
let y = parseInt(prompt(`Second number please: `));
if (isNaN(y)){
  console.log(`Only working with numbers`)
}


if (option > 0 && option <= 4){
switch (option) {
        case 1:
                console.log(`${x} plus ${y} = ${x+y}`)
                break;
        case 2:
                console.log(`${x} minus ${y} = ${x-y}`);
                break;
        case 3:
                console.log(`${x} divide by ${y} = ${x/y}`);
                break;
        case 4:
                console.log(`${x} multiplied by ${y} = ${x*y}`);
                break;
        default:
                console.log(`Something is wrong dude. Wait...`);
                break;
}
} else {
        console.log(`invalid option`);
}
let jibu = prompt(`Anything else? `)
if (jibu.toLowerCase() === `yes`){
        continue;
} else {
        break;
}
}
