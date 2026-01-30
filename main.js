const generateBtn = document.getElementById('generate-btn');
const menuContainer = document.getElementById('menu-container');
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

const dinnerMenus = [
    "Steak",
    "Pasta",
    "Pizza",
    "Sushi",
    "Salad",
    "Tacos",
    "Burger",
    "Fried Chicken",
    "Ramen",
    "Bibimbap"
];

generateBtn.addEventListener('click', () => {
    menuContainer.innerHTML = '';
    const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
    const selectedMenu = dinnerMenus[randomIndex];
    
    const menuEl = document.createElement('div');
    menuEl.classList.add('menu');
    menuEl.textContent = selectedMenu;
    menuContainer.appendChild(menuEl);

    if (selectedMenu === "Pizza") {
        const pizzaImg = document.createElement('img');
        pizzaImg.src = 'ai-generated-8844274_1920.png';
        pizzaImg.alt = 'Pizza';
        pizzaImg.classList.add('menu-image');
        menuContainer.appendChild(pizzaImg);
    }
});

function switchTheme(e) {
    if (e.target.checked) {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

themeToggle.addEventListener('change', switchTheme);

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    html.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        themeToggle.checked = true;
    }
}