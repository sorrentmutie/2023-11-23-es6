// ...
// Copia degli array

const array = [1, 2, 3, 4, 5];
const copia = [...array];
const array2= [5, 6, 7, 8, 9];
const concat= [...array, ...array2]; 
console.log(concat);   

function doSomething(x,y,z){
    console.log(x,y,z);
}   
const args = [0,1,2];

doSomething(...args);

const obj = { a: 1, b: 2, c: 3, d: { e: 1, f: 2, g: { x: 2, y: 4 }} };
const copy = { ...obj };
obj.a = 100;
console.log(obj);
console.log(copy);

const obj2 = {
    k: 1
};

const merge = { ...obj, ...obj2 };
