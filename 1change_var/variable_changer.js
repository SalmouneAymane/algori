

function change(a,b) {
   let c = 0;
    c = a ;
    a = b;
    b=c;

    return [a,b];
}

console.log(change(5,3));
