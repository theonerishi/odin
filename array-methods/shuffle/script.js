let arr = [1, 2, 3];

console.log(Math.random());

function shuffle(arr) {
    let arr2 = [];
    let rnd; 
    console.log(`arr.length is ${arr.length}`);
    let arrlength = arr.length;
    for(let i = 0; i < arrlength; i++) {
        console.log(`i is ${i}`);
        rnd = Math.floor(Math.random() * 2) + 1;
        console.log(rnd);
        if(rnd == 1) {
            console.log(`entered rnd == 1`);
            arr2.unshift(arr.pop());
            console.log(arr);
            console.log(arr2);
        } else {
            console.log(`entered else`);
            arr2.push(arr.pop());
            console.log(arr);
            console.log(arr2);
        }
    }
    return arr2;
}

console.log(shuffle(arr));