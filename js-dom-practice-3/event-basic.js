// red button
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// yellow buttton
const btnYellow = document.getElementById('btn-1');

btnYellow.onclick = function makeYellow(){
    document.body.style.backgroundColor = 'yellow';
}

// green button
const btnGreen = document.getElementById('btn-2');

function makeGreen(){
    document.body.style.backgroundColor = 'green';
}
btnGreen.onclick = makeGreen;

