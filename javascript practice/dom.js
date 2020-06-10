// examine the document object

//console.dir(document);
document.title = 'itme lister';
console.log(document.forms);

// var header = document.getElementById('header');
// header.textContent = 'hello world'
// header.innerHTML = "<h1>hello world</h1>"

//header.style.borderBottom = "3px solid #350350"

// get elements by class name//

// var items = document.getElementsByClassName('list');
// for(var i = 0; i<items.length; i++){
//     items[i].textContent = 'item ' + [i];
// }

// for(var i=0; i<items.length; i++){
//     items[i].style.backgroundColor = "#ccc"
// }

//Querryselector hits a single item

var select = document.querySelector("input");
//select.value = "hello world";

// var submit = document.querySelector("input[type='submit']");
// submit.style.border = "2px solid #ccc"

// to hit last child

// var last = document.querySelector("li:last-child");
// last.textContent = "item not available"

//hitting to the child of your choice

// var child2 = document.querySelector(".list:nth-child(2)");
// child2.style.color = "blue"

//QuerrySelectorAll//


// var odd = document.querySelectorAll('.list:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');


// for (var i = 0; i < odd.list; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.color = 'red';

// }

//parent node selector//
//parentNode and parentElement are interChangable and can be used at the replacement of eachother

// var access = document.querySelector('.ul');
// console.log(access.parentNode.parentNode);

//childNodes

// console.log(access.childNodes)
// console.log(access.children)

// access.children[1].style.backgroundColor = 'yellow';
// access.childNodes[3].style.color = 'green';

//accessing first element

//access.firstElementChild.textContent = 'hello world'

//last elelemt accessing

//access.lastElementChild.textContent = 'hello world';

//next sibling

// access.nextSibling.style.backgroundColor = 'blue';
// access.nextElementSibling.textContent= 'blue';


//previousSibling

//access.previousElementSibling.textContent = "ingredients";
//access.previousElementSibling.previousElementSibling.previousElementSibling.textContent = "ingredients";


//creating element

var newElement = document.createElement('div');
newElement.className ='new'

//creating text inside it

//var newText = document.createTextNode("hello world");

//appending the child

//newElement.appendChild(newText)
//console.log(newElement)

//inserting before and after elements

var newDiv = document.querySelector('header');
var head = document.querySelector('h1')

newDiv.insertBefore(newElement, head)

// event listner and functions

// e is known as event paramenter
function buttonClick(e){
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.id)
    // console.log(e.target.className)
    // var out = document.getElementById('put').innerHTML = "<h3>" + e.target.id + "</h3>";
    // console.log(e.offsetX);
    //console.log(e.altKey)
    console.log(e.ctrlKey)
    console.log(e.shiftKey)

}

//var button = document.getElementById('button').addEventListener('click', buttonClick)

{// console.log("welcome");
    // document.getElementById('header').textContent = "changed on click";
    // document.querySelector('.container').style.backgroundColor = '#ccc'
}


var button = document.getElementById('button');
//button.addEventListener('click', runEvent)
//button.addEventListener('dblclick', runEvent)
//button.addEventListener('mousedown', runEvent)
//button.addEventListener('mouseup', runEvent)

// var box = document.getElementById('box');
box.addEventListener("mousemove", runEvent);

function runEvent(e){
    e.preventDefault();
    console.log("event type: "+e.type);
    //console.log(e.target.value)
    box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
    //document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
    //document.getElementById("put").innerHTML = "<h3>"+e.target.value+"</h3>";
    //document.body.style.backgroundColor = "#ccc";
}

// box.addEventListener("mouseleave", runEvent)
// box.addEventListener("mouseover", runEvent)
// box.addEventListener("mouseout", runEvent)
// box.addEventListener("mouseenter", runEvent)


var itemsInput = document.querySelector("input[type = 'text']");
var form = document.querySelector('#form');
//itemsInput.addEventListener("keydown", runEvent)
// itemsInput.addEventListener("focus", runEvent)
// itemsInput.addEventListener("blur", runEvent)
//itemsInput.addEventListener('cut', runEvent)
//itemsInput.addEventListener('input', runEvent)


//EVENT SELECTOR//

//var select = document.querySelector('select');
//select.addEventListener('change', runEvent)
form.addEventListener('submit', runEvent);

