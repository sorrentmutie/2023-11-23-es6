const somma = function (a, b) {
    return a + b;
};

const sommaArrow = (a,b) => a+b; 


const x = () => console.log('ciao');

const z = sommaArrow(2, 3);
console.log(z);


function Person(){
   console.log(this);
   this.age =0;
//   const that = this;

   setInterval( () => {
      console.log(this);
      this.age++;
      console.log(this.age);
   }  ,1000);

}

const p = new Person();