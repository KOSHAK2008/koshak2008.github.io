
const buttonMobile = document.getElementById('button_mobile');
const menu = document.getElementById('nav_list');
const linkNotBurger = document.querySelectorAll('.linkNotBurger');
const buttonClose = document.querySelector(".button_close");
const closeLine = document.querySelectorAll('.close_line');
const navBurger = document.getElementsByClassName('navburger');

function openhumberger() {
    menu.classList.toggle("navburger");

    for (let i = 0; i < closeLine.length; i++) {
        closeLine[i].classList.toggle("activeClose");
    }
    for (let i = 0; i < linkNotBurger.length; i++) {
        linkNotBurger[i].classList.toggle("linkBurger");
    }

    menu.classList.remove("closeButtone");
};

function closeHamburger() {
    menu.classList.toggle('navburger');
    menu.classList.toggle("closeButtone");
    for (let i = 0; i < closeLine.length; i++) {
        closeLine[i].classList.toggle("activeClose");
    }
    for (let i = 0; i < linkNotBurger.length; i++) {
        linkNotBurger[i].classList.toggle("linkBurger");
    }
}

buttonMobile.addEventListener("click", openhumberger);
buttonClose.addEventListener('click', closeHamburger);


document.addEventListener('mouseup', e => {
    let target = e.target;
    let its_menu = target == menu || menu.contains(target);
    let menu_is_active = menu.classList.contains('navburger');

    if (!its_menu && menu_is_active) {
        closeHamburger();
    }
});

linkNotBurger.forEach(element => {
    element.addEventListener('click', closeHamburger);
});

const login = document.getElementById('Login');
const loginPopUp = document.querySelector('.login_pop_up');
const loginPopUps = document.querySelectorAll('.login_pop_up')
const modal = document.querySelector('.modal');
const email = document.getElementById('email');

document.onclick = function (event) {
    if (event.target == login) {
        loginPopUp.classList.toggle('login_pop_up_active');
        modal.classList.toggle('modal_active');
    } else if (event.target == modal) {
        loginPopUp.classList.remove('login_pop_up_active');
        modal.classList.remove('modal_active');
    };
};

const buttonSend = document.querySelector('.bottom_button_login');
const input = document.getElementsByTagName("input");

buttonSend.addEventListener('click', () => {
    alert(`Your E-mail: ${input[1].value} Your password: ${input[2].value}`);
});


const topButtonLogin = document.querySelectorAll('.top_button_login');
const mediumLogin = document.querySelector('.medium_login');
const Register = document.getElementById('register');
const forgotYourPassword = document.querySelector('.Forgot_your_password');
const textGreate = document.getElementById('textGreate');

Register.addEventListener('click', greatLogin);

function greatLogin() {
    loginPopUp.classList.toggle('greate');
    if (modal.classList.contains('modal_active')) {
        loginPopUp.classList.toggle('mobile_great');
    };
    if (loginPopUp.classList.contains('greate')) {
        textGreate.innerHTML = 'Greate account';
        Register.innerHTML = 'Log in';
    } else {
        textGreate.innerHTML = 'Log in to your account';
        Register.innerHTML = 'Register';
    }
    topButtonLogin[0].classList.toggle('none');
    topButtonLogin[1].classList.toggle('none');
    mediumLogin.classList.toggle('none');
    forgotYourPassword.classList.toggle('none');
};

const loginmobile = document.querySelector('.active_login_popup');

loginmobile.addEventListener('click', (event) => {

    if (event.target == loginmobile) {
        loginPopUp.classList.toggle('login_pop_up_active');
        modal.classList.toggle('modal_active');
    } else if (event.target == modal) {
        loginPopUp.classList.remove('login_pop_up_active');
        modal.classList.remove('modal_active');
    };
})

// Слайдер
let offset = -645;

const slider = document.querySelector('.box_destinations');
const switchSlider = document.querySelectorAll('.destinations_signs');

const image3 = document.querySelector('.image3');
const image1 = document.querySelector('.image1');
const image2 = document.querySelector('.image2');


image1.addEventListener('click', function () {
    offset = offset + 845;
    switchSlider[0].classList.toggle('opacity_sign');
    switchSlider[1].classList.remove('opacity_sign');

    if (offset > 300) {
        offset = -1490;
        switchSlider[2].classList.toggle('opacity_sign');
        switchSlider[0].classList.remove('opacity_sign');
        switchSlider[1].classList.remove('opacity_sign');
    }
    slider.style.left = offset + 'px';
});

