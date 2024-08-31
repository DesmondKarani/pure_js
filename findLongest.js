function findLongestString(h){
  let compareArray = "";
  for (x of h){
    if (x.length>compareArray.length)
      compareArray = x;
  }
  return compareArray;
}
