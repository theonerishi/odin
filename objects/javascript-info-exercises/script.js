user = {
    name: "John",
    surname: "Smith",
}
user.name = "Pete";
user.name = undefined;
function isEmpty(obj) {
    let counter = 0;
    for (let key in obj) {
        counter++;
    }
    if (counter == 0) {
        return true;
    } else {
        return false;
    }
}
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
function sum(salaries) {
    let sum = 0;
    for (let name in salaries) {
        sum += salaries[name];
    }
    return sum;
}
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}
function multiplyNumeric(property) {
    for (let key in property) {
        if (typeof property[key] == 'number') {
            property[key] *= 2;
        }
    }
}