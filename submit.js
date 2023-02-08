/*...............................
Problem 1: Let’s play a mind game
 ................................*/
 function mindGame(positiveNum) {
    const multiply = positiveNum * 3;
    const sum = multiply + 10;
    const divide = sum / 2;
    const subtraction = divide - 5;
    let errorTypeCheck = 'Please Enter Number';
    let checkTypeNum = typeof positiveNum;
    if (checkTypeNum !== 'number') {
      return errorTypeCheck;
    }
    return subtraction; //return the final calculation
  }

  
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

/*.....................................
Problem 3: Is Less or Greater than seven
......................................*/

function isLGSeven(number){
    const gSeven =7 ;
    const difference = number-gSeven;
    const doubleInput =number*2 
    if (difference < gSeven){ //less then 7
        return difference;
    }
    return doubleInput;
  }

/*..........................
Problem 4: Finding Bad data
...........................*/

function findingBadData(numbers) {
    let badData = [];
    for (let i = 0; i < numbers.length; i++) {
      const index = i;
      const numbersValue = numbers[index];
      if (numbersValue < 0) {
        badData.push(i);
      }
    }
    let countBadData = badData.length;
    return countBadData;
}


/*.......................................
Problem 5: Convert your gems into diamond
.........................................*/
function gemsToDiamond(firstFriend, secondFriend, thirdFriend) { //three friend parameter
    const firstFriendGems = 21;
    const secondFriendGems = 32;
    const thirdFriendGems = 43;
    const firstFriendGtoDiamond = firstFriend * firstFriendGems;
    const secondFriendGtoDiamond = secondFriend * secondFriendGems;
    const thirdFriendGtoDiamond = thirdFriend * thirdFriendGems;
    const totalGems =
      firstFriendGtoDiamond + secondFriendGtoDiamond + thirdFriendGtoDiamond; //total Gems
    if (totalGems > 1000 * 2) {
      const takeGems = totalGems - 2000;
      return takeGems;
    }
    return totalGems;
  }