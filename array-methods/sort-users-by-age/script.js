let john = { name: "John", surname: "Smith", age: 25 };
let pete = { name: "Pete", surname: "Hunt", age: 30 };
let mary = { name: "Mary", surname: "Key", age: 28 };

let users = [john, pete, mary];

users.sort((a, b) => a.age - b.age); // ascending sort checks age property

console.log(users);