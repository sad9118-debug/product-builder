document.addEventListener('DOMContentLoaded', async () => {
    const recommendationCard = document.getElementById('song-recommendation');
    const titleEl = document.getElementById('song-title');
    const artistEl = document.getElementById('song-artist');
    const youtubeIframe = document.getElementById('youtube-iframe');
    const descriptionEl = document.getElementById('song-description');
    const eraButtons = document.querySelectorAll('.era-btn');

    let songs = [];

    try {
        const response = await fetch('songs.json', { cache: 'no-cache' });
        songs = await response.json();
        initialize();
    } catch (error) {
        console.error('Error fetching songs:', error);
    }

    function initialize() {
        eraButtons.forEach(button => {
            button.addEventListener('click', () => {
                const selectedEra = button.dataset.era;
                console.log('Button clicked! Selected Era:', selectedEra);

                const eraSongs = songs.filter(song => song.era === selectedEra);
                console.log('Found songs for this era:', eraSongs);
                console.log('All songs loaded:', songs); 


                if (eraSongs.length > 0) {
                    const randomSong = eraSongs[Math.floor(Math.random() * eraSongs.length)];
                    displaySong(randomSong);
                } else {
                    console.log('No songs found for era:', selectedEra);
                }
            });
        });
    }

    function displaySong(song) {
        titleEl.textContent = `${song.title} (${song.year})`;
        artistEl.textContent = song.artist;
        descriptionEl.textContent = song.description;
        youtubeIframe.src = `https://www.youtube.com/embed/${song.youtubeId}`;

        recommendationCard.classList.remove('hidden');
    }
});
