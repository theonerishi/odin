function add7(n) {
    return n + 7;
}
function multiply(n, m) {
    return n * m;
}
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1); //strings are immutable so we have to use charat or indexing and slice
}
function lastLetter(str) {
    return str.charAt(str.length - 1); // last index at length - 1 as we start counting from zero
}