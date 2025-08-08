function getMaxSubSum(arr) {
    let max = -10000;
    let sum = 0;
    for (let k = arr.length; k >= 0; k--) {
        for (let i = 0; i < k; i++) {
            for (let j = i; j < k; j++) {
                console.log(`arr[j] is ${arr[j]}`)
                sum += arr[j];
            }
            console.log(`sum is ${sum}`);
            console.log(`max is ${max}`);
            if (sum > max) {
                console.log(`sum is greater than max`);
                max = sum;
            }
            sum = 0;
        }
    }
    alert(max);
}
getMaxSubSum([-1, 2, 3, -9]);