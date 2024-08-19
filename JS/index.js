let today = new Date();
let thisYear = today.getFullYear()
let footer = 

// Adding a footer with DOM
const addFooter = document.createElement('footer');
    // Footer Styling
addFooter.textContent = 'footer content';
addFooter.style.backgroundColor = 'red';
addFooter.style.textAlign = 'center'
    // appending
document.body.appendChild(addFooter);

