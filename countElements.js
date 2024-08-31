function countOccurrences(array, e){
	//let's initialize a variable called count with a value of 0
	let count = 0;
	//let create a loop to iterate through the array
	for (i=0; i<array.length; i++){
		if (e === array[i])
			count++;
	}
	console.log(e, count);
}
module.exports = {countOccurrences};
