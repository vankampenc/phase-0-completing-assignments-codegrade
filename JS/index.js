// Adding a footer with DOM
 const footer = document.createElement('footer');
 let body = document.querySelector('body');
 // appending
 body.appendChild(footer);
 

let today = new Date();
let thisYear = today.getFullYear();
let myName = "Christopher Van Kampen"

// Footer Styling
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

//Form
const messageForm = document.getElementsByName("leave_message")[0];

messageForm.addEventListener("submit", function(e){
    e.preventDefault()
    const form = e.target;

    const usersName = form.usersName.value;
    const usersEmail = form.usersEmail.value;
    const usersMessage = form.usersMessage.value;

    console.log("usersName", usersName);
    console.log("usersEmail", usersEmail);
    console.log("usersMessage", usersMessage);

    const messageSection = document.getElementById("Messages")
    const messageList = messageSection.querySelector('ul')
    const newMessage = document.createElement('li')

    newMessage.innerHTML = `<a class="messagesEmail" class="boldFont" href="mailto:${usersEmail}">User: ${usersName}</a><span class="messagesText">- ${usersMessage}</span>`;

    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", function(eRemove) {
        const entry = eRemove.target.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton)
    messageList.appendChild(newMessage);

    form.reset();
});

// FETCH API

const gitURL = "https://api.github.com/users/vankampenc/repos"

async function fetchGitHub() {
    try {
        const response = await fetch(gitURL);

        if (!response.ok) {
            throw new Error('Request failed');
        }

        const data = await response.json();
        return data;
    }   catch (error) {
        console.error('ERROR', error);
    }
}

// Display Repos in List
async function addRepos() {
    const projectSection = document.getElementById("Projects");
    const projectUL = projectSection.querySelector('ul');
    const projects = await fetchGitHub()

    for (let project of projects) {
        let projectLI = document.createElement('li');
        projectLI.innerHTML = project.name;
        projectUL.appendChild(projectLI);
    }   
}

addRepos()