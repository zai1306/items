var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter')

//filter event

filter.addEventListener('keyup', filterItems);

//filter items from page

function filterItems(e){
    //convert text to lower case

    var text = e.target.value.toLowerCase();
    console.log(text)

    //GET LIST ITEMS

    var items =  itemList.getElementsByTagName('li');
    //console.log(itemsNames)

    //converting it to array

    Array.from(items).forEach(function(item){
        var itemsNames = item.firstChild.textContent;
        //console.log(itemsNames)

        if(itemsNames.toLowerCase().indexOf(text) != -1 ){
            item.style.display = 'block'
        }
        else{
            item.style.display = 'none';
        }
    })

}

//form submitting event

form.addEventListener('submit', addItem);


//adding items 

function addItem(e){
    e.preventDefault();

    //get input from user

    var newItem = document.getElementById('item').value;

    //create new list element

    var li = document.createElement('li');

    //add class

    li.className = 'list-group-item';

    //adding text nodes

    li.appendChild(document.createTextNode(newItem));

    //creating delete button

    var deleteBtn = document.createElement('button')
    
    //giving class to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'

    //append text node
    deleteBtn.appendChild(document.createTextNode("X"));
    //appending child to list
    li.appendChild(deleteBtn)
    //append list to list
    itemList.appendChild(li)

    
}

//deleting event

itemList.addEventListener('click', removeItem);

//remove items
function removeItem(e){
    if(e.target.classList.contains('delete')){
    if(confirm("are you sure you wanna delete it?")){
        const li = e.target.parentElement;
        itemList.removeChild(li)
    }
}
}