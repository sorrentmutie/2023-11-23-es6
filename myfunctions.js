function myrandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mymax(a, b){
    return a > b ? a : b;
}

const PI = Math.PI;

export {
    myrandom, mymax, PI
};