const clickBtn = document.getElementById('btn');

clickBtn.addEventListener('mouseenter', function(){
    clickBtn.style.backgroundColor = 'green';
    clickBtn.style.padding = '20px 30px';
})

clickBtn.addEventListener('mouseleave', function(){
    clickBtn.style.backgroundColor = 'yellow';
    clickBtn.style.border = '2px solid black';
})