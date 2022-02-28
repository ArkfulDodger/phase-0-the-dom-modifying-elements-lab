// set main variable
const main = document.getElementById('main');
console.log(main.cloneNode(true));

// set variable for parent of main to test child removal
const mainParent = main.parentElement;
console.log(mainParent.cloneNode(true));

// test removal (one method at a time)
// mainParent.removeChild(main); // test child removal
main.remove(); // test direct element removal

// verify element is removed, but still accessible in memory
console.log(main.cloneNode(true));
console.log(mainParent.cloneNode(true));

//create h1 newHeader variable with id of victory
const newHeader = document.createElement('h1');
newHeader.id = "victory";
console.log(newHeader.cloneNode(true));

// add text to newHeader
newHeader.textContent = "Noah is the champion";
console.log(newHeader.cloneNode(true));