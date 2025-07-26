const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");
admitted.innerHTML = "Admit: <br>";
refused.innerHTML = "Refuse: <br>";

// loop starts here
for (person of people) {
    if (person == 'Lola' || person == 'Phil') {
        refused.innerText += person + '\n';
    } else {
        admitted.innerText += person + '\n';
    }
}
// refused.textContent += ...;
// admitted.textContent += ...;
