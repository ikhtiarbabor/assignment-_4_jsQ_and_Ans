/*
Problem 2: Finding even or odd 
*/
//This function will tell you whether the word or sentence is even or odd.
function evenOdd(string) {
  let checkTypeStr = typeof string;
  const evenOddNumCheck = string.length % 2;
  const errorType ='Please Give Me String Value'
  if (checkTypeStr !== 'string') {
    return errorType;
  } else if (evenOddNumCheck == 0) {
    return 'even';
  }
  return 'odd';
}
let myStr = 5;
let oddOrEven = evenOdd(myStr);
console.log(oddOrEven);
