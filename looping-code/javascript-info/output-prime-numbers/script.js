// displays what numbers are prime up to a certain number
let n;
do {
    n = Number(prompt("enter a number"));
} while (n < 2); // cast to number and ask until a number greater than 1 is entered
let p = document.querySelector('p');
for (let j = 2; j < n; j++){ // check whether every number up to n is prime
    let isPrime = true;
    for (let i = 2; i < j; i++) { // go through each number up to that number to see if divisible
        if (j % i == 0) {
            p.innerHTML += `${j} is not a prime number<br>`;
            isPrime = false;
            break; // j is divisible by a number not prime
        }
    }
    if(isPrime) {
        p.innerHTML += `${j} is prime<br>`; // if if statement not entered then the number is prime
    }
}