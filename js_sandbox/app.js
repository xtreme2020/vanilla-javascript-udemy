/*console.log('Hello World');
console.log(123);
console.log(true);
var greeting='Hello World';
console.log(greeting);
console.log([1,1,4,23,3]);
console.log({a:1,b:2});
console.table({a:1,b:2});
console.error('This is an error');
console.clear();
//Para verificar que tanto dura la ejecución de un script
//puedo Utilizar console.time('') console.timeEnd('')
//Ej
console.time('Inició');
  console.log([1,1,4,23,3]);
  console.log([1,1,4,23,3]);
  console.log([1,1,4,23,3]);
  console.log([1,1,4,23,3]);
  console.log([1,1,4,23,3]);
console.timeEnd('Inició');
*/
// var name = 'John Doe';
// console.log(name);

// //init var
// var greeting;
// console.log(greeting);
// greeting = 'Hoela';
// console.log(greeting);

// // Las variables pueden tener letras,numeros, _,$
// //No pueden iniciar con numeros

// //Multi word Variables
// var firstName = 'Juan'; //Camel case Para variables en General
// var first_name= ' Sarah' //Underscore
// var FirstName = 'Tom' // Pascal Case (Se recomienda para funciones, metodos)
// var firstname; // no recomendable

//Para comentar todo, seleccionar y presionar CTRL+/

//Let  permite inicializar una variable

let name
 name = 'John Doe';
console.log(name);
 name = 'John Doty';
console.log(name);

 
const names = 'John Doe';
console.log(names);
//cant not reassign
//  name = 'John Doty';
// console.log(name);

const person = {
    name: 'Patrick',
    age:26

}
//Con const podemos cambiar la estructura interna del objeto no el objeto en sí

person.name='Creator';
person.age=25;
console.log(person);
const numbers=[1,2,3,3,4];
numbers.push(6);  //push agrega elementos a un arreglo
console.log(numbers);
//Tipos de datos en javascript primarios 
/*
String
Number
Boolean
null
undefined
Symbols (ES6)
*/

/* Tipos de datos referenciales / Objectos
Array
Object Literals
Functions
Dates
Anything else*/

// Tipos de Datos primarios

//String
const name1 = 'Bill Koskit';
//number
const age = 45;
//Boolean
const hasKids = true;
//Null
const car = null;
// Undefined
let test;
// Symbol
const sym = Symbol();
console.log(typeof sym);

//Tipos Referenciales - Objetos

const hobbies= ['movies','music'];
const address= {
      city: 'Boston',
      state:'MA'

}
const today = new Date();
console.log(typeof today);
console.log(today);

let val;
//Number to string
val=String(5);
val =String(5+5);
// Bool to string
val = String(true);
//Date to string
val =String(new Date());
//Array to string
val=String([1,2,3,4,5]);


//toString()
val = (5).toString();
val=(true).toString();

//String to number
val =Number('5');
val=Number(true);
val=Number(false);
val = Number(null);
val=Number('helo');
val=Number([1,2,3,4,5]);

val=parseInt('100.30');
val=parseFloat('100.30');
//output
console.log(val);
console.log(typeof val);
console.log(val.length);
console.log(val.toFixed(2));

const val1=5;
const val2=6;
const sum=val1+val2;

console.log(sum);
console.log(typeof sum);