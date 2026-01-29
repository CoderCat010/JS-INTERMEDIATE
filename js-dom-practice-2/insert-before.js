const container = document.getElementsByTagName('ul')[0];
const parentChild = document.getElementById('insertElm');

const insertNewElm = document.createElement('li');
insertNewElm.textContent = 'modified by js';

container.insertBefore(insertNewElm, parentChild);
