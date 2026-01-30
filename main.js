const generateBtn = document.getElementById('generate-btn');
const menuContainer = document.getElementById('menu-container');
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

const dinnerMenus = [
    { name: "Steak", description: "A classic choice for a hearty meal. Best served with a side of mashed potatoes and grilled asparagus." },
    { name: "Pasta", description: "A versatile dish that can be customized with your favorite sauce and toppings. From simple Aglio e Olio to rich Bolognese." },
    { name: "Pizza", description: "A beloved dish worldwide. Whether you prefer a classic Margherita or a loaded Supreme, there's a pizza for everyone." },
    { name: "Sushi", description: "A Japanese delicacy consisting of vinegared rice, seafood, and vegetables. A healthy and flavorful option." },
    { name: "Salad", description: "A light and refreshing option. Can be a side dish or a main course, with endless possibilities for ingredients." },
    { name: "Tacos", description: "A traditional Mexican dish with a corn or wheat tortilla filled with various fillings. Fun to make and eat." },
    { name: "Burger", description: "A quintessential American comfort food. A juicy patty in a soft bun, with your choice of toppings." },
    { name: "Fried Chicken", description: "A crispy and savory dish enjoyed by many. Perfect for a casual dinner or a picnic." },
    { name: "Ramen", description: "A Japanese noodle soup. Rich broth, chewy noodles, and various toppings make it a satisfying meal." },
    { name: "Bibimbap", description: "A Korean mixed rice dish with assorted vegetables, meat, and a fried egg. A balanced and flavorful meal." },
    { name: "Paella", description: "A Spanish rice dish originally from Valencia. A festive and flavorful dish perfect for sharing." },
    { name: "Curry", description: "A variety of dishes originating in the Indian subcontinent. Can be made with meat or vegetables, and a wide range of spices." },
    { name: "Fish and Chips", description: "A hot dish originating in England. Consists of fried battered fish and hot potato chips." },
    { name: "Hot Pot", description: "A Chinese cooking method, prepared with a simmering pot of soup stock at the dining table, containing a variety of East Asian foodstuffs and ingredients." },
    { name: "Pho", description: "A Vietnamese soup consisting of broth, rice noodles, herbs, and meat. A fragrant and flavorful soup." }
];

generateBtn.addEventListener('click', () => {
    menuContainer.innerHTML = '';
    const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
    const selectedMenu = dinnerMenus[randomIndex];
    
    const menuEl = document.createElement('div');
    menuEl.classList.add('menu');
    menuEl.innerHTML = `<h3>${selectedMenu.name}</h3><p>${selectedMenu.description}</p>`;
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