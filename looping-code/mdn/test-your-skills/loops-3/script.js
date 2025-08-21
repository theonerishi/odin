
let i = 500;
const para = document.createElement("p");
const section = document.querySelector("section");
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
// Don't edit the code above here!

// Add your code here
while (i > 2) {
    if (isPrime(i)) {
        para.innerHTML += i + "<br>"; // for each number up to n find if prime and if prime add to list
    }
    i--;
}
// Don't edit the code below here!

section.appendChild(para);
