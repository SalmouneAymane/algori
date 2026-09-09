
// Method 1 check max or min in an array then remove it from the original array and push it to a new sorted .

function Max(arr) {
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
return max;
}

function sortMax(unsorted){
    let sorted = [];
    let maxV = unsorted[0];
    while (unsorted.length()>0){
        maxV =Max(unsorted);
        sorted.push(maxV);
    }

}