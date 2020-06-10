//examine the documnet object

document.title = 'dom practice'

var header = document.getElementById('header');
//header.innerHTML = '<h1>Hello World</h1>'
//header.innerText = "<h1>Inner Text</h1>"      iiner text does not address any css property such as h1, and rest
//header.textContent = "<h1>hello world</h1>"      //text content also does not address any such thing


//get element by class name

 var items = document.getElementsByClassName('list');
// console.log(items)
// for(var i=0; i<items.length; i++){
//         items[i].textContent = 'items name'+ [i];
//         items[i].innerHTML = 'values: '+ [i]
// }


//to change background color

// for(var i=0; i<items.length; i++){
//     items[i].style.backgroundColor = "#9857" 
// }


//querrySelector 

// var input = document.querySelector('input');
// input.value = 'hello world'

// var submit = document.querySelector("input[type='submit']");
// submit.style.backgroundColor = 'black';
// submit.style.color = 'white';


//to hit last child

// var list = document.querySelector('li:nth-child(2)');
// list.textContent = "text not available";

// var child = document.querySelector('li:last-child');
// child.style.backgroundColor = "#ccc"


//QuerrySelectorAll

// var odd = document.querySelectorAll('.list:nth-child(odd)');
// var odd = document.querySelectorAll('.list:nth-child(odd)');

// for(var i=0; i < odd.list; i++){
//     list[i].style.backgroundColor = "yellow"
// }

//parent node selector//

// var access = document.querySelector("ul");
// console.log(access.parentNode.parentNode)

// var access = document.querySelector("ul");
// console.log(access.childNodes)
// console.log(access.children)
// access.children[1].textContent = "number"
// access.children[3].style.backgroundColor = "orange"


// //first element child

// access.firstElementChild.textContent = "black"
// access.lastElementChild.textContent = "purple"

// //accessing next sibling
// var hit = document.createElement("span").textContent = 'values'

// //access.nextSibling.textContent = "not available"
// access.previousElementSibling.textContent = "available"

// var newElement = document.createElement('div');
// newElement.className = "var"
// newElement.innerHTML = "variables"
// console.log(newElement)


// //appending the child

// access.children[1].appendChild(newElement)


//e is known as event parameter

//event and functions

// var btn = document.getElementById('button');
// btn.addEventListener('click', btnClick)

function btnClick(e){
    e.preventDefault();
    console.log("pass a value");
    console.log(e.target.value);    
    console.log(e.target.id);
    //console.log(e.target.className);
    console.log(e.altKey)
    console.log(e.ctrlKey)
    document.querySelector('.container').style.backgroundColor = '#f8f795';
    
}

// btn.addEventListener('dblclick', btnClick)

var box = document.getElementById('box');
box.textContent = "variable"
// box.style.border = "2px solid black";

box.addEventListener('mousemove', runIt);
function runIt(e){
    box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 80)"
 }

 var form = document.querySelector('form');
 form.addEventListener('submit', btnClick)