const laMammaCompreraUnTelefono
   = new Promise(
    (resolve, reject) => {
           //const mammaContenta = Math.random() > 0.5 ? true : false;  
           const mammaContenta = true;
           if(mammaContenta == true){
                const telefono = { marchio: 'Apple', modello: 'iPhone 12', colore: 'Rosso'};
                resolve(telefono);
           } else {
               const motivo = new Error('La mamma non è contenta');
               reject(motivo);  
           }
});
const mostraTelefonoAgliAmici = (telefono) => {
    return new Promise(
        (resolve, reject) => {
            telefono = null;
            if(telefono) {
                const messaggio = 'Ciao, Raga! Guardate il mio nuovo telefono: ' + telefono.marchio + ' ' + telefono.modello + ' ' + telefono.colore;
                resolve(messaggio);
            } else {
                const motivo = 'Non ho un telefono da mostrare';
                reject(motivo);
            }
        }
    );
};
const chiedoAMamma = () => {
    laMammaCompreraUnTelefono
    .then( mostraTelefonoAgliAmici)
    .then( messaggio => console.log(messaggio))
    .catch( motivo => console.log('Telefono non comprato: ', motivo.message));  
 };
 setTimeout( () => chiedoAMamma() ,3000);
