let sum = 0;
let counting = document.getElementById('count');

document.getElementById('plus-btn').addEventListener('click', function(){
    sum += 1;
    counting.textContent = sum;
})

document.getElementById('minus-btn').addEventListener('click', function(){
    sum -= 1;
    counting.textContent = sum;
})