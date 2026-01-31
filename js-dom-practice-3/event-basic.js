//-----> red button
// function makeRed(){
//     document.body.style.backgroundColor = 'red';
// }



//-----> yellow buttton
// const btnYellow = document.getElementById('btn-1');

// btnYellow.onclick = function makeYellow(){
//     document.body.style.backgroundColor = 'yellow';
// }



//-----> green button
// const btnGreen = document.getElementById('btn-2');

// function makeGreen(){
//     document.body.style.backgroundColor = 'green';
// }
// btnGreen.onclick = makeGreen;



//-----> purple button 
// document.getElementById('btn-3').addEventListener('click', function(){
//     document.body.style.backgroundColor = 'purple';
// })



//-----> changing inner text 
// document.getElementById('btn-4').addEventListener('click', function(){
//     const userInfo = document.getElementById('user-info');
//     userInfo.textContent = 'user logged in successfully!'
// })



//-----> updating innter text through input
// document.getElementById('login-btn').addEventListener('click', function(){
//     // get input
//     const inputFiled = document.getElementById('input-name');

//     // get input value
//     const getInputValue = inputFiled.value;

//     // update inpute value
//     const updateName = document.getElementById('update-name');
//     updateName.textContent = getInputValue;
// })



//-----> updating comment and adding new comment into existing comment
// document.getElementById('post-btn').addEventListener('click',function(){
//     // get input 
//     const userInfo = document.getElementById('user-input');

//     // get input value 
//     const inputValue = userInfo.value;
    
//     // get comment container
//     const commentBox = document.getElementById('comment-box');
    
//     // create new comment tag 
//     const createElm = document.createElement('p');
//     createElm.classList.add('comment');
//     createElm.textContent = inputValue;
    
//     // set the new comment in parent comment box
//     commentBox.appendChild(createElm);
    
//     // clean the input area
//     userInfo.value = '';

// })