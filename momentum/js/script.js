import playList from "./playList.js";
import greetingTranslation from "./language.js";


// Language

const language = document.querySelector('.language');

function OtherLanguage() {
    const languageEnglish = document.querySelector('.english');
    const languageRussian = document.querySelector('.russian');

    if (language.classList.contains('english')) {
        language.textContent = "Рус";
        language.classList.add('russian');
        languageEnglish.classList.remove('english');
        greetingShowLanguage();
        getWeather();
        getQuotes();
    } else if (language.classList.contains('russian')) {
        language.textContent = 'En';
        language.classList.add('english');
        languageRussian.classList.remove('russian');
        greetingShowLanguage();
        getWeather();
        getQuotes();
    }
}

language.addEventListener('click', OtherLanguage);


// show time and date 
const myTime = document.querySelector('.time');
const myDate = document.querySelector('.date');

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    myTime.textContent = currentTime;
    setTimeout(showTime, 1000);
    showDate();
};

function showDate() {
    let languageText;

    if (language.classList.contains('english')) {
        languageText = greetingTranslation[0].language;
    } else if (language.classList.contains('russian')) {
        languageText = greetingTranslation[1].language;
    }

    const date = new Date();
    const options = { month: 'long', weekday: 'long', day: 'numeric', timeZone: 'UTC' };
    const currentDate = date.toLocaleDateString(`${languageText}`, options); // language 'ru-Ru' 'en-US' 'en-Br'
    myDate.textContent = currentDate;
}

showTime();



// Greetings (task 2)

const greeting = document.querySelector('.greeting');
const date = new Date();
const hours = date.getHours();
const greetingPlaceholder = document.querySelector('.placeholder')

function getTimeOfDay() {
    if (hours >= 6 && hours < 12) {
        return 'morning';
    } else if (hours >= 12 && hours < 18) {
        return 'afternoon';
    } else if (hours >= 18 && hours < 24) {
        return 'evening';
    } else if (hours >= 0 && hours < 6) {
        return 'night';
    }
};

const timeOfDay = getTimeOfDay();

function greetingShowLanguage() {
    if (language.classList.contains('english')) {
        greetingPlaceholder.placeholder = '[Enter your name]'
        greeting.textContent = `Good ${timeOfDay}`;
        greetingPlaceholder.textContent = 'yes'
    } else if (language.classList.contains('russian')) {
        greetingPlaceholder.placeholder = '[Введите ваше имя]'
        if (hours >= 6 && hours < 12) {
            greeting.textContent = 'Доброе утро';
        } else if (hours >= 12 && hours < 18) {
            greeting.textContent = 'Добрый день';
        } else if (hours >= 18 && hours < 24) {
            greeting.textContent = 'Добрый вечер';
        } else if (hours >= 0 && hours < 6) {
            greeting.textContent = 'Доброй ночи';
        }
    }
}

greetingShowLanguage();


// localStorage (task 2)

const input = document.querySelector('.name');


function setLocalStorage() {
    localStorage.setItem('name', input.value);
    localStorage.setItem('city', city.value); // localStorage city

}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if (localStorage.getItem('name')) {
        input.value = localStorage.getItem('name');
        city.value = localStorage.getItem('city'); // localStorage city

    }
}
window.addEventListener('load', getLocalStorage);

input.addEventListener('click', setLocalStorage);

// Slaider (task 3)

const body = document.querySelector('body');

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let num = getRandomNum(1, 20);

const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
const slideNextUnsplash = document.querySelector('.slide-next-unsplash');
const slidePrevUnsplash = document.querySelector('.slide-prev-unsplash');
const slideNextFlickr = document.querySelector('.slide-next-flickr');
const slidePrevFlickr = document.querySelector('.slide-prev-flickr');

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);
slideNextUnsplash.addEventListener('click', getLinkToImage);
slidePrevUnsplash.addEventListener('click', getLinkToImage);
slideNextFlickr.addEventListener('click', getLinkToImageFlickr);
slidePrevFlickr.addEventListener('click', getLinkToImageFlickr);

let bgNum = `${num}`.padStart(2, '0');
body.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg)`;

async function getLinkToImage() {
    const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${timeOfDay}&client_id=D8xGe8zcBaLVHO3ovDaZifshhMaFGp5lqdH-Mo8eq20`;
    const res = await fetch(url);
    const data = await res.json();
    body.style.backgroundImage = `url(${data.urls.regular})`;
}

