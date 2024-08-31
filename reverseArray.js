function reverseArray(d)
{
	//let's initialize an empty array
	let holder = []
	for (i=d.length-1; i>=0; i--){
		//when iterating, if we start updating the empty array from the last element .length-1
		holder.push(d[i]);
	}
	//we return the reversed array
	return holder;
}
module.exports = {reverseArray}
