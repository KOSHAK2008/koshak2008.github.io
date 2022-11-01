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

// Carousel Pets

const carousel = document.getElementById('carousel');
const content = document.getElementById('content');
const next = document.querySelector('.pets-arrow-right');
const prev = document.querySelector('.pets-arrow-left');

const left = document.getElementById('left');
const contentLeft = document.getElementById('content-left');
const contentRight = document.getElementById('content-right');

const giantPands = document.getElementById('giantPands');
const eagles = document.getElementById('eagles');
const gorrilas = document.getElementById('gorrilas');
const twoToedSloth = document.getElementById('twoToedSloth');
const cheetahs = document.getElementById('cheetahs');
const penguins = document.getElementById('penguins');
const alligators = document.getElementById('alligators');
const gorillasSecond = document.getElementById('gorillasSecond');

const giantPandsLeft = document.getElementById('giantPandsLeft');
const eaglesLeft = document.getElementById('eaglesLeft');
const gorrilasLeft = document.getElementById('gorrilasLeft');
const twoToedSlothLeft = document.getElementById('twoToedSlothLeft');
const cheetahsLeft = document.getElementById('cheetahsLeft');
const penguinsLeft = document.getElementById('penguinsLeft');
const alligatorsLeft = document.getElementById('alligatorsLeft');
const gorillasSecondLeft = document.getElementById('gorillasSecondLeft');

const giantPandsRigth = document.getElementById('giantPandsRigth');
const eaglesRigth = document.getElementById('eaglesRigth');
const gorrilasRigth = document.getElementById('gorrilasRigth');
const twoToedSlothRigth = document.getElementById('twoToedSlothRigth');
const cheetahsRigth = document.getElementById('cheetahsRigth');
const penguinsRigth = document.getElementById('penguinsRigth');
const alligatorsRigth = document.getElementById('alligatorsRigth');
const gorillasSecondRigth = document.getElementById('gorillasSecondRigth');

let leftCardAnimals;
let leftActiveCardsAnimals;
let cardsAnimals;
let activeCardsAnimals;
let rigthCardsAnimals;
let rigthActiveCardsAnimals;


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let screenWidth;
let amount = 6;


let offset = 0;

next.addEventListener('click', function funcNext() {
    // if (screenWidth > 1000) {
    //     offset += 1160;
    //     if (offset > 2320) {
    //         offset = 0;
    //         funcLeftCardAnimals(amount);
    //     } if (offset == 1160) {
    //         funcCardAnimals(amount);

    //     } if (offset > 1160) {
    //         funcRigthCardAnimals(amount);
    //     }

    //     carousel.style.left = -offset + 'px';

    //     setTimeout(() => {
    //         next.addEventListener('click', funcNext);
    //     }, 1000);
    //     next.removeEventListener('click', funcNext);
    // }

    if (screenWidth > 1000) {
        offset += 1160;
        if (offset > 2320) {
            offset = 0;
            funcLeftCardAnimals(amount);
        } if (offset == 1160) {
            funcCardAnimals(amount);
        } if (offset > 1160) {
            funcRigthCardAnimals(amount);
        }

        carousel.style.left = -offset + 'px';
        setTimeout(() => {
            next.addEventListener('click', funcNext);
        }, 1000);
        next.removeEventListener('click', funcNext);
    } if (screenWidth == 1000) {
        offset += 940;
        if (offset > 1880) {
            offset = 0;
            funcLeftCardAnimals(amount);
        } if (offset == 940) {
            funcCardAnimals(amount);

        } if (offset > 1000) {
            funcRigthCardAnimals(amount);
        }

        carousel.style.left = -offset + 'px';
        setTimeout(() => {
            next.addEventListener('click', funcNext);
        }, 1000);
        next.removeEventListener('click', funcNext);
    } if (screenWidth < 1000) {
        offset += 620;
        if (offset > 1240) {
            offset = 0;
            funcLeftCardAnimals(amount);
        } if (offset == 620) {
            funcCardAnimals(amount);

        } if (offset > 620) {
            funcRigthCardAnimals(amount);
        }

        carousel.style.left = -offset + 'px';
        setTimeout(() => {
            next.addEventListener('click', funcNext);
        }, 1000);
        next.removeEventListener('click', funcNext);
    }
});


