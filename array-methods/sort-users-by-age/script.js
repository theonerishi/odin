let john = { name: "John", surname: "Smith", age: 25 };
let pete = { name: "John", surname: "Hunt", age: 30 };
let mary = { name: "Mary", surname: "Key", age: 28 };

let users = [john, pete, mary];

users.sort((a, b) => a.age - b.age);

console.log(users);