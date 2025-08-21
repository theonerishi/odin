let arr = ['a', 'b'];
arr.push(function() {
    alert(this);
})

arr[2](); // can push function to the array