async function getLinkToImageFlickr() {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=0f047ddbf52988f9b99157a1e7c6863b&tags=${timeOfDay}&extras=url_h&format=json&nojsoncallback=1`;
    const res = await fetch(url);
    const data = await res.json();
    let num = getRandomNum(1, 100);
    let photosFlickr = data.photos.photo[num].url_h;
    body.style.backgroundImage = `url(${photosFlickr})`;
}

function getSlideNext() {
    num = num + 1;
    let bgNum = `${num}`.padStart(2, '0');
    let link = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
    const img = new Image();
    img.src = link;
    img.onload = () => {
        body.style.backgroundImage = `url(${link})`;
    };



    if (num === 20 || num > 20) {
        num = 0;
    }

    return `${num}`.padStart(2, '0');

};

function getSlidePrev() {
    num = num - 1;
    let bgNum = `${num}`.padStart(2, '0');
    let link = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
    const img = new Image();
    img.src = link;
    img.onload = () => {
        body.style.backgroundImage = `url(${link})`;
    };

    if (num === 1 || num < 1) {
        num = 21;
    }
    return `${num}`.padStart(2, '0');
};

//Weather (task 4)

const city = document.querySelector('.city');
city.addEventListener('change', () => {
    getWeather()
});

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const weatherError = document.querySelector('.weather-error');
const dexcriptionContainer = document.querySelector('.description-container');
const windSpeed = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');



async function getWeather() {

    let languageWeatherNow = greetingTranslation[1].languageWeather;


    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${languageWeatherNow}&appid=1012aff57bc27b962cefd6a99089424c&units=metric`;


    if (city.value == '') {
        weatherError.setAttribute('style', 'display: block');
        weatherIcon.setAttribute('style', 'display: none');
        dexcriptionContainer.setAttribute('style', 'display: none');
        windSpeed.setAttribute('style', 'Font-size: 0');
        humidity.setAttribute('style', 'Font-size: 0');
        if (language.classList.contains('english')) {
            weatherError.textContent = 'Error!';
        } else if (language.classList.contains('russian')) {
            weatherError.textContent = 'Ошибка! Нечего геокодировать!';
        }
        return;
    } else {
        let res = await fetch(url);
        if (res.status != 200) {
            weatherError.setAttribute('style', 'display: block');
            weatherIcon.setAttribute('style', 'display: none');
            weatherError.textContent = 'Ошибка! Нечего геокодировать!';
            dexcriptionContainer.setAttribute('style', 'display: none');
            windSpeed.setAttribute('style', 'Font-size: 0');
            humidity.setAttribute('style', 'Font-size: 0');
            if (language.classList.contains('english')) {
                weatherError.textContent = 'Error!';
            } else if (language.classList.contains('russian')) {
                weatherError.textContent = 'Ошибка! Нечего геокодировать!';
            }
            return;
        };
    };

    let res = await fetch(url);
    let data = await res.json();

    if (language.classList.contains('english')) {
        languageWeatherNow = greetingTranslation[0].languageWeather;
        windSpeed.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;
        humidity.textContent = `Humidity: ${Math.round(data.main.humidity)}%`;

    } else if (language.classList.contains('russian')) {
        languageWeatherNow = greetingTranslation[1].languageWeather;
        windSpeed.textContent = `Скорость ветра: ${Math.round(data.wind.speed)} m/s`;
        humidity.textContent = `Относительную влажность воздуха: ${Math.round(data.main.humidity)}%`;

    }

    url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${languageWeatherNow}&appid=1012aff57bc27b962cefd6a99089424c&units=metric`;
    res = await fetch(url);


    data = await res.json();
    windSpeed.setAttribute('style', 'display: block');
    humidity.setAttribute('style', 'Font-size: 100%');
    weatherError.setAttribute('style', 'display: none');
    dexcriptionContainer.setAttribute('style', 'display: flex');
    weatherIcon.setAttribute('style', 'display: inline-block');
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
};

getWeather();

// Quote of the Day (task 5)

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');

let numText = getRandomNum(0, 2);

async function getQuotes() {

    if (language.classList.contains('russian')) {

        const quotes = 'json/dataRu.json';
        const res = await fetch(quotes);
        const data = await res.json();
        quote.textContent = `${data[numText].text} `;
        author.textContent = `${data[numText].author} `;

        changeQuote.addEventListener('click', () => {
            let numText = getRandomNum(0, 2);
            quote.textContent = `${data[numText].text} `;
            author.textContent = `${data[numText].author} `;
        })
    }
    else if (language.classList.contains('english')) {
        const quotes = 'json/dataEn.json';
        const res = await fetch(quotes);
        const data = await res.json();
        quote.textContent = `${data[numText].text} `;
        author.textContent = `${data[numText].author} `;

        changeQuote.addEventListener('click', () => {
            let numText = getRandomNum(0, 2);
            quote.textContent = `${data[numText].text} `;
            author.textContent = `${data[numText].author} `;
        })
    };
}

getQuotes();

//Audio Play (tasks 6-7)

const playBtn = document.querySelector('.play');
const playNextBtn = document.querySelector('.play-next');
const playPrevBtn = document.querySelector('.play-prev');
const playListContainer = document.querySelector('.play-list');

const audioPlayer = document.querySelector('.progress-bar');
const progressPlayer = audioPlayer.querySelector('.progress-player');
const progressBar = audioPlayer.querySelector('.progress');

const lengthSong = audioPlayer.querySelector(".length-song");
const nameSong = audioPlayer.querySelector('.duration-name');

for (let i = 0; i < playList.length; i++) {
    const li = document.createElement('li');
    const buttonPlaySong = document.createElement('button');
    playListContainer.append(li);
    playListContainer.append(buttonPlaySong);
    buttonPlaySong.classList.add('player-icon');
    buttonPlaySong.classList.add('play-song');
    li.classList.add('play-item');
    li.textContent = `${playList[i].title}`;
}

const numberSong = document.querySelectorAll('.play-item');
const buttonPlaySong = document.querySelectorAll('.play-song');
let playNum = 0;
numberSong[playNum].classList.add('item-active');

let a = playList[playNum].duration.split(':'); // split it at the colons
let secondsPlayList = (+a[0]) * 60 + (+a[1]);

lengthSong.textContent = getTimeCodeFromNum(secondsPlayList);
nameSong.textContent = `${playList[playNum].title}`;

playBtn.addEventListener('click', playAudio);
playNextBtn.addEventListener('click', playNext);
playPrevBtn.addEventListener('click', playPrev);

const audio = new Audio();
let isPlay = false;

function playAudio() {
    audio.currentTime = 0;
    audio.src = playList[playNum].src;
    if (!isPlay) {
        numberSong[playNum].classList.add('item-active');
        audio.play();
        isPlay = true;
    } else {
        audio.pause();
        isPlay = false;
    }
}

function toggleBtn() {
    playBtn.classList.toggle('pause');
}

playBtn.addEventListener('click', toggleBtn);

function playNext() {
    playNum++;
    numberSong[playNum - 1].classList.remove('item-active');
    if (playNum >= 4) {
        playNum = 0
    }
    audio.src = playList[playNum].src;
    audio.play();
    isPlay = true;
    playBtn.classList.add('pause');
    numberSong[playNum].classList.add('item-active');
    nameSong.textContent = `${playList[playNum].title}`;
    let a = playList[playNum].duration.split(':'); // split it at the colons
    let secondsPlayList = (+a[0]) * 60 + (+a[1]);
    lengthSong.textContent = getTimeCodeFromNum(secondsPlayList);
};

function playPrev() {
    --playNum;
    numberSong[playNum + 1].classList.remove('item-active');
    if (playNum <= -1) {
        playNum = 3
    }
    audio.src = playList[playNum].src;
    audio.play();
    isPlay = true;
    playBtn.classList.add('pause');
    numberSong[playNum].classList.add('item-active');
    let a = playList[playNum].duration.split(':'); // split it at the colons
    secondsPlayList = (+a[0]) * 60 + (+a[1]);
    lengthSong.textContent = getTimeCodeFromNum(secondsPlayList);
    nameSong.textContent = `${playList[playNum].title}`;
    progressBar.style.width = audio.currentTime / secondsPlayList * 100 + "%";
    audioPlayer.querySelector(".duration-time .current").textContent = getTimeCodeFromNum(
        audio.currentTime
    );
};

audio.addEventListener('ended', () => {
    audio.src = playList[playNum++].src;
    audio.currentTime = 0;
    audio.play();
    if (playNum >= 4) {
        playNum = 0;
        audio.play();
        numberSong[3].classList.remove('item-active');
        numberSong[playNum].classList.add('item-active');
    } else {
        numberSong[playNum - 1].classList.remove('item-active');
        numberSong[playNum].classList.add('item-active');
    }
})

progressPlayer.addEventListener("click", e => {
    let a = playList[playNum].duration.split(':'); // split it at the colons
    secondsPlayList = (+a[0]) * 60 + (+a[1]);
    const progressPlayerWidth = window.getComputedStyle(progressPlayer).width;
    const timeToSeek = e.offsetX / parseInt(progressPlayerWidth) * secondsPlayList;
    audio.currentTime = timeToSeek;
}, false);

setInterval(() => {
    let a = playList[playNum].duration.split(':'); // split it at the colons
    let secondsPlayList = (+a[0]) * 60 + (+a[1]);
    progressBar.style.width = audio.currentTime / secondsPlayList * 100 + "%";
    audioPlayer.querySelector(".duration-time .current").textContent = getTimeCodeFromNum(
        audio.currentTime
    );
}, 500);

function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;

    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(
        seconds % 60
    ).padStart(2, 0)}`;
}

