function sumInput() {
    let arr = []
    let n;
    do {
        n = Number(prompt('enter a number'));
        arr.push(n);
        alert(n);
        alert(typeof(n));
    } while (!isNaN(n) && n > 0)
     
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    alert(sum);
}
sumInput();