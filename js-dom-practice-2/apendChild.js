//-----> create new elements
const newItems = document.createElement('li');
newItems.textContent = 'lorem lorem lorem';
console.log(newItems);

//-----> adding new element in the last 
const lastElm = document.getElementById('myList');
lastElm.appendChild(newItems);
console.log(lastElm);
