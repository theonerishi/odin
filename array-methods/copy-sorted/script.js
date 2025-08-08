let arr = ['HTML', 'CSS', 'JAVASCRIPT'];

function copySorted(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr2.push(arr[i]);
    }
    arr2.sort();
    return arr2;
}

console.log(arr);
console.log(copySorted(arr));