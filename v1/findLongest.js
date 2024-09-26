function findLongestString(h){
	//let's initialize an empty string first
  let compareArray = "";
  for (x of h){
	  //let's compare lengths
    if (x.length>compareArray.length)
	  //update the empty string we initialized before
      compareArray = x;
  }
  return compareArray;
}
module.exports = {findLongestString}
