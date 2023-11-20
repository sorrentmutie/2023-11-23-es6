import { myrandom} from './myfunctions.js';

export function drawSomething(id, min, max){
    const numero = myrandom(min, max);
    const div = document.getElementById(id);
    div.innerText = numero;
    
}
