//problem 3
function isLGSeven(number) {
    let difference = (number - 7);
    if (difference < 7) {
        return difference;
    } else {
        return 2 * number;
    }
}