prev.addEventListener('click', function funcPrev() {

    // offset -= 1160;
    // if (offset < 0) {
    //     offset = 2320;
    //     funcRigthCardAnimals(amount);
    // } if (offset < 1161 && offset > 0) {

    //     funcCardAnimals(amount);
    // } if (offset == 0) {
    //     funcLeftCardAnimals(amount);
    // }

    // carousel.style.left = -offset + 'px';
    // setTimeout(() => {
    //     prev.addEventListener('click', funcPrev);
    // }, 1000);
    // prev.removeEventListener('click', funcPrev);

    if (screenWidth > 1000) {
        offset -= 1160;
        if (offset < 0) {
            offset = 2320;
            funcRigthCardAnimals(amount);
        } if (offset == 1160) {
            funcCardAnimals(amount);
        } if (offset == 0) {
            funcLeftCardAnimals(amount);
        }

        carousel.style.left = -offset + 'px';
        setTimeout(() => {
            prev.addEventListener('click', funcPrev);
        }, 1000);
        prev.removeEventListener('click', funcPrev);
    } if (screenWidth == 1000) {
        offset -= 940;
        if (offset < 0) {
            offset = 1880;
        } if (offset == 940) {
            funcCardAnimals(amount);
        } if (offset < 1880 && offset > 940) {
            funcRigthCardAnimals(amount);
        } if (offset > 0 && offset < 940) {
            funcLeftCardAnimals(amount);
        }

        carousel.style.left = -offset + 'px';
        setTimeout(() => {
            prev.addEventListener('click', funcPrev);
        }, 1000);
        prev.removeEventListener('click', funcPrev);
    } if (screenWidth < 1000) {
        offset -= 620;
        if (offset < 0) {
            offset = 1240;
        } if (offset == 200) {
            funcCardAnimals(amount);
        } if (offset > 620 && offset < 1240) {
            funcRigthCardAnimals(amount);
        } if (offset > 0 && offset < 620) {
            funcLeftCardAnimals(amount);
        }

        carousel.style.left = -offset + 'px';
        setTimeout(() => {
            prev.addEventListener('click', funcPrev);
        }, 1000);
        prev.removeEventListener('click', funcPrev);
    }

});


var oldWidth = window.innerWidth;
window.onresize = function () {
    var newWidth = window.innerWidth;
    if (newWidth != oldWidth) {

        let offset = 0;

        next.addEventListener('click', function funcNext() {
            if (newWidth > 1000) {
                offset += 1160;
                if (offset > 2320) {
                    offset = 0;
                    funcLeftCardAnimals(amount);
                } if (offset == 1160) {
                    funcCardAnimals(amount);
                } if (offset > 1160) {
                    funcRigthCardAnimals(amount);
                }

                carousel.style.left = -offset + 'px';
                setTimeout(() => {
                    next.addEventListener('click', funcNext);
                }, 1000);
                next.removeEventListener('click', funcNext);
            } if (newWidth == 1000) {
                offset += 940;
                if (offset > 1880) {
                    offset = 0;
                    funcLeftCardAnimals(amount);
                } if (offset == 940) {
                    funcCardAnimals(amount);

                } if (offset > 1000) {
                    funcRigthCardAnimals(amount);
                }

                carousel.style.left = -offset + 'px';
                setTimeout(() => {
                    next.addEventListener('click', funcNext);
                }, 1000);
                next.removeEventListener('click', funcNext);
            } if (newWidth < 1000) {
                offset += 620;
                if (offset > 1240) {
                    offset = 0;
                    funcLeftCardAnimals(amount);
                } if (offset == 620) {
                    funcCardAnimals(amount);

                } if (offset > 620) {
                    funcRigthCardAnimals(amount);
                }

                carousel.style.left = -offset + 'px';
                setTimeout(() => {
                    next.addEventListener('click', funcNext);
                }, 1000);
                next.removeEventListener('click', funcNext);
            }
        })

        offset = 0;

        prev.addEventListener('click', function funcPrev() {
            if (newWidth > 1000) {
                offset -= 1160;
                if (offset < 0) {
                    offset = 2320;
                    funcRigthCardAnimals(amount);
                } if (offset == 1160) {
                    funcCardAnimals(amount);
                } if (offset == 0) {
                    funcLeftCardAnimals(amount);
                }

                carousel.style.left = -offset + 'px';
                setTimeout(() => {
                    prev.addEventListener('click', funcPrev);
                }, 1000);
                prev.removeEventListener('click', funcPrev);
            } if (newWidth == 1000) {
                offset -= 940;
                if (offset < 0) {
                    offset = 1880;
                } if (offset == 940) {
                    funcCardAnimals(amount);
                } if (offset < 1880 && offset > 940) {
                    funcRigthCardAnimals(amount);
                } if (offset > 0 && offset < 940) {
                    funcLeftCardAnimals(amount);
                }

                carousel.style.left = -offset + 'px';
                setTimeout(() => {
                    prev.addEventListener('click', funcPrev);
                }, 1000);
                prev.removeEventListener('click', funcPrev);
            } if (newWidth < 1000) {
                offset -= 620;
                if (offset < 0) {
                    offset = 1240;
                } if (offset == 620) {
                    funcCardAnimals(amount);
                } if (offset > 620 && offset < 1240) {
                    funcRigthCardAnimals(amount);
                } if (offset > 0 && offset < 600) {
                    funcLeftCardAnimals(amount);
                }

                carousel.style.left = -offset + 'px';
                setTimeout(() => {
                    prev.addEventListener('click', funcPrev);
                }, 1000);
                prev.removeEventListener('click', funcPrev);
            }
        })

        funcCardAnimals(amount);
        funcLeftCardAnimals(amount);
        funcRigthCardAnimals(amount);
        oldWidth = newWidth;
    };
}


