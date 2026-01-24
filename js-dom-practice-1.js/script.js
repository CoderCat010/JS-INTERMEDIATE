console.log(document.body);

//------tag name
const listCollection = document.getElementsByTagName('li');

// console.log(listCollection);
// for(const li of listCollection){
//     console.log(li.innerText); 
// }

//------id name
const callById = document.getElementById('h1-tag');

// console.log(callById);
// console.log(callById.innerText);


//------class name
const items = document.getElementsByClassName('list-items');
// console.log(items[0].innerText);
for(let elements of items){
    console.log(elements.innerText);
    
}


