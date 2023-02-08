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
let myFriendsDiamond = gemsToDiamond(1, 1, 1);
console.log(myFriendsDiamond);
