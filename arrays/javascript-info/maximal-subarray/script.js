function getMaxSubSum(arr) {
    let max = -10000;
    let sum = 0;
    for (let k = arr.length; k >= 0; k--) { // iterates from the length of the array to 0 to find the maximal subarray
        for (let i = 0; i < k; i++) { // starts from 0 to k 
            for (let j = i; j < k; j++) { // adds values from i to k
                console.log(`arr[j] is ${arr[j]}`)
                sum += arr[j]; 
            }
            console.log(`sum is ${sum}`);
            console.log(`max is ${max}`);
            if (sum > max) { // if sum is greater than max then set it to the max value
                console.log(`sum is greater than max`);
                max = sum; 
            }
            sum = 0;
        }
    }
    alert(max);
}
getMaxSubSum([-1, 2, 3, -9]);