const volumeSlider = audioPlayer.querySelector(".volume-slider");
volumeSlider.addEventListener('click', e => {
    const sliderWidth = window.getComputedStyle(volumeSlider).width;
    const newVolume = e.offsetX / parseInt(sliderWidth);
    audio.volume = newVolume;
    audioPlayer.querySelector(".volume-percentage").style.width = newVolume * 100 + '%';
}, false)

audioPlayer.querySelector(".volume-button").addEventListener("click", () => {
    const volumeEl = audioPlayer.querySelector(".volume-container .volume");
    audio.muted = !audio.muted;
    if (audio.muted) {
        volumeEl.classList.remove("icono-volumeMedium");
        volumeEl.classList.add("icono-volumeMute");
    } else {
        volumeEl.classList.add("icono-volumeMedium");
        volumeEl.classList.remove("icono-volumeMute");
    }
});

const songActive = document.querySelectorAll('.play-song');

songActive.forEach((el, id) => {
    el.addEventListener('click', () => {
        playNum = id;
        audio.src = playList[id].src;
        if (id == 0) {
            numberSong[1].classList.remove('item-active');
            numberSong[2].classList.remove('item-active');
            numberSong[3].classList.remove('item-active');
            playBtn.classList.add('pause');
            buttonPlaySong[1].classList.remove('pause');
            buttonPlaySong[2].classList.remove('pause');
            buttonPlaySong[3].classList.remove('pause');
            if (!isPlay) {
                numberSong[playNum].classList.add('item-active');
                playBtn.classList.add('pause');
                buttonPlaySong[0].classList.add('pause');
                audio.play();
                isPlay = true;
            } else {
                buttonPlaySong[0].classList.remove('pause');
                numberSong[playNum].classList.remove('item-active');
                playBtn.classList.remove('pause');
                audio.pause();
                isPlay = false;
            }

        } else if (id == 1) {
            numberSong[0].classList.remove('item-active');
            numberSong[2].classList.remove('item-active');
            numberSong[3].classList.remove('item-active');
            playBtn.classList.add('pause');
            buttonPlaySong[0].classList.remove('pause');
            buttonPlaySong[2].classList.remove('pause');
            buttonPlaySong[3].classList.remove('pause');
            if (!isPlay) {
                numberSong[id].classList.add('item-active');
                buttonPlaySong[1].classList.add('pause');
                playBtn.classList.add('pause');
                audio.play();
                isPlay = true;
            } else {
                buttonPlaySong[1].classList.remove('pause');
                numberSong[id].classList.remove('item-active');
                playBtn.classList.remove('pause');
                buttonPlaySong[1].classList.remove('pause');

                audio.pause();
                isPlay = false;
            }
        } else if (id == 2) {
            numberSong[0].classList.remove('item-active');
            numberSong[1].classList.remove('item-active');
            numberSong[3].classList.remove('item-active');
            playBtn.classList.add('pause');
            buttonPlaySong[0].classList.remove('pause');
            buttonPlaySong[1].classList.remove('pause');
            buttonPlaySong[3].classList.remove('pause');
            if (!isPlay) {
                numberSong[playNum].classList.add('item-active');
                buttonPlaySong[2].classList.add('pause');
                playBtn.classList.add('pause');
                audio.play();
                isPlay = true;
            } else {
                buttonPlaySong[2].classList.remove('pause');
                numberSong[playNum].classList.remove('item-active');
                playBtn.classList.remove('pause');
                audio.pause();
                isPlay = false;
            }
        } else {
            numberSong[0].classList.remove('item-active');
            numberSong[1].classList.remove('item-active');
            numberSong[2].classList.remove('item-active');
            playBtn.classList.add('pause');
            buttonPlaySong[0].classList.remove('pause');
            buttonPlaySong[1].classList.remove('pause');
            buttonPlaySong[2].classList.remove('pause');
            if (!isPlay) {
                numberSong[playNum].classList.add('item-active');
                buttonPlaySong[3].classList.add('pause');
                playBtn.classList.add('pause');
                audio.play();
                isPlay = true;
            } else {
                buttonPlaySong[3].classList.remove('pause');
                numberSong[playNum].classList.remove('item-active');
                playBtn.classList.remove('pause');
                audio.pause();
                isPlay = false;
            }
        }
    });
});

