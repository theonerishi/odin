let n;
do {
    n = Number(prompt("enter a number"));
} while (n < 2);
let p = document.querySelector('p');
for (let j = 2; j < n; j++){
    let isPrime = true;
    for (let i = 2; i < j; i++) {
        if (j % i == 0) {
            p.innerHTML += `${j} is not a prime number<br>`;
            isPrime = false;
            break;
        }
    }
    if(isPrime) {
        p.innerHTML += `${j} is prime<br>`;
    }
}