function funcCardAnimals(amount) {

    screenWidth = window.screen.width
    if (screenWidth < 1000) {
        amount = 4;
    } else { amount = 6 };

    cardsAnimals = [giantPands, eagles, gorrilas, twoToedSloth, cheetahs, penguins, alligators, gorillasSecond];
    activeCardsAnimals = [];

    while (activeCardsAnimals.length < amount) {
        let randomNumber = getRandomIntInclusive(0, cardsAnimals.length - 1);
        arrTime = cardsAnimals.splice(randomNumber, 1);
        activeCardsAnimals.push(arrTime[0])
    }

    activeCardsAnimals.forEach(e => {
        content.className = "pets-list";
        content.append(e);
    });

    cardsAnimals.forEach(e => {
        let div = document.createElement('div');
        div.className = "none";
        div.append(e);
    })

    if (screenWidth < 639) {
        content.classList.add('done');
    }
}

function funcLeftCardAnimals(amount) {

    screenWidth = window.screen.width
    if (screenWidth < 1000) {
        amount = 4;
    } else { amount = 6 };

    leftCardAnimals = [giantPandsLeft, eaglesLeft, gorrilasLeft, twoToedSlothLeft, cheetahsLeft, penguinsLeft, alligatorsLeft, gorillasSecondLeft];
    leftActiveCardsAnimals = [];

    while (leftActiveCardsAnimals.length < amount) {
        let randomNumber = getRandomIntInclusive(0, leftCardAnimals.length - 1);
        arrTime = leftCardAnimals.splice(randomNumber, 1);
        leftActiveCardsAnimals.push(arrTime[0])
    }

    leftActiveCardsAnimals.forEach(e => {
        contentLeft.append(e);
    });

    leftCardAnimals.forEach(e => {
        let div = document.createElement('div');
        div.className = "none";
        div.append(e);
    })
}

function funcRigthCardAnimals(amount) {

    screenWidth = window.screen.width
    if (screenWidth < 1000) {
        amount = 4;
    } else { amount = 6 };

    rigthCardsAnimals = [giantPandsRigth, eaglesRigth, gorrilasRigth, twoToedSlothRigth, cheetahsRigth, penguinsRigth, alligatorsRigth, gorillasSecondRigth];
    rigthActiveCardsAnimals = [];

    while (rigthActiveCardsAnimals.length < amount) {
        let randomNumber = getRandomIntInclusive(0, rigthCardsAnimals.length - 1);
        arrTime = rigthCardsAnimals.splice(randomNumber, 1);
        rigthActiveCardsAnimals.push(arrTime[0])
    }

    rigthActiveCardsAnimals.forEach(e => {
        contentRight.className = "pets-list";
        contentRight.append(e);
    });

    rigthCardsAnimals.forEach(e => {
        let div = document.createElement('div');
        div.className = "none";
        div.append(e);
    })

    if (screenWidth < 639) {
        contentRight.classList.add('done');
    }
}

funcCardAnimals(amount);
funcLeftCardAnimals(amount);
funcRigthCardAnimals(amount);


// Carousel testimonials
const testimonialsScroll = document.querySelector('.testimonials-scroll[type="range"]');
const testimonialsCard = document.querySelectorAll('.testimonials-card')
const testimonialsCards = document.querySelector('.testimonials-cards');

if (screenWidth < 1000) {
    testimonialsCard.forEach(() => {
        for (let i = 3; i < testimonialsCard.length; i++) {
            testimonialsCard[i].classList.add('done');
        }
    });
}

function carouselTestimonials() {
    let newValueTestimonialsCard = testimonialsScroll.value;
    testimonialsCards.style.left = -(newValueTestimonialsCard * 288) + 'px';

    screenWidth = window.screen.width
    if (screenWidth < 1581 && screenWidth > 999) {
        testimonialsCards.style.left = -(newValueTestimonialsCard * 323) + 'px';
    }
};

testimonialsScroll.addEventListener('input', carouselTestimonials);

