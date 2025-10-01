


//Helper functions






const body = document.body;

const footerEl = document.createElement('footer')

body.appendChild(footerEl);

const today = new Date();

const thisYear = today.getFullYear();

const footer = document.querySelector('footer');

const copyright = document.createElement("p");

copyright.innerHTML = `\u00A9 Joel Davila ${thisYear}`

footer.appendChild(copyright)


const skills = ["Javascript", "HTML","CSS"]

const skillsSection = document.querySelector("#skills");
const skillList = skillsSection.querySelector("ul")


for(let i = 0; i < skills.length; i++){
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillList.appendChild(skill)

}

skills.forEach(skill =>{
    const skillEl = document.createElement("li");
    skillEl.innerText = skill;
    
})

const messageForm = document.querySelector("form[name=leave_message]")

document.addEventListener('submit',(e)=>{
    e.preventDefault()
    const userName = e.target.userName.value
    const userEmail = e.target.userEmail.value
    const userMessage = e.target.userMessage.value

    console.log(`"userName = ${userName}, "userEmail: ${userEmail},userMessage = ${userMessage}`)

    const messageSection = document.getElementById('messages')
    const messageList = messageSection.querySelector('ul')
    const newMessage = document.createElement('li')
    newMessage.innerHTML = `<a href=mailto:${userEmail}>${userName}</a> <span>${userMessage}</span>`

    //Create remove button
    const removeButton = document.createElement('button')
    removeButton.innerText = "Remove"
    removeButton.type = "button"

    removeButton.addEventListener('click',(e)=>{
        const entry = removeButton.parentNode
        entry.remove()

    })
    newMessage.appendChild(removeButton)

    //Create edit button
    const editButton = document.createElement('button')
    editButton.innerText = "Edit"
    editButton.type = "button"


    editButton.addEventListener('click',(e)=>{
        const messageSpan = newMessage.querySelector('span')
        const editMessageText = prompt("Please Edit", messageSpan.innerText)
        if(editMessageText !== null){
            messageSpan.innerText = editMessageText
        }
    })

    newMessage.appendChild(editButton)



    
    messageList.append(newMessage)

    
    


    messageForm.reset()
})


