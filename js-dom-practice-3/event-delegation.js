// get parentNode of lists
const items = document.getElementById('items-container');

// remove child by parentNode including new items
items.addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target)
})

// accessing button to add new item
const btn = document.getElementById('add-new-item').addEventListener('click', function(){
    // get parentNode to append the new child into it
    const olItems = document.getElementById('items-container');

    // create new child
    const newItems = document.createElement('li');

    // set existing item's class name
    newItems.classList.add('item')

    // set text into the new item
    newItems.textContent = 'Awesome Item';

    // add new items into parentNode
    olItems.appendChild(newItems);
})

