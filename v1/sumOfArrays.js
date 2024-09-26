function sumArray(x){
	//let's initialize a variable with a value of 0
  sumOfArray = 0;
  for (i=0; i<x.length; i++){
	  //as we iterate, we start adding the elments of the array to the variable initialized
    sumOfArray = sumOfArray + x[i];
  }
	//let's return the update variable with a new value
  return sumOfArray;
}
module.exports = {sumArray}
