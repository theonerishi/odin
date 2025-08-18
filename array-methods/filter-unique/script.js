function unique(arr) {
  return arr.filter((item, index, self) => self.indexOf(item) == index);
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings));