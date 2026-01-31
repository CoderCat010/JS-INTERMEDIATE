document.getElementById('btn').addEventListener('click', function(){
    // create items
    const arrayItems = ['orange', 'apple', 'banana'];

    // get ul list
    const ul = document.getElementById('list-items');

    // create new list through accessing array items
    for(const items of arrayItems){
        // create new items
        const newList = document.createElement('li');

        // set array items into new list as text
        newList.textContent = items;

        // append new list into ul 
        ul.appendChild(newList)
    }
})