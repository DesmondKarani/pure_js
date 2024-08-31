function reverseArray(d){
	let holder = []
	for (i=d.length-1; i>=0; i--){
		holder.push(d[i]);
	}
	return holder;
}
module.exports = {reverseArray}
