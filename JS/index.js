// Adding a footer with DOM
 const footer = document.createElement('footer');
 let body = document.querySelector('body');
 // appending
 body.appendChild(footer);
 

let today = new Date();
let thisYear = today.getFullYear();
let myName = "Christopher Van Kampen"

// Footer Styling
footer.style.backgroundColor = 'red';
footer.style.textAlign = 'center'

//Copyright
let copyright = document.createElement('p')
copyright.innerHTML = `${myName} ${thisYear}`;
footer.appendChild(copyright)

// Skills List
let skillsList = ["JavaScript", "HTML", "CSS", "GitHub", "Google Suite"];
let skillsSection = document.getElementById('Skills');
let skillsUL = skillsSection.querySelector('ul');

for (let skill of skillsList) {
    let skillLI = document.createElement('li');
    skillLI.innerHTML = skill;
    skillsUL.appendChild(skillLI);
}
