const generateBtn = document.getElementById('generate-btn');
const menuContainer = document.getElementById('menu-container');
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

const dinnerMenus = [
    { name: "스테이크", description: "든든한 식사를 위한 클래식한 선택. 으깬 감자와 구운 아스파라거스를 곁들이면 더욱 좋습니다." },
    { name: "파스타", description: "좋아하는 소스와 토핑으로 맞춤 설정할 수 있는 다재다능한 요리. 간단한 알리오 올리오부터 진한 볼로네제까지." },
    { name: "피자", description: "전 세계적으로 사랑받는 요리. 클래식한 마르게리타를 선호하든, 푸짐한 슈프림을 선호하든 모두를 위한 피자가 있습니다." },
    { name: "스시", description: "식초로 간을 한 밥, 해산물, 채소로 구성된 일본의 진미. 건강하고 풍미 있는 선택입니다." },
    { name: "샐러드", description: "가볍고 상쾌한 선택. 반찬이나 메인 코스가 될 수 있으며, 재료의 가능성은 무한합니다." },
    { name: "타코", description: "다양한 속을 채운 옥수수 또는 밀 토르티야를 사용한 멕시코 전통 요리. 만들고 먹는 재미가 있습니다." },
    { name: "버거", description: "전형적인 미국 컴포트 푸드. 부드러운 빵에 육즙이 풍부한 패티와 원하는 토핑을 얹어 즐겨보세요." },
    { name: "치킨", description: "많은 사람들이 즐기는 바삭하고 맛있는 요리. 캐주얼한 저녁 식사나 피크닉에 적합합니다." },
    { name: "라멘", description: "일본 국수 요리. 진한 국물, 쫄깃한 면발, 다양한 토핑이 만족스러운 식사를 만듭니다." },
    { name: "비빔밥", description: "다양한 채소, 고기, 계란 후라이가 들어간 한국 비빔밥. 균형 잡힌 맛있는 식사입니다." },
    { name: "파에야", description: "원래 발렌시아에서 유래한 스페인 쌀 요리. 나누어 먹기에 완벽한 축제 분위기의 풍미 가득한 요리입니다." },
    { name: "카레", description: "인도 아대륙에서 유래한 다양한 요리. 고기나 채소, 그리고 다양한 향신료로 만들 수 있습니다." },
    { name: "피쉬 앤 칩스", description: "영국에서 유래한 뜨거운 요리. 튀긴 생선과 뜨거운 감자 칩으로 구성됩니다." },
    { name: "훠궈", description: "식탁에서 끓는 육수에 다양한 동아시아 식료품과 재료를 넣어 준비하는 중국 요리 방법입니다." },
    { name: "쌀국수", description: "육수, 쌀국수, 허브, 고기로 구성된 베트남 수프. 향긋하고 풍미있는 수프입니다." }
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