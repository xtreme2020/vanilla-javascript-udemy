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
//Tipos de datos en javascript primitivos 
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

  // let val;
  // //Number to string
  // val=String(5);
  // val =String(5+5);
  // // Bool to string
  // val = String(true);
  // //Date to string
  // val =String(new Date());
  // //Array to string
  // val=String([1,2,3,4,5]);


  // //toString()
  // val = (5).toString();
  // val=(true).toString();

  // //String to number
  // val =Number('5');
  // val=Number(true);
  // val=Number(false);
  // val = Number(null);
  // val=Number('helo');
  // val=Number([1,2,3,4,5]);

  // val=parseInt('100.30');
  // val=parseFloat('100.30');
  // //output
  // console.log(val);
  // console.log(typeof val);
  // console.log(val.length);
  // console.log(val.toFixed(2));

  // const val1=5;
  // const val2=6;
  // const sum=val1+val2;

  // console.log(sum);
  // console.log(typeof sum);

  // //Simple maths operators
  // const num1 = 100;
  // const num2 = 50;
  // let val;

  // val = num1 + num2;
  // val =num1 - num2;
  // console.log(val);


  // //math objects
  // val = Math.PI;
  // val = Math.E;
  // val =Math.round(2.4);
  // val = Math.ceil(2.4);  //Round Up
  // val = Math.floor(2.8); // Round Down
  // val = Math.sqrt(64);
  // val = Math.abs(-3);// Numero absoluto
  // val = Math.pow(8,2); //Elevar un numero
  // val= Math.min(2,5,6,9,7); //Va buscar el minimo
  // val= Math.max(2,5,6,9,7);//va buscar el maximo
  // val = Math.random();

  // val =Math.floor(Math.random() * 20 + 1) ; // Un numero aletorio entero entre 1 y 20

//string Operations

const firstNames = 'Crishaws';
const lastNames='Stock';

//Concatenation
let valor;
valor = firstNames + lastNames;
valor = firstNames + ' ' + lastNames;

//Append
valor= 'Jake';
valor+='Cookies';

valor='Hello, my name is '+ firstNames + ' and I am ' + age;


//Escaping 

valor='that\'s awesome, i can\'t wait';


//Concat
valor=firstNames.concat(' ',lastNames);

//change Case

valor=firstNames.toUpperCase();
valor=lastNames.toLowerCase();

valor = firstNames[2]; // toma el indice 2 de ese string(extrae)

//indexOf() sino aparece el caracter envia -1
valor=firstNames.indexOf('i');
valor=firstNames.lastIndexOf('i');


//charAt()

valor=firstNames.charAt('4');
valor=firstNames.charAt(firstNames.length -1);

//Substring
valor=firstNames.substring(0,4);

//slice() igual que substring, pero adicional puede usarse en arreglos y adicional se pueden usar numeros negativos para sustraer
valor=firstNames.slice(0,4);
valor=firstNames.slice(-3);

//split
let cadena = 'Esto es una lista de cadena';
valor=cadena.split(' ');
let tags='web devoleopment, ccss ,jquery';
valor=tags.split(',');

//replace 
valor=cadena.replace('Esto','Good');

//includes  retorna falso o verdadero si existe un valor en la cadena de string

valor=cadena.includes('lista');
console.log('valor :', valor);

//ES6 Javascript

const namesi = 'John';
const ages = 30;
const job = 'Web Developer';
const city = 'Miami';
let html;
//Without template strings/literal (es5)

html='<ul><li>Name: '+ namesi + '</li><li>Age: ' + ages + '</li><li>Job : ' + job + ' </li><li>City: '+ city +'</li></ul>';

html='<ul>'+
     '<li>Name: ' + namesi + '</li>' +
     '<li>Age: ' + ages + '</li>' +
     '<li>Job: ' + job + '</li>' +
     '<li>City: ' + city + '</li>' +
      '</ul>';

  function hello(){
    return ' hello';
  }



//With Template strings/Literal
html=`<ul>
       <li>Name:${namesi}</li>
       <li>Age:${ages}</li>
       <li>Job:${job}</li>
       <li>City:${city}</li>
       <li>${2+2}</li>
       <li>${hello()}</li>
       <li>${ages > 29 ? 'you are older': ' you are young'}</li>
       </ul>
`;

document.body.innerHTML=html;


//Array

const numberss = [43,33,33,23,44,36,5];
const numbers2 = new Array(43,33,33,23,44,36,5);
const fruit  = ['Apple','banna','Orange','Pear'];
const mixed = [22,'hello',true,undefined,null,{a:1,b:1},new Date()];
//Array can have multiples types
console.log(mixed);

let variabl;


//Get array lenth
variabl = numberss.length;
//Check if is array
variabl = Array.isArray(numberss);
//Get single value
variabl=numberss[0];
//Assigning to specific position
//numberss[2]=100;

finl=numberss.indexOf(44); // Encontrar un elemento en un indice

