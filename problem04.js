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
let myNumbers = [1, 2, 5];
let totalBadData = findingBadData(myNumbers);
console.log(totalBadData);
