// burger_menu
function burgerMenu() {
    const burger = document.getElementById('burger');
    const buttonBurger = document.getElementById('button-burger-close');
    const overlay = document.querySelector('.overlay');
    const headerDiv = document.getElementById('burger-icon');

    headerDiv.addEventListener('click', () => {
        burger.classList.remove('burger_none');
        overlay.style.display = "block";
    });

    buttonBurger.addEventListener('click', () => {
        burger.classList.add('burger_none');
        overlay.style.display = "none";
    });

    overlay.addEventListener('click', () => {
        burger.classList.add('burger_none');
        overlay.style.display = "none";
    })
}

burgerMenu();

// amount
const activePoint = document.querySelectorAll('.donate-price-dot');
const activePlacePoint = document.querySelectorAll('.donate-price-dot-active');
const activePrice = document.querySelectorAll('.donate-price-number');
const amount = document.getElementById('amount');



for (let i = 0; i < activePlacePoint.length; i++) {
    let probobly = activePrice[i].innerHTML.slice(1);

    activePlacePoint[i].addEventListener('click', () => {
        for (let i = 0; i < activePlacePoint.length; i++) {

            if (activePrice[i].classList.contains('donate-price-number-active')) {
                activePlacePoint[i].classList.remove('donate-price-dot-active-done');
                activePoint[i].classList.remove('donate-price-dot-active-done-dot');
                activePrice[i].classList.remove('donate-price-number-active');
                amount.classList.remove('donate-amount-input-focus');
            }
        }
        activePlacePoint[i].classList.add('donate-price-dot-active-done');
        activePoint[i].classList.add('donate-price-dot-active-done-dot');
        activePrice[i].classList.add('donate-price-number-active');
        amount.classList.add('donate-amount-input-focus');
        amount.value = probobly;
    });

}

amount.oninput = function () {

    let res = this.value
    if (res.length > 4) { this.value = (res.slice(0, 4)) };
    for (let i = 0; i < activePlacePoint.length; i++) {
        let probobly = activePrice[i].innerHTML.slice(1);

        if (amount.value == probobly) {
            for (let i = 0; i < activePlacePoint.length; i++) {

                if (activePrice[i].classList.contains('donate-price-number-active')) {
                    activePlacePoint[i].classList.remove('donate-price-dot-active-done');
                    activePoint[i].classList.remove('donate-price-dot-active-done-dot');
                    activePrice[i].classList.remove('donate-price-number-active');
                    amount.classList.remove('donate-amount-input-focus');
                }
            }
            activePlacePoint[i].classList.add('donate-price-dot-active-done');
            activePoint[i].classList.add('donate-price-dot-active-done-dot');
            activePrice[i].classList.add('donate-price-number-active');
        } else {
            activePlacePoint[i].classList.remove('donate-price-dot-active-done');
            activePoint[i].classList.remove('donate-price-dot-active-done-dot');
            activePrice[i].classList.remove('donate-price-number-active');
            amount.classList.remove('donate-amount-input-focus');
        }
    };
}


const fiveThousand = document.getElementById('fiveThousand');
const twoThousand = document.getElementById('twoThousand');
const oneThousand = document.getElementById('oneThousand');


screenWidth = window.screen.width
if (screenWidth < 1600 && screenWidth > 1000) {
    fiveThousand.classList.add('done');
    twoThousand.classList.remove('done');
    oneThousand.classList.remove('done');
} if (screenWidth < 1000 && screenWidth > 640) {
    fiveThousand.classList.add('done');
    twoThousand.classList.add('done');
    oneThousand.classList.remove('done');
} if (screenWidth < 640) {
    fiveThousand.classList.add('done');
    twoThousand.classList.add('done');
    oneThousand.classList.add('done');
}

var oldWidth = window.innerWidth;
window.onresize = function () {
    var newWidth = window.innerWidth;
    if (newWidth != oldWidth) {
        if (newWidth < 1600 && newWidth > 1000) {
            fiveThousand.classList.add('done');
            twoThousand.classList.remove('done');
            oneThousand.classList.remove('done');
        } if (newWidth < 1000 && newWidth > 640) {
            fiveThousand.classList.add('done');
            twoThousand.classList.add('done');
            oneThousand.classList.remove('done');
        } if (newWidth < 640) {
            fiveThousand.classList.add('done');
            twoThousand.classList.add('done');
            oneThousand.classList.add('done');
        }
        oldWidth = newWidth;
    };
};