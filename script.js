const skillGrid = document.querySelector(".skill-grid");
const frameworkGrid = document.querySelector(".framework-grid");
const contactBtn = document.querySelector('.btn-contact');
const contactBtnNav = document.querySelector('.btn-contact-nav');
const skills = [['python', `images/python-logo.png`], 
                ['Java', `images/javaLogo2.png`],
                [' Javascript', `images/js-logo.png`],
                ['php', `images/php-logo.png`],
                ['CSS',`images/css-logo.png`],
                ['HTML',`images/htmlLogo.png`]];

const frameworks = ['Flask', 'discord.py', 'Pillow', 'pyautogui', 'React JS', 'React Native']

const createSkillCard = (skill,img) => {
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card skill-card">
        <p class='card-text'>${skill}</p>
        <br>
        <img src=${img} alt='python png' height='50' width='50'>
    </div>
    `
    return div.firstElementChild;
}

const createFrameworkCard = (skill) => {
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="card skill-card">
        <p id='framework' class='card-text'>${skill}</p>
    </div>
    `
    return div.firstElementChild;
}

skillGrid.innerHTML = '';
skills.forEach(skill => {
    const card = createSkillCard(skill[0],skill[1]);
    skillGrid.appendChild(card);
});

frameworkGrid.innerHTML = '';
frameworks.forEach(skill => {
    const card = createFrameworkCard(skill);
    frameworkGrid.appendChild(card);
});

contactBtn.addEventListener("click", () =>{
    const contacts = document.getElementById("contacts");


    setTimeout(() => {
        contacts.style.display = 'flex';
    }, 30);
});

contactBtnNav.addEventListener("click", () =>{
    const contacts = document.getElementById("contacts");


    setTimeout(() => {
        contacts.style.display = 'flex';
    }, 30);
});