//Mutating arrays
//Add on to end
// numberss.push(500);
// //Addd on to Front
// numberss.unshift(33);
// //Take off from end
// numberss.pop();
// //Take off from front
// numberss.shift();
// //Splice values
// numberss.splice(1,3);//Permite remover valores de una posición especifica primer numero indica donde comienza y segundo donde finaliza

//Reverse de array
//numberss.reverse();
let val3
variabl=numberss.sort();
val3=numbers2.sort();

// Use compare function
//Order number Asc
variabl=numberss.sort(function(x,y){
     return x - y;
});

//Order number desc
val3=numbers2.sort(function(x,y){
  return y - x;
});


//Find
 function under50(num){
     return num < 50;

}

val3=numberss.find(under50);

//Concatenar arrays
//variabl = numberss.concat(numbers2);
console.log(numberss);
console.log(val3);
console.log(variabl);

//Object Literals

const persones = {
   firstNamess: 'Steve',
   lastName: 'Smith',
   age: 30,
   email: 'steve@aol.com',
   hobbies:['Music','Sports'],
   address:{
      city: 'Miami',
      state: 'FL'

   },
   getBirthYear: function(){
     return 2018 - this.age;
   }
    
}

let val4;
//Get specific value
 val4 = persones.firstNamess;
 val4= persones['lastname'];
 val4=persones.age;
 val4=persones.hobbies[0];
 val4=persones.address.state;
 val4=persones.address['city'];
 val4=persones.getBirthYear(); 


console.log(val4);

// array of objects
const people = [

     {name: 'John', age:30},
     {name: 'Mike', age:23},
     {name: 'Nanc', age:23},
];

 for (let i=0;i<people.length; i++){
   console.log(people[i].name);

 }


//Dates and times

let valores;

const todays = new Date();
let Birthday = new Date('9-10-1981 11:25:00');
Birthday = new Date('September 10 1984');
Birthday = new Date('8/29/84');
valores=Birthday;

valores = todays.getDay(); // Numero de día de la semana
valores = todays.getMonth()+1;
valores = todays.getDate();// Fecha día del mes 
valores= todays.getFullYear();
valores = todays.getHours();
valores = todays.getMinutes();
valores = todays.getSeconds();
valores = todays.getMilliseconds();
valores = todays.getTime();// El total de tiempo desde enero 1970 hasta la fecha en segundos.

Birthday.setMonth(2);
Birthday.setDate(12);
Birthday.setFullYear(1985);
Birthday.setHours(18);
Birthday.setMinutes(30);
Birthday.setSeconds(25);
console.log(Birthday);

// if stament and conditional operators

const id=100;
// Equal to
//  if (id==100) {
//    console.log("correct");
//  } else{
//      console.log("INcorrect");

//  }

//  //Not equal
//  if (id!=100) {
//   console.log("correct");
// } else{
//     console.log("INcorrect");

// }

// //EQUAL TO VALUE & TYPE
// if (id===100) {
//   console.log("correct");
// } else{
//     console.log("INcorrect");

// }

// // NOT EQUAL TO VALUE & TYPE
// if (id!==100) {
//   console.log("correct");
// } else{
//     console.log("INcorrect");

// }
//Revisar si un objeto existe o variable

if (typeof id !=='undefined') {
  console.log(`The id is ${id}`);

} else {

  console.log(`The id is not Here`);
}

//Greater or Less Than
if (id >= 100) {
    console.log("correct");
  } else{
      console.log("INcorrect");
  }

  //if else

  const color='red'
  if (color==='red'){
        console.log('Color is red');

  } else if (color==='blue') {
    console.log('Color is blue');
  } else {
     console.log('Color doesnt exist');
  }


  //Logical operators
const nombres='Crish';
const edad=20;
// And &&
 if(nombres==='Jose' && age >=21)
 {
    console.log(`${nombres} is a child`);

 } else if(age>=13 && age<=19){
      
  console.log(`${nombres} is a Teenager`);
 } else {

  console.log(`${nombres} is a Adult`);
 }

 //OR ||

  if(age < 16 || age > 65)
  {
    console.log(`You cannot run this race ${nombres}`);
  }else{

    console.log(`You can run this race ${nombres}`);
  }

//TERNARY OPERATOR

