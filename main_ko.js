const generateBtn = document.getElementById('generate-btn');
const menuContainer = document.getElementById('menu-container');
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

const dinnerMenus = [
    "스테이크",
    "파스타",
    "피자",
    "스시",
    "샐러드",
    "타코",
    "버거",
    "치킨",
    "라멘",
    "비빔밥"
];

generateBtn.addEventListener('click', () => {
    menuContainer.innerHTML = '';
    const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
    const selectedMenu = dinnerMenus[randomIndex];
    
    const menuEl = document.createElement('div');
    menuEl.classList.add('menu');
    menuEl.textContent = selectedMenu;
    menuContainer.appendChild(menuEl);
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