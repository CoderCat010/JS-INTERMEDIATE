document.getElementById('btn').addEventListener('click', function(){
    const items = document.getElementById('items-container');

    const newList = document.createElement('li');
    newList.classList.add('item')
    newList.textContent = 'watermalon';
    items.appendChild(newList)
})