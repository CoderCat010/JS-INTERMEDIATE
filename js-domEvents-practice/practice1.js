//-----> first and best way
// document.getElementById('btn').addEventListener('click', function(){
//     const para = document.getElementById('paragraph')
//     para.textContent = 'modified by js'
// })


//-----> 2nd way 
// const button = document.getElementById('btn');
// button.onclick = function(){
//     const text = document.getElementById('paragraph');
//     text.textContent = 'modified by js'
// }


//-----> third way 
// function changeText(){
//     const para = document.getElementById('text');
//     para.textContent = 'modified by js'
// }