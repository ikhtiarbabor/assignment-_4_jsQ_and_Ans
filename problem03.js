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
let myNumber  = 14;
let calculate = isLGSeven(myNumber);
console.log (calculate);