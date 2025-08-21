function sumInput() {
    let arr = []
    let n;
    do {
        n = Number(prompt('enter a number'));
        arr.push(n);
        alert(n);
        alert(typeof(n));
    } while (!isNaN(n) && n > 0) // adds values to the array while a number greater than 0 is entered
     
    let sum = 0;
    for (let i = 0; i < arr.length; i++) { // iterates through the array adding each value to the sum
        sum += arr[i]
    }
    alert(sum);
}
sumInput();