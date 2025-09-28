
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