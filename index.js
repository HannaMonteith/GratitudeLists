// adding items to start
const list = document.getElementsByTagName('ul')[0];

// add new item to end of list
const newItemLast = document.createElement('li');
const newTextLast = document.createTextNode;
newItemFirst.appendChild(newTextFirst);
list.appendChild(newItemLast);

// add new item start of list 
const newItemFirst = document.createElement('li');
const newTextFirst = document.createTextNode;
newItemFirst.appendChild(newTextFirst);
list.insertBefore(newItemFirst, list.firstChild);