var oldWidth = window.innerWidth;
window.onresize = function () {
    var newWidth = window.innerWidth;
    if (newWidth != oldWidth) {
        if (newWidth < 1000) {
            testimonialsCard.forEach(() => {
                for (let i = 3; i < testimonialsCard.length; i++) {
                    testimonialsCard[i].classList.add('done');
                }
            });
        } else {
            testimonialsCard.forEach(() => {
                for (let i = 3; i < testimonialsCard.length; i++) {
                    testimonialsCard[i].classList.remove('done');
                }
            })
        };
        oldWidth = newWidth;
    };
};

// Create Popap
const popaps = document.querySelectorAll('.popap');
const closePopap = document.querySelectorAll('.close-popap');
const overlay = document.querySelector('.overlay');
const testimonials = document.querySelector('.testimonials');


testimonialsCard[0].addEventListener('click', () => {
    popaps[0].classList.add('popap-active');
    popaps[0].classList.remove('popap');
    closePopap[0].classList.add('close-popap-active');
    closePopap[0].classList.remove('done');
    let lineLeftClose = document.createElement('div');
    closePopap[0].append(lineLeftClose);
    let lineRigthClose = document.createElement('div');
    closePopap[0].append(lineRigthClose);
    lineLeftClose.classList.add('left-line-close-popap');
    lineRigthClose.classList.add('right-line-close-popap');
    overlay.style.display = "block";
    closePopap[0].addEventListener('click', () => {
        popaps[0].classList.remove('popap-active');
        popaps[0].classList.add('popap');
        closePopap[0].classList.remove('close-popap-active');
        closePopap[0].classList.add('done');
        overlay.style.display = "none";

    });

    overlay.addEventListener('click', () => {
        popaps[0].classList.remove('popap-active');
        popaps[0].classList.add('popap');
        closePopap[0].classList.remove('close-popap-active');
        closePopap[0].classList.add('done');
    });

});

popaps[1].addEventListener('click', () => {
    popaps[1].classList.add('popap-active');
    popaps[1].classList.remove('popap');
    closePopap[1].classList.add('close-popap-active');
    closePopap[1].classList.remove('done');
    let lineLeftClose = document.createElement('div');
    closePopap[1].append(lineLeftClose);
    let lineRigthClose = document.createElement('div');
    closePopap[1].append(lineRigthClose);
    lineLeftClose.classList.add('left-line-close-popap');
    lineRigthClose.classList.add('right-line-close-popap');
    overlay.style.display = "block";
    closePopap[1].addEventListener('click', () => {
        popaps[1].classList.remove('popap-active');
        popaps[1].classList.add('popap');
        closePopap[1].classList.remove('close-popap-active');
        closePopap[1].classList.add('done');
        overlay.style.display = "none";
    });

    overlay.addEventListener('click', () => {
        popaps[1].classList.remove('popap-active');
        popaps[1].classList.add('popap');
        closePopap[1].classList.remove('close-popap-active');
        closePopap[1].classList.add('done');
    });

});

popaps[2].addEventListener('click', () => {
    popaps[2].classList.add('popap-active');
    popaps[2].classList.remove('popap');
    closePopap[2].classList.add('close-popap-active');
    closePopap[2].classList.remove('done');
    let lineLeftClose = document.createElement('div');
    closePopap[2].append(lineLeftClose);
    let lineRigthClose = document.createElement('div');
    closePopap[2].append(lineRigthClose);
    lineLeftClose.classList.add('left-line-close-popap');
    lineRigthClose.classList.add('right-line-close-popap');
    overlay.style.display = "block";
    closePopap[2].addEventListener('click', () => {
        popaps[2].classList.remove('popap-active');
        popaps[2].classList.add('popap');
        closePopap[2].classList.remove('close-popap-active');
        closePopap[2].classList.add('done');
        overlay.style.display = "none";
    });

    overlay.addEventListener('click', () => {
        popaps[2].classList.remove('popap-active');
        popaps[2].classList.add('popap');
        closePopap[2].classList.remove('close-popap-active');
        closePopap[2].classList.add('done');
    });

});

var oldWidth = window.innerWidth;
window.onresize = function () {

    var newWidth = window.innerWidth;
    if (newWidth != oldWidth) {
        if (newWidth === 320) {
            // testimonialsCard.forEach(() => {
            //     for (let i = 3; i < testimonialsCard.length; i++) {
            //         testimonialsCard[i].classList.add('done');
            //     }
            // });
        } if (newWidth < 640 && newWidth > 320) {
            // testimonialsCard.forEach(() => {
            //     for (let i = 3; i < testimonialsCard.length; i++) {
            //         testimonialsCard[i].classList.remove('done');
            //     }
            // })
        };
        oldWidth = newWidth;
    };
};