console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// IF WITHOUT BRACES WORKS BUT IT'S NOT RECOMMENDED

 if (id===100)
  console.log('CORRECT');
  else
  console.log('INCORRECT');

  //SWITCH
  const colors =['red','black','gray','blue','pink'];
  let alea=Math.floor(Math.random() * 5 + 1);
  switch (colors[alea-1]) {
    case 'red':
         console.log('You win red');
      break;
      case 'blue':
         console.log('You win blue');
      break;
      case 'pink':
         console.log('You win pink');
      break;
    default:
            console.log('You lose');
      break;
  }

  switch (new Date().getDay()) {
    case 0:console.log('Sunday');
    break;
      
    case 1:console.log('Monday');
    break;
    
    case 2:console.log('Tuesday');
    break;
    
    case 3:console.log('Wednesday');
    break;
    
    case 4:console.log('Thursday');
    break;
    
    case 5:console.log('Friday');
    break;
    
    case 6:console.log('Satuday');
    break;
      break;
    default:
      break;
  }

  //Functions and declaration

  function greet(FirstNami='No names',Lastnami='No names'){
    //console.log('hello');
    //Set default value case parameter is empty ES5 Way
    // if(typeof FirstNami==='undefined')
    // {FirstNami="No names"}
    // if(typeof LastNami==='undefined')
    // {LastNami="No names"}
    //ES6 default values are defined directly like above
    
    return `Hola ${FirstNami} ${Lastnami} Bienvenido,`;
  }
  console.log(greet());

  //FUNCTIONS EXPRESSIONS

  //ANONIMOUS FUNCTION

  const square = function(x=2){
    return x*x;

  }

  console.log(square(9));

  //IMMEDIATLEY INVOKABLE FUNCTIONS EXPRESSION
  //ITS A FUNCTIONS THAT YOU DECLARE AND RUN AT THE SAME TIME

  (function(){
       console.log('IIFE Ran..');

  })();
(function(name){
   console.log(`Hola ${name}`);

})('Stick');

//PROPERTY METHODS
//WHEN A FUNCTION IS PUT INSIDE OF AN OBJECT IS A METHODS
const todo ={
      add: function(){
           console.log('Add todo..');
      },
      edit: function(id){
         console.log(`Edit todo ${id}`);
      }

}

todo.delete= function(){
      console.log('YOu are in delete');

}

todo.add();
todo.edit(22);
todo.delete();
console.log(window.location.href);

// for loop

for (let i = 0; i < 10; i++) {
      
      if (i===2) {
        console.log('2 is my favorite number');
        continue; //means continue to next iterarion
      }

      if (i===5) {

        console.log('Stop the loop');
        break; //Stop loop
        
      }
      console.log(i);
}

//while loop

let e = 0;

while(e < 10){
    console.log('Number '+ e);
    e++;
}

//Do while
do {
      console.log('Number '+ e);

}while (e < 10 );


const cars = ['Ford','Chevý','Honda','Toyota'];

for (let id = 0; id < cars.length; id++) {
  const element = cars[id];
  console.log(element); 
}

//Foreach are recomended for arrays
cars.forEach(function(car){
     console.log(car);
});


cars.forEach(function(car,index,array){
  console.log(`${index}: ${car}`);
  console.log(array);
});
const users =[
     {id:1,name:'John'},
     {id:2,name:'Crish'},
     {id:3,name:'Sarah'},
];

const ids = users.map(function(user){
      return user.id +' '+user.name;;
});

console.log(ids);

const user={
     firstName: 'John',
     lastName: 'Doe',
     age: 40
}

for(let x in user){
    console.log(`${x} : ${user[x]}`);

}

// Window Objects / methods properties

//alert('hello');

//prompt  take an input
//const input= prompt();
//alert(input);


//Confirm 
// if (confirm('Are you Sure')){
//      console.log('Yes');
// } else
//  {

//      console.log('No')
//  }

let pantalla;

//Outter height and width

pantalla=window.outerHeight;
pantalla=window.outerWidth;

//Inner height  and width

pantalla=window.innerHeight;
pantalla=window.innerWidth;

//Scroll points
pantalla=window.scrollY;
pantall=window.scrollX;

//Location objects
pantalla=window.location; //muestra un arreglo con todos los metodos que tiene
pantalla=window.location.hostname;
pantalla=window.location.port;
pantalla=window.location.href;
pantalla=window.location.search;//devuelve query string completo

//Redirect
//window.location.href='https://google.com';
//Reload
//window.location.reload();


//History Object

//window.history.go(-1);

//Navigator Object show how many url history has
pantalla= window.history.length;

pantalla= window.navigator.appName;
pantalla=window.navigator.appVersion;//Version de navegadores y generation
pantalla=window.navigator.userAgent;//Version de navegadores y generation
pantalla=window.navigator.platform;//Version de sistema operativo para windows Win32, para Mac Darwing
pantalla=window.navigator.vendor;// Creador del navegador que usa el usuario

pantalla=window.navigator.language;//Idioma del navegador



console.log(pantalla);

//Scope

//Global scope

var   a=1;
let   b=2;
const c=3;



function tester() {
  var a = 4;
  let b =5;
  const c =6;
  console.log('Function scope:',a,b,c);
}

tester();


//Block scope

//  if(true){

//   var   a=8;//En este caso cambia el scope global let an const permanencen iguales
// let   b=9;
// const c=10;
// console.log('if scope:',a,b,c);
//  }

for (var a = 0; a < 10; a++) {
  console.log(`Loop:${a}`);
  
}

//let and const have a block level scope and var a function scope
console.log('Global scope:',a,b,c);


//DOM Document Object Model
//Tree of nodes / Elements created by the browser
//Javascript can be used to read /write / Manipulate to the DOM
//Object Oriented Representation

//Document Object





