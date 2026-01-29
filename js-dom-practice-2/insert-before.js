//-----> Insert Before
// const container = document.getElementsByTagName('ul')[0];
// const parentChild = document.getElementById('insertElm');

// const insertNewElm = document.createElement('li');
// insertNewElm.textContent = 'modified by js';

// container.insertBefore(insertNewElm, parentChild);

 
//-----> Insert After
const Parentcontainer = document.getElementsByTagName('div')[0];
const parentChildList = document.getElementsByClassName('paragraph-2')[0];

const insertNewElm = document.createElement('p');
insertNewElm.textContent = 'modified by js after';

Parentcontainer.insertBefore(insertNewElm, parentChildList.nextSibling);
