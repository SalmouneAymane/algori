let arr = [4,7,4,2,7,7];
let reps = [];

for (let i = 0; i < arr.length; i++) {
    if (reps.includes(arr[i])){
    }
    else{
        for(let t = 1;t<arr.length;t++){
                if (arr[i] == arr[t] && i!==t){
                    reps.push(arr[i]);
                    break;
                }
            }
        }
    }
console.log(reps)


// function
function repetition(arr2){
    let reps2 =[];
    for (let i = 0; i < arr2.length; i++) {
    if (reps2.includes(arr2[i])){
    }
    else{
        for(let t = 1;t<arr2.length;t++){
                if (arr2[i] == arr2[t] && i!==t){
                    reps2.push(arr2[i]);
                    break;
                }
            }
        }
    }
    return reps2;
}
console.log(repetition(arr));