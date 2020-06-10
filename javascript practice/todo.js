var form = document.querySelector('#form');
var itemList = document.querySelector('#items');

//form submit event

form.addEventListener('submit', function addItem(e){

// adding items

    e.preventDefault();


    //taking input from user

    var newItem = document.getElementById('user').value;
    console.log(newItem)
    //crearting new text element

    var li = document.createElement('li');

    //adding class to it

    li.className = 'list';

    //adding text node with input value

    li.appendChild(document.createTextNode(newItem))
    itemList.appendChild(li)
})