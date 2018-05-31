let val;

val = document;
val = document.all;// Send an array with the page properties
val = document.all[2];
val = document.all.length;// Cuenta todos los elementos de la pagina
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];//Puedo obtener los formularios de la pagina

val = document.forms[0].id; //Obtener el id del formulario
val = document.forms[0].method;
val = document.forms[0].action;//Url donde se dirije

val = document.links; // todos los links de la pagina
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

 val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');//obtiene el atributo de con el indice de script indicado

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
   console.log(script.getAttribute('src'));
 });

console.log(val,scripts);

const taskTitle=document.getElementById('task-title');
//Get things  from the elements
console.log(taskTitle.id);
console.log(taskTitle.className);


//Change Styling
taskTitle.style.background='#333';
taskTitle.style.color='#fff';
taskTitle.style.padding='#333';

//Change Content

//taskTitle.textContent='Tareas';
//taskTitle.innerText='Tareas nuevas'; // lo mismo que el anterior


//taskTitle.innerHTML='<span style="color:red">Tareas nuevas</span>';// para insertar html usamos esta propiedad


//document.querySelector single element selector even if there are many only gonna takes the first one

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color='red';
document.querySelector('ul li').style.color='blue'; // nested clasess

//css pseudo class
document.querySelector('li:last-child').style.color='red';
document.querySelector('li:nth-child(3)').style.color='red';
//document.querySelector('li:nth-child(3)').textContent='red';
//document.querySelector('li:nth-child(odd)').textContent='red';
document.querySelector(".btn").setAttribute("href","#");
document.querySelector(".button")
let current =window.location.href;


const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);

items[0].style.color='red';
//items[3].textContent='Hello';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems);


//document.getElementByTagName

let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);

lis[0].style.color='red';
//lis[3].textContent='Hello';


//Convert html collection into array

// lis=Array.from(lis);

// lis.reverse();

// lis.forEach(function(li,index) 
//  {
      
//    console.log(li.className);
//    li.textContent=`${index}: Hello`;

//   }
// );

console.log(lis);

//document.querySelectorAll  return a node list so i dont have to convert it to array

const itemss= document.querySelectorAll('ul.collection li.collection-item');

itemss.forEach(function(item,index){
    
      // item.textContent=`${index}: hello`;
     
});

const liOdd= document.querySelectorAll('li:nth-child(odd)');
const liEven=document.querySelectorAll('li:nth-child(even)');

 liOdd.forEach(function(li){
   li.style.background="#ccc"

 });


 for (let i = 0; i < liEven.length; i++) { 
     
       liEven[i].style.background="#f4f4f4";

   
 }

 let valor;

 const list = document.querySelector('ul.collection');
 const listItem= document.querySelector('li.collection-item:first-child');

 valor = listItem;

 valor= list;

//Get child nodes
// <br> are count as text node too
valor = list.childNodes;
valor=list.childNodes[0].nodeName;
valor=list.childNodes[0].nodeType;

//Node types

// 1-Element
// 2-Attribute (Deprecated)
// 3-TextNode
// 8-Comment
// 9-Document itself
// 10- Doctype


//Get children element nodes

 valor=list.children;
 valor= list.children[1];
 //list.children[1].textContent='Good';

 //children of children
 valor=list.children[3].children[0];
 //first child
 valor=list.firstChild;
 valor=list.firstElementChild;

 //last child
 valor=list.lastChild;
 valor=list.lastElementChild;

//Count child elements
 valor=list.childElementCount;

 //get parent node

 valor=listItem.parentNode;
 valor=listItem.parentElement;
 valor=listItem.parentElement.parentElement;
//Traversing node
 //Get next sibling
valor =listItem.nextSibling;
valor=listItem.nextElementSibling.previousElementSibling;

//Get prev sibling
//valor =listItem.previousSibling;
//valor=listItem.previousElementSibling;
 console.log(valor);

 //Create element to DOM

 const li= document.createElement('li');

 //Add class
 li.className='collection-item';
 //Add id
 li.id='new-item';
 //add attribute
 li.setAttribute("title","New Item");

 //create text node and append
 li.appendChild(document.createTextNode('Hello World'));


 //Create new link element
const link = document.createElement('a');

//Add classes
link.className='delete-item secondary-content';

//Add icon html
link.innerHTML='<i class="fa fa-remove"></li>';

//append link into li
li.appendChild(link);

 //Append li as child to ul
 document.querySelector('ul.collection').appendChild(li);

 console.log(li);


//Removing and replacing dom elements

//REPLACE ELEMENT

//create element

const newHeading= document.createElement('h2');
//Add id
newHeading.id='task-title';
//New text node
newHeading.appendChild(document.createTextNode('Task List'));

//Get the old heading

const oldHeading = document.getElementById("task-title");

//Parent
const cardAction = document.querySelector('.card-action');
console.log(cardAction);
//Replace
cardAction.replaceChild(newHeading,oldHeading);

//Remove element

const listi = document.querySelectorAll('li');
const lista = document.querySelector('ul');

listi[0].remove();

///Remove child
lista.removeChild(listi[3]);

//Classes & attr
const firstLi = document.querySelector('li:first-child');

const links =firstLi.children[0];

console.log(firstLi.children[0]);

let valclass;

valclass=links.className;
valclass=links.classList;
valclass = links.classList[0];
links.classList.add('test');
links.classList.remove('test');
valclass=link;
//attribute
valclass=links.getAttribute('href');
valclass=links.setAttribute("href","https://google.com.do");
valclass=links.hasAttribute('title');
links.removeAttribute('href');
console.log(valclass);

//Event listener

// document.querySelector('.clear-tasks').addEventListener('click',function(e){
//        console.log('Are you there ?');
//        e.preventDefault();
// });

//Name function

document.querySelector('.clear-tasks').addEventListener('click',onClick);

function onClick(e) {
     let val;
     val = e.target;
     val=e.target.id;
     val=e.target.className;
     val=e.target.classList;
     e.target.innerHTML='Hello';
     console.log(val);
     e.preventDefault();
}
