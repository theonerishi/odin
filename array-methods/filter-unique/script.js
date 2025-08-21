function unique(arr) {
  return arr.filter((item, index, self) => self.indexOf(item) == index); // indexOf will return the index for the first match that is then accepted into the new array
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings));