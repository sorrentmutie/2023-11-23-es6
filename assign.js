
const person = {
    address: { city: 'Kathmandu' },
    orders: [ { id: 1 }, { id: 2 } ],
    name: 'John',
    age: 32,
    customers: [ { id: 1 }, { id: 2 }]
};

person.x = 3;

const { address, orders} = person;
console.log(address);   

// Object.assign
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);
console.log(returnedTarget);

function creaMappa(options){
    const opzioniDefault = {
        width: 100,
        height: 100,
        title: 'Mappa',
        coordinates: {
            x: 0,
            y: 0
        }
    };
    // Object.keys(opzioniDefault).forEach(key => {
    //  if(!(key in options)){
    //      options[key] = opzioniDefault[key];
    //  }
    // });
    options = Object.assign(options, opzioniDefault);

    // disegno mappa
}


creaMappa({ width: 200, title: 'Mappa di Roma' });

function creaAstronaveBase() {
    return {
      volo: () => console.log('volo'),
      spara: () => console.log('spara'),
      distruggi: () => console.log('distruggi')
    };
}

function creaAstronaveComplessa(){
    const astronave = creaAstronaveBase();
    Object.assign(astronave, {
        atterra: () => console.log('atterra'),
    } );
    return astronave;
}

