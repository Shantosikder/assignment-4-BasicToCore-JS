//problem 4
function findingBadData(array) {
    let badDataCount = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            badDataCount++;
        }
    }
    return badDataCount;
}
