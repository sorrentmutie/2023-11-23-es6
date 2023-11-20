function somma(a,b){
    console.log(a);
    console.log(b);
    if(b){
        return a*b;
    } else {
        return 0;
    }
}

console.log('A');

setTimeout(function(){
    console.log('B');
}, 0);

var t0 = new Date();
while(
    (new Date() - t0) < 3000){
}

console.log('C');

