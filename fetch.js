// fetch('https://randomuser.me/api?results=20')
//  .then( response => response.json())
//  .then( data => {
//     const {results} = data;
//     const female = results.filter(persona => persona.gender === 'female');
//    // console.log(female);
//     const selected= female.map( persona => new Person(persona.email, persona.picture.large));
//     // console.log(selected);
//     disegnaPersone(selected);
    
//     // const firstMale = results.find(x => x.gender === "male");
//     // console.log(firstMale);
//  }) 
//  .catch( errore => console.log("sono in gestione errore" + errore.message));


(async () => {
   // await caricaDati();
   let sequenza = sequenzaAsincrona(1, 10);
   for await (let i of sequenza) {
       console.log(i);
   }
})();






function disegnaPersone(persone) {
    const div = document.getElementById('contenuto');
    persone.forEach(persona => {
        const img = document.createElement('img');
        img.src = persona.pictureUrl;
        const p = document.createElement('p');
        p.innerText = persona.email;
        div.appendChild(p);
        div.appendChild(img);
        console.log(persona.email);
    });
}


function* miaFunzione(i) {
   yield i;
   yield i + 10;
   yield i + 100;
}


async function* sequenzaAsincrona(inizio, fine) {
    for (let i = inizio; i <= fine; i++) {
        yield new Promise( (resolve, reject)=> {
            setTimeout( () => resolve(i), 1000);
        });
    }
}


async function caricaDati(){
   
   const response = await fetch('https://randomuser.me/api?results=20');
   const data = await response.json();
   const {results} = data;
   const female = results.filter(persona => persona.gender === 'female');  
   const selected= female.map( persona => new Person(persona.email, persona.picture.large));
   disegnaPersone(selected);
}





class Person {
    constructor(email, pictureUrl){
        this.email = email;
        this.pictureUrl = pictureUrl;
    }
}

