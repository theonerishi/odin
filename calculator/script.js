let str = '3 + 1';

function calculate(str) {
    let arr = str.split('');
    let x = '';
    let n1 = 0;
    let n2 = 0;
    let n1found = false;
    let operatorCode = '';
    for(let i = 0; i < arr.length; i++) {
        x = arr[i];
        console.log(x);
        if(x >= 0 && x <= 9){
            x = Number(x);
        }
        console.log(typeof(x));
        if(typeof(x) == 'number' && x <= 9 && x >= 0 && x) {
            console.log('entered');
            console.log(n1found);
            if(!n1found) {
                n1 = x;
                console.log(`set n1 to ${n1}`);
                n1found = true;
            } else {
                n2 = x;
                console.log(`set n2 to ${n2}`);
            }
        }
        if(x == '+') {
            operatorCode = '+';
            console.log(`operatorCode is now +`);
        }
        if(x == '-') {
            operatorCode = '-';
            console.log(`operatorCode is now -`);
        }
    }
    if(operatorCode == '+') {
        return n1 + n2;
    }
    if(operatorCode == '-') {
        return n1 - n2;
    }   
}
console.log(calculate(str));
str = '5 - 2';
console.log(calculate(str));