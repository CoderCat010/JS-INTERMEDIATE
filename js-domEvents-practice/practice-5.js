document.getElementById('btn').addEventListener('click', function(){
    const list = document.getElementById('items')
    for(let i = 1; i <= 10; i++){
        const newList = document.createElement('li');
        const newBtn = document.createElement('button');
        newBtn.textContent = 'new button ' + i;
        newList.appendChild(newBtn)
        list.appendChild(newList);
    }
})