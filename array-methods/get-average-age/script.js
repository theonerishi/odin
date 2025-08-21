let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(arr) {
    let sum = arr.reduce((sum, user) => sum + user.age, 0); // adds current value to the total that starts at zero
    return sum / arr.length; // divide total by number of items in array
}

console.log(getAverageAge(arr));