image2.addEventListener('click', function () {
    offset = offset - 1290;
    switchSlider[1].classList.toggle('opacity_sign');

    if (offset < -1000) {
        offset = -645;
        switchSlider[1].classList.add('opacity_sign');
        switchSlider[0].classList.remove('opacity_sign');
        switchSlider[2].classList.remove('opacity_sign');
    }
    slider.style.left = offset + 'px';
});


image3.addEventListener('click', function () {
    offset = offset - 845;
    switchSlider[2].classList.toggle('opacity_sign');
    switchSlider[1].classList.remove('opacity_sign');

    if (offset < -2134) {
        offset = 200;
        switchSlider[0].classList.toggle('opacity_sign');
        switchSlider[1].classList.remove('opacity_sign');
        switchSlider[2].classList.remove('opacity_sign');
    }
    slider.style.left = offset + 'px';
});

// Mobile version

const sliderMob = document.querySelector('.box_destinations_mob');
const leftSliderMob = document.querySelector('.destinations_turns1');
const rightSliderMob = document.querySelector('.destinations_turns2');
const signMobile = document.querySelectorAll('.destinations_signs');
console.log(signMobile);

offsetmob = 0;

rightSliderMob.addEventListener('click', () => {
    offsetmob = offsetmob + 360;
    if (offsetmob > 0) {
        signMobile[1].classList.toggle('opacity_sign');
        signMobile[2].classList.remove('opacity_sign');
        signMobile[0].classList.remove('opacity_sign');

    }
    if (offsetmob > 360) {
        signMobile[2].classList.toggle('opacity_sign');
        signMobile[1].classList.remove('opacity_sign');
        signMobile[0].classList.remove('opacity_sign');

    }
    if (offsetmob > 720) {
        offsetmob = 0;
        signMobile[0].classList.toggle('opacity_sign');
        signMobile[1].classList.remove('opacity_sign');
        signMobile[2].classList.remove('opacity_sign');

    }
    sliderMob.style.left = -offsetmob + 'px';
});

leftSliderMob.addEventListener('click', () => {
    offsetmob = offsetmob - 360;
    if (offsetmob < 0) {
        offsetmob = 720;
        signMobile[2].classList.toggle('opacity_sign');
        signMobile[1].classList.remove('opacity_sign');
        signMobile[0].classList.remove('opacity_sign');
    }
    if (offsetmob < 360 && offsetmob > 0) {
        signMobile[0].classList.toggle('opacity_sign');
        signMobile[2].classList.remove('opacity_sign');
        signMobile[1].classList.remove('opacity_sign');

    }
    if (offsetmob < 720) {
        signMobile[1].classList.toggle('opacity_sign');
        signMobile[0].classList.remove('opacity_sign');
        signMobile[2].classList.remove('opacity_sign');
    }
    sliderMob.style.left = -offsetmob + 'px';
});


console.log(
    `Score 125/100 \n
    1. Слайдер изображений в секции destinations +50 \n
    * на десктоп варианте при клике на урезанную картинку слева или справа изображение меняется по принципу карусели (например если нажать правую картинку та что была в центре на уезжает налево, а та что была видна наполовину оказывается справа). Слайдер может быть как конечным так и бесконечным - данный критерий не должен влиять на оценку + 20 \n
    * Три точки внизу отображают "номер слайда", то есть каждому слайду соответствует свой кружочек, который становится активным при нахождении соответствующего ему слайда в центре. На мобильном варианте картинка одна, но поверх нее появляются стрелочки навигации (можно сделать как карусель или же затемнять кнопку если слайдер достиг края) +20 \n
    * Анимации плавного перемещения для слайдера +10 \n
    2. Нажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап + 50 \n
    * логин попап соответствует верстке его закрытие происходит при клике вне попапа +25 \n
    * логин попап имеет 2 инпута (email и пароль) при нажатии на кнопку Sign In показывается браузерный алерт с введенными данными (для реализации можно использовать тег ) +25 \n
    3. Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету (То есть нажатие не закрывает модал а просто меняет его наполнение). +25 \n`
);