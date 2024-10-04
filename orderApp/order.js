const prompt = require(`prompt-sync`)();

let ourCatalogue = [
  {breakfast: `Kenyan Breakfast`, contains: [`tea with milk`, `andazi`], price: 110},
  {breakfast: `English Breakfast`, contains: [`eggs`, `bacon`, `toast`, `beans`, `coffee`], price: 350},
  {breakfast: `Pancake Delight`, contains: [`pancakes`, `maple syrup`, `fruits`, `yogurt`], price: 270},
  {breakfast: `Omelette Special`, contains: [`cheese omelette`, `toast`, `sausage`, `tea`], price: 250},
  {breakfast: `Fruit Platter`, contains: [`mango`, `pineapple`, `banana`, `watermelon`, `yogurt`], price: 200},

  {lunch: `Githeri`, contains: [`maize and beans`, `avocado`, `potatoes`], price: 230},
  {lunch: `Beef Stew`, contains: [`beef stew`, `rice`, `vegetables`, `chapati`], price: 350},
  {lunch: `Fried Fish`, contains: [`fried fish`, `ugali`, `sukuma wiki`, `tomato salad`], price: 450},
  {lunch: `Chicken Pilau`, contains: [`chicken pilau`, `kachumbari`, `spicy sauce`], price: 400},
  {lunch: `Vegetable Curry`, contains: [`mixed vegetable curry`, `chapati`, `rice`, `salad`], price: 300},

  {refreshment: `Juices per glass`, contains: [`avocado juice`, `orange`, `watermelon`, `pineapple`, `cocktail`], price: 150},
  {refreshment: `Smoothie`, contains: [`banana smoothie`, `mango`, `yogurt`, `honey`], price: 180},
  {refreshment: `Milkshake`, contains: [`vanilla milkshake`, `chocolate milkshake`, `strawberry milkshake`], price: 200},
  {refreshment: `Iced Coffee`, contains: [`iced coffee`, `milk`, `sugar`, `ice`], price: 170},
  {refreshment: `Herbal Tea`, contains: [`green tea`, `mint tea`, `chamomile`, `lemon tea`], price: 120},

  {alcohol: `Everything Alcohol`, contains: [`whisky`, `wine`, `vodka`, `gin`, `beer`], price: 300},
  {alcohol: `Cocktails`, contains: [`mojito`, `pina colada`, `margarita`, `martini`, `daiquiri`], price: 350},
  {alcohol: `Local Beers`, contains: [`Tusker`, `White Cap`, `Pilsner`, `Summit`, `Senator`], price: 200},
  {alcohol: `Wines`, contains: [`red wine`, `white wine`, `rosé wine`], price: 400},
  {alcohol: `Spirits`, contains: [`vodka`, `whisky`, `rum`, `brandy`, `tequila`], price: 450}
];

let options;
let value = false;

while (true){
  //initial request to client
  let request = prompt(`How can we help you? `);
  let p = request.toLowerCase();
  //store request in an array
  let newRequest = p.split(/\s+/);
  //iterate through the array to find key words matching what we offer
  for (let x of newRequest){
    //if key word is breakfast
    if (x === `breakfast`){
      console.log(`\nGreat! For breakfast we offer:\n`)
      for (temp of ourCatalogue){
        if (temp.breakfast){
          console.log(`${temp.breakfast} which has ${temp.contains}, and costs ${temp.price}\n`);
          options = `breakfast`;
          value = true;
        }
      }
    } else if (x === `lunch`){ // if keyword is lunch
      console.log(`\nfor lunch we have:\n`)
      for (temp of ourCatalogue){
        if (temp.lunch){
          console.log(`${temp.lunch} which has ${temp.contains}, and costs ${temp.price}\n`);
          options = `lunch`;
          value = true;
        }
      }
    } else if (x === `refreshment`){//if key word is refreshment
      console.log(`\nfor refreshments We have:\n`)
      for (temp of ourCatalogue){
        if (temp.refreshment){
          console.log(`${temp.refreshment} which has ${temp.contains}, and costs ${temp.price}\n`);
          options = `refreshment`;
          value = true;
        }
      }
    } else if (x === `alcohol`){ //if key word is alcohol
      console.log(`\nwe offer alcohols like:\n`)
      for (temp of ourCatalogue){
        if (temp.alcohol){
          console.log(`${temp.alcohol} that include ${temp.contains}, and costs ${temp.price}\n`);
          options = `alcohol`;
          value = true;
        }
      }
    }
  }
  if (value){
    break;
  } else{//if we don't find a keyword
    console.log(`Sorry, we only offer breakfast, lunch, refreshmens, and alcohol`);
    continue;
  }
}

//providing the cost of what the client prefers
switch (options){
	case `breakfast`:
		let answer = prompt(`preference? `);
		switch (answer){
			case `Kenyan Breakfast`:
				console.log(`that will be KES110`);
				break;
			case `English Breakfast`:
				console.log(`that will be KES350`);
				break;
			case `Pancake Delight`:
				console.log(`that will be KES270`);
				break;
			case `Omelette Special`:
				console.log(`that will be KES250`);
				break;
			case `Fruit Platter`:
				console.log(`that will be KES200`);
				break;
		}
		break;
	case `lunch`:
		let answer2 = prompt(`preference? `);
		switch (answer2){
			case `Githeri`:
				console.log(`that will be KES230`);
				break;
			case `Beef Stew`:
				console.log(`that will be KES350`);
				break;
			case `Fried Fish`:
				console.log(`that will be KES450`);
				break;
			case `Chicken Pilau`:
				console.log(`that will be KES400`);
				break;
			case `Vegetable Curry`:
				console.log(`that will be KES300`);
				break;
		}
		break;
	case `refreshment`:
		let answer3 = prompt(`preference? `);
		switch (answer3){
			case `Juices per glass`:
				console.log(`that will be KES150`);
				break;
			case `Smothie`:
				console.log(`that will be KES180`);
				break;
			case `Milkshake`:
				console.log(`that will be KES200`);
				break;
			case `Iced Coffee`:
				console.log(`that will be KES170`);
				break;
			case `Herbal Tea`:
				console.log(`that will be KES120`);
				break;
		}
		break;
	case `alcohol`:
		let answer4 = prompt(`preference? `);
		switch (answer4){
			case `Everything Alcohol`:
				console.log(`that will be KES300`);
				break;
			case `Cocktails`:
				console.log(`that will be KES350`);
				break;
			case `Local Beers`:
				console.log(`that will be KES200`);
				break;
			case `Wines`:
				console.log(`that will be KES400`);
				break;
			case `Spirits`:
				console.log(`that will be KES450`);
				break;
		}
		break;
}
