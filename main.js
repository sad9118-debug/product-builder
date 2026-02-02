document.addEventListener('DOMContentLoaded', () => {
    const songs = [
        // 1970년대
        {
            era: "1970",
            artist: "신중현과 엽전들",
            title: "미인",
            year: "1974",
            youtubeId: "sh_h_w_e8uM",
            description: "한국 록의 대부 신중현이 이끄는 밴드 '신중현과 엽전들'의 대표곡입니다. 당시 파격적인 사이키델릭 록 사운드로 대중음악계에 큰 충격을 주었으며, 한국 록 음악의 발전에 지대한 영향을 미친 곡으로 평가받습니다."
        },
        {
            era: "1970",
            artist: "송창식",
            title: "고래사냥",
            year: "1975",
            youtubeId: "u_Gz4d7O_N8",
            description: "70년대 청년문화의 상징적인 노래로, 자유를 갈망하는 젊은이들의 마음을 잘 표현한 곡입니다. 영화 '바보들의 행진' OST로 사용되어 더욱 큰 인기를 얻었습니다."
        },
        // 1980년대
        {
            era: "1980",
            artist: "조용필",
            title: "단발머리",
            year: "1980",
            youtubeId: "PAqaPslc2zM",
            description: "가왕 조용필의 수많은 히트곡 중 하나로, 세련된 멜로디와 편곡이 돋보이는 노래입니다. 80년대 초반의 시대상을 반영하며, 디스코 풍의 리듬이 흥겨움을 더합니다."
        },
        {
            era: "1980",
            artist: "들국화",
            title: "행진",
            year: "1985",
            youtubeId: "Gf0y1g_G_xQ",
            description: "한국 대중음악 역사상 최고의 명반 중 하나로 꼽히는 들국화 1집의 수록곡입니다. 보컬 전인권의 호소력 짙은 목소리와 희망을 노래하는 가사가 어우러져 많은 이들에게 깊은 감동과 위로를 주었습니다."
        },
        {
            era: "1980",
            artist: "이문세",
            title: "광화문 연가",
            year: "1988",
            youtubeId: "J2K0zD7Pl2I",
            description: "작곡가 이영훈과 가수 이문세 콤비의 대표적인 명곡입니다. 서정적인 멜로디와 아름다운 가사로 광화문 거리의 추억과 낭만을 노래하며, 지금까지도 많은 사랑을 받고 있는 스테디셀러입니다."
        },
        // 1990년대
        {
            era: "1990",
            artist: "서태지와 아이들",
            title: "난 알아요",
            year: "1992",
            youtubeId: "OEDheWYC_yM",
            description: "한국 대중음악의 패러다임을 바꾼 혁명적인 곡입니다. 랩, 댄스, 록 등 다양한 장르를 결합한 새로운 스타일의 음악으로 90년대 대중문화에 엄청난 영향을 끼쳤습니다."
        },
        {
            era: "1990",
            artist: "김건모",
            title: "잘못된 만남",
            year: "1995",
            youtubeId: "VgvQp_Kq2p4",
            description: "90년대를 대표하는 댄스곡으로, 당시 역대 최고 음반 판매량을 기록하며 '국민가수' 반열에 오르게 한 노래입니다. 빠르고 경쾌한 레게 리듬과 솔직한 가사가 특징입니다."
        },
        {
            era: "1990",
            artist: "패닉",
            title: "달팽이",
            year: "1995",
            youtubeId: "o5PADCXV-f8",
            description: "이적과 김진표가 결성한 듀오 '패닉'의 데뷔곡입니다. 세상의 편견과 어려움 속에서도 묵묵히 자신의 길을 가겠다는 의지를 달팽이에 비유한 철학적인 가사로 큰 사랑을 받았습니다."
        }
    ];

    const eraButtons = document.querySelectorAll('.era-btn');
    const recommendationCard = document.getElementById('song-recommendation');
    const titleEl = document.getElementById('song-title');
    const artistEl = document.getElementById('song-artist');
    const youtubeIframe = document.getElementById('youtube-iframe');
    const descriptionEl = document.getElementById('song-description');

    eraButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedEra = button.dataset.era;
            const eraSongs = songs.filter(song => song.era === selectedEra);
            
            if (eraSongs.length > 0) {
                const randomSong = eraSongs[Math.floor(Math.random() * eraSongs.length)];
                displaySong(randomSong);
            }
        });
    });

    function displaySong(song) {
        titleEl.textContent = `${song.title} (${song.year})`;
        artistEl.textContent = song.artist;
        descriptionEl.textContent = song.description;
        youtubeIframe.src = `https://www.youtube.com/embed/${song.youtubeId}`;
        
        recommendationCard.classList.remove('hidden');
    }
});
