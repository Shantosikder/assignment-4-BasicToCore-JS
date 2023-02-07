//problem 5
function gemsToDiamond(fristFriendsGems, secondFriendsGems, thardFriendsGems) {
    let totalDiamonds = fristFriendsGems * 21 + secondFriendsGems * 32 + thardFriendsGems * 43;
    if (totalDiamonds > 1000) {
        totalDiamonds = totalDiamonds - 2000;
    }
    return totalDiamonds;
}
