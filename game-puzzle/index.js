console.log('Results еще не доделано (обязательно доделаю 26.10.2022 до вечера). Спасибо, что тратите время на проверку моей работы. Если возникнут какие либо сомнительные моменты, ПОЖАЛУЙСТА напишите в discord Anton Karko');

// Great elemets

const body = document.querySelector('body');
const container = document.createElement('div');
const gemPuzzle = document.createElement('div');
const sizePuzzle = document.createElement('div');
const sizePuzzleText = document.createElement('div');
const field = document.createElement('div');
const board = document.createElement('div');
const boardButtons = document.createElement('div');
const scoreBoardActive = document.createElement('div');
const startGame = document.createElement('button');
const saveButton = document.createElement('button');
const loadButton = document.createElement('button');
const soundButton = document.createElement('button');
const results = document.createElement('button');
const moveShow = document.createElement('span');
const timeShow = document.createElement('span');

// class add

container.classList.add('container');
gemPuzzle.classList.add('game_puzzle');
sizePuzzle.classList.add('size_puzzle');
sizePuzzleText.classList.add('size_puzzle_text');
boardButtons.classList.add('board_buttons');
scoreBoardActive.classList.add('board_score_active');
board.classList.add('board');
field.classList.add('field');
startGame.classList.add('start_game');
saveButton.classList.add('start_game');
loadButton.classList.add('start_game');
results.classList.add('start_game');
soundButton.classList.add('sound_button');
moveShow.classList.add('move_show');
timeShow.classList.add('time_show');

// add child

document.body.appendChild(container);
container.appendChild(gemPuzzle);
container.appendChild(sizePuzzle);
sizePuzzle.appendChild(sizePuzzleText);
gemPuzzle.appendChild(boardButtons);
gemPuzzle.appendChild(scoreBoardActive);
gemPuzzle.appendChild(board);
gemPuzzle.appendChild(field);
field.appendChild(board);
boardButtons.appendChild(startGame);
boardButtons.appendChild(soundButton);
boardButtons.appendChild(saveButton);
boardButtons.appendChild(loadButton);
boardButtons.appendChild(results);
scoreBoardActive.appendChild(moveShow);
scoreBoardActive.appendChild(timeShow);

let puzzle = [];
let size = 4;
let numberSize = 3;
let clickMove = 0;
let secLocal = 0;
let sec = 0;
let secTen = 0;
let min = 0;
let minTen = 0;
let secshow = false;


let radio = new Audio();
radio.src = './audio/game_board_003_52379.mp3';


sizePuzzleText.innerHTML = 'Size :';
startGame.innerHTML = 'Shuffle and start';
startGame.id = 'startGame';
soundButton.innerHTML = 'Sound on';
soundButton.id = 'sound';
saveButton.innerHTML = 'Save';
loadButton.innerHTML = 'Load';
results.innerHTML = 'Results';
moveShow.innerHTML = `Move: ${clickMove}`;
moveShow.id = 'move';
timeShow.innerHTML = `Time: 00 : 00`;
timeShow.id = 'time';

for (let i = 2; i < 8; i++) {
    const sizePuzzleChange = document.createElement('a');
    sizePuzzleChange.classList.add('size_puzzle_change');
    sizePuzzle.appendChild(sizePuzzleChange);
}

const sizeAll = document.querySelectorAll('.size_puzzle_change');

generatePuzzle();
createCells();
const cells = document.querySelectorAll('.cell');

for (let element of sizeAll) {
    element.textContent = `${numberSize}x${numberSize}`;
    if (numberSize === size) {
        element.classList.add('size_active');
    }
    numberSize++
}

matrix = getMatrix(
    puzzle.map((item) => item.value)
);

let winFlatArray = puzzle.map((item) => item.value);

matrix = getMatrix(shuffleArray(matrix.flat()));
setPositionItems(matrix);

sizeAll[0].addEventListener('click', () => {
    size = 3;
    shudleCellsOfSizeButton();
});

sizeAll[1].addEventListener('click', () => {
    size = 4;
    shudleCellsOfSizeButton();
});

sizeAll[2].addEventListener('click', () => {
    size = 5;
    shudleCellsOfSizeButton();
});

sizeAll[3].addEventListener('click', () => {
    size = 6;
    shudleCellsOfSizeButton();
});

sizeAll[4].addEventListener('click', () => {
    size = 7;
    shudleCellsOfSizeButton();
});

sizeAll[5].addEventListener('click', () => {
    size = 8;
    shudleCellsOfSizeButton();
});

startGame.addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell');
    showNumberCell();
    const shuffledArray = shuffleArray(matrix.flat());
    matrix = getMatrix(shuffledArray);
    setPositionItems(matrix);
    clickMove = 0;
    moveShow.innerHTML = `Move: ${clickMove}`;
    inversFunc();
    time();
});

let blankNumber = size ** 2;

board.addEventListener('mousedown', (event) => {
    const buttonNode = event.target.closest('button');
    if (!buttonNode) return
    if (buttonNode.innerHTML === '') {
        alert('Please, click to button "Shuffle and start"');
        return
    }

    const empty = document.getElementById(`${size ** 2}`);
    empty.ondragover = allowDrop;
    empty.ondrop = drop;

    const buttonNumber = Number(buttonNode.id);
    const buttonCoords = findCoordinatesbyNumber(buttonNumber, matrix);
    const blankCoords = findCoordinatesbyNumber(blankNumber, matrix);
    const isValid = isValidForSwap(buttonCoords, blankCoords);
    if (isValid) {
        buttonNode.setAttribute('draggable', true);
        buttonNode.ondragstart = drag;

        radio.play();
        countMove();
    }

    function drag(event) {
        event.dataTransfer.setData('id', event.target.id);
    }

    function allowDrop(event) {
        event.preventDefault();
    };

    function drop(event) {
        // let itemId = event.dataTransfer.getData('id');
        swap(blankCoords, buttonCoords, matrix);
        setPositionItems(matrix);
    }
})

board.addEventListener('click', (event) => {
    const buttonNode = event.target.closest('button');
    if (!buttonNode) return
    if (buttonNode.innerHTML === '') {
        alert('Please, click to button "Shuffle and start"');
        return
    }

    const buttonNumber = Number(buttonNode.id);
    const buttonCoords = findCoordinatesbyNumber(buttonNumber, matrix);
    const blankCoords = findCoordinatesbyNumber(blankNumber, matrix);
    const isValid = isValidForSwap(buttonCoords, blankCoords);
    if (isValid) {
        swap(blankCoords, buttonCoords, matrix);
        setPositionItems(matrix);
        radio.play();
        countMove();
    }
});

board.addEventListener('mouseout', (event) => {
    const buttonNode = event.target.closest('button');
    if (!buttonNode) return
    buttonNode.setAttribute('draggable', false);
});


function inversFunc() {
    let invers = 0;
    if (size === 3) {
        let nowMatrix = matrix.flat();
        invers = 0;
        for (let g of nowMatrix) {
            for (let z = g; z < nowMatrix.length; z++) {
                if (g > nowMatrix[z])
                    invers = invers + 1;
            }

        } console.log(invers);
        if (invers % 2 === 0) {
            for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                    const value = matrix[y][x];
                    const node = cells[value - 1];
                    setNodeStyles(node, x, y);
                }
            }
        } else {
            matrix = getMatrix(shuffleArray(matrix.flat()));
            setPositionItems(matrix);
            inversFunc();
        }
    }
    if (size === 4) {
        let nowMatrix = matrix.flat();
        invers = 0;
        for (let g of nowMatrix) {
            for (let z = g; z < nowMatrix.length; z++) {
                if (g > nowMatrix[z])
                    invers = invers + 1;
            }

        } console.log(invers);
        if (invers % 2 !== 0) {
            for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                    const value = matrix[y][x];
                    const node = cells[value - 1];
                    setNodeStyles(node, x, y);
                }
            }
        } else {
            matrix = getMatrix(shuffleArray(matrix.flat()));
            setPositionItems(matrix);
            inversFunc();
        }

    }

}

function generatePuzzle() {
    for (i = 1; i <= size ** 2; i++) {
        puzzle.push({
            value: i,
            disabled: false,
        });
    }
}

function createCells() {
    for (let puzzleItem of puzzle) {
        const cellEmpty = puzzle.find(item => item.value === puzzle.length);
        cellEmpty.disabled = true;
        const cell = document.createElement('button');
        cell.classList.add('cell');
        cell.style.width = `${100 / size}%`;
        cell.style.height = `${100 / size}%`;
        board.appendChild(cell);
        if (puzzleItem.disabled) cell.classList.add('background_none');
        cell.id = `${puzzleItem.value}`;
    }
};

function getMatrix(arr) {
    let matrix;
    if (size === 3) {
        matrix = [[], [], []];
    } else if (size === 4) {
        matrix = [[], [], [], []];
    } else if (size === 5) {
        matrix = [[], [], [], [], []];
    } else if (size === 6) {
        matrix = [[], [], [], [], [], []];
    } else if (size === 7) {
        matrix = [[], [], [], [], [], [], []];
    } else if (size === 8) {
        matrix = [[], [], [], [], [], [], [], []];
    }
    let x = 0;
    let y = 0;

    for (let i = 0; i < arr.length; i++) {
        if (x >= size) {
            y++;
            x = 0;
        }

        matrix[y][x] = arr[i];
        x++;
    }

    return matrix;

}

function setPositionItems(matrix) {
    const cells = document.querySelectorAll('.cell');

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            const value = matrix[y][x];
            const node = cells[value - 1];
            setNodeStyles(node, x, y);
        }
    }
}

function setNodeStyles(node, x, y) {
    const shiftPs = 100;
    node.style.transform = `translate3d(${x * shiftPs}%, ${y * shiftPs}%, 0)`
}

function shuffleArray(arr) {
    return arr
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
}

function findCoordinatesbyNumber(number, matrix) {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] === number) {
                return { x, y }
            }
        }
    }
    return null;
}

function isValidForSwap(coords1, coords2) {
    const diffX = Math.abs(coords1.x - coords2.x);
    const diffY = Math.abs(coords1.y - coords2.y);
    return (diffX === 1 || diffY === 1) && (coords1.x === coords2.x || coords1.y === coords2.y);
}

function showNumberCell() {
    const cells = document.querySelectorAll('.cell');
    for (let puzzleItem of cells) {
        puzzleItem.innerHTML = `${puzzleItem.id}`;
        if (puzzleItem.disabled) puzzleItem.innerHTML = '';
    }
}

function countMove() {
    clickMove++;
    moveShow.innerHTML = `Move: ${clickMove}`;
}

function swap(coords1, coords2, matrix) {
    const coords1Number = matrix[coords1.y][coords1.x];
    matrix[coords1.y][coords1.x] = matrix[coords2.y][coords2.x];
    matrix[coords2.y][coords2.x] = coords1Number;

    if (isWon(matrix)) {
        addWonClass();
    }
}

function isWon(matrix) {
    const flatMatrix = matrix.flat();
    for (let i = 0; i < winFlatArray.length; i++) {
        if (flatMatrix[i] !== winFlatArray[i]) {
            return false;
        }
    }
    return true;
}

function time() {
    if (secshow === false) {
        secshow = setInterval(function () {
            showTime();
            secLocal++;
            sec++;
        }, 1000);
    } else {
        secshow = true;
        secLocal = 0;
        sec = 0;
        secTen = 0;
        min = 0;
        minTen = 0;
    }
};

function showTime() {

    if (sec > 9) {
        sec = 0;
        secTen++;
    }
    if (secTen > 5) {
        secTen = 0;
        min++
    }
    if (min > 9) {
        min = 0;
        minTen++
    }
    timeShow.innerHTML = `Time: ${minTen}${min} : ${secTen}${sec}`;
}

function addWonClass() {
    setTimeout(() => {
        createResults();
        board.classList.add('game_won');
        setTimeout(() => {
            showTime();
            alert(`«Ура! Вы решили головоломку за ${minTen}${min} : ${secTen}${sec} и ${clickMove} ходов!»`);
            board.classList.remove('game_won');
            localStorage.setItem(`results`, JSON.stringify(arrResults));
            showNumberCell();
            const shuffledArray = shuffleArray(matrix.flat());
            matrix = getMatrix(shuffledArray);
            setPositionItems(matrix);
            clickMove = 0;
            moveShow.innerHTML = `Move: ${clickMove}`;
            time();

        }, 1000);
    }, 500);
}

function activeSize() {
    for (let i = 0; i < sizeAll.length; i++) {
        if (i === size - 3) {
            sizeAll[i].classList.add('size_active');
        } else sizeAll[i].classList.remove('size_active');

    }
};

function shudleCellsOfSizeButton() {
    puzzle = [];
    blankNumber = size ** 2;
    const cells = document.querySelectorAll('.cell');
    for (let i = 0; i < cells.length; i++) {
        let elem = document.getElementById(`${i + 1}`);
        elem.parentNode.removeChild(elem);
    }
    generatePuzzle();
    createCells();
    activeSize();
    matrix = getMatrix(
        puzzle.map((item) => item.value)
    );
    winFlatArray = puzzle.map((item) => item.value);
    matrix = getMatrix(shuffleArray(matrix.flat()));
    setPositionItems(matrix);
};

//create Results 
function createResults() {
    arrResults = JSON.parse(localStorage.results);
    const sizeActive = document.querySelector('.size_active');
    resultsList = {
        size: sizeActive.innerHTML,
        move: clickMove,
        second: secLocal,
    }
    if (arrResults.length === 10) {
        arrResults.push(resultsList);
        sortMyresolts(arrResults);
        arrResults.pop(resultsList);

    } else {
        arrResults.push(resultsList);
        sortMyresolts(arrResults);
    }

    localStorage.setItem('results', JSON.stringify(arrResults));
}

function sortMyresolts(arr) {

    function compareNumeric(a, b) {
        if (a.second > b.second) return 1;
        if (a.second == b.second) return 0;
        if (a.second < b.second) return -1;
    }
    arr.sort(compareNumeric);

}


// Sound mute

soundButton.onclick = function () {
    if (radio.muted === true) {
        soundButton.innerHTML = 'Sound on'
        radio.muted = false;
    } else {
        soundButton.innerHTML = 'Sound off'
        soundButton.classList.add('red');
        radio.muted = true;
    }
}

// Save game

saveButton.addEventListener('click', () => {

    localStorage.setItem('array', JSON.stringify(matrix));
    localStorage.setItem('move', JSON.stringify(clickMove));
    localStorage.setItem('time', JSON.stringify(`${minTen}${min} : ${secTen}${sec} :${secLocal}`));
})

// Load game

loadButton.addEventListener('click', () => {
    matrix = JSON.parse(localStorage.getItem("array"));
    size = matrix.length;
    puzzle = [];
    blankNumber = size ** 2;
    const cells = document.querySelectorAll('.cell');
    for (let i = 0; i < cells.length; i++) {
        let elem = document.getElementById(`${i + 1}`);
        elem.parentNode.removeChild(elem);
    }
    generatePuzzle();
    createCells();
    setPositionItems(matrix);
    showNumberCell();
    winFlatArray = puzzle.map((item) => item.value);
    clickMove = JSON.parse(localStorage.getItem("move"));
    secLoad = JSON.parse(localStorage.getItem("time"));
    const secload = secLoad.split('');
    const secLocalLoad = secLoad.split(':');
    time();
    minTen = secload[0];
    min = secload[1];
    secTen = secload[5];
    sec = secload[6];
    secLocal = Number(secLocalLoad[2]);
    moveShow.innerHTML = `Move: ${clickMove}`;
    timeShow.innerHTML = `Time: ${minTen}${min} : ${secTen}${sec}`;
})

// Add Results 

window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('results')) {
        createResultsList();
    } else {
        for (let i = 0; i < 10; i++) {

            const tableRowResults = document.createElement('tr');
            tableRowResults.classList.add('table_row_results');
            tableBody.appendChild(tableRowResults);

            const tableBodyTextSize = document.createElement('td');
            const tableBodyTextNumber = document.createElement('td');
            const tableBodyTextMove = document.createElement('td');
            const tableBodyTextSecond = document.createElement('td');

            tableBodyTextNumber.classList.add('table_body_text_number');
            tableBodyTextSize.classList.add('table_body_text_size');
            tableBodyTextMove.classList.add('table_body_text_move');
            tableBodyTextSecond.classList.add('table_body_text_second');

            tableBodyTextNumber.innerHTML = `${i + 1}`;
            tableBodyTextSize.innerHTML = ``;
            tableBodyTextMove.innerHTML = ``;
            tableBodyTextSecond.innerHTML = ``;

            tableRowResults.appendChild(tableBodyTextNumber);
            tableRowResults.appendChild(tableBodyTextSize);
            tableRowResults.appendChild(tableBodyTextMove);
            tableRowResults.appendChild(tableBodyTextSecond);

        }
        let arrResults = [];
        localStorage.setItem('results', JSON.stringify(arrResults));
    }
});

results.addEventListener('click', () => {

    arrResults = JSON.parse(localStorage.results);
    const listTableBody = document.querySelectorAll('.table_row_results');
    if ((listTableBody.length !== arrResults.length) || (listTableBody.length === 10)) {
        for (let i = 0; i < listTableBody.length; i++) {
            listTableBody[i].parentNode.removeChild(listTableBody[i]);
        }
        createResultsList();
    }

    for (let i = 0; i < arrResults.length; i++) {
        const tableBodyTextNumber = document.querySelectorAll('table_body_text_number');
        const tableBodyTextSize = document.querySelectorAll('table_body_text_size');
        const tableBodyTextMove = document.querySelectorAll('table_body_text_move');
        const tableBodyTextSecond = document.querySelectorAll('table_body_text_second');

        tableBodyTextNumber.innerHTML = `${i + 1}`;
        tableBodyTextSize.innerHTML = `${arrResults[i].size}`;
        tableBodyTextMove.innerHTML = `${arrResults[i].move}`;
        tableBodyTextSecond.innerHTML = `${arrResults[i].second}`;
    }

    const tableActive = document.querySelector('table');
    if (tableActive.classList.contains('onTable')) {
        tableActive.classList.remove('onTable');
    } else tableActive.classList.add('onTable');

});

document.addEventListener('click', (e) => {
    const tableActive = document.querySelector('table');
    if (e.target == results) {
        tableActive.classList.add('onTable');
    } else if (e.target !== tableActive) {
        tableActive.classList.remove('onTable');
    } else tableActive.classList.add('onTable');
});


// Add Table

const table = document.createElement('table');
table.classList.add('table');
gemPuzzle.appendChild(table);

const tableHeader = document.createElement('thead');
tableHeader.classList.add('table_header');
table.appendChild(tableHeader);

const tableRowOne = document.createElement('tr');
tableRowOne.classList.add('table_header');
tableHeader.appendChild(tableRowOne);

const tableHeaderTextNumber = document.createElement('th');
const tableHeaderTextSize = document.createElement('th');
const tableHeaderTextMove = document.createElement('th');
const tableHeaderTextSecond = document.createElement('th');

tableHeaderTextNumber.classList.add('table_header_text');
tableHeaderTextSize.classList.add('table_header_text');
tableHeaderTextMove.classList.add('table_header_text');
tableHeaderTextSecond.classList.add('table_header_text');
tableRowOne.appendChild(tableHeaderTextNumber);
tableRowOne.appendChild(tableHeaderTextSize);
tableRowOne.appendChild(tableHeaderTextMove);
tableRowOne.appendChild(tableHeaderTextSecond);

tableHeaderTextNumber.innerHTML = `Best game`;
tableHeaderTextSize.innerHTML = `Size`;
tableHeaderTextMove.innerHTML = `Move`;
tableHeaderTextSecond.innerHTML = `Second`;

const tableBody = document.createElement('tbody');
tableBody.classList.add('table_body');
table.appendChild(tableBody);

function createResultsList() {

    arrResults = JSON.parse(localStorage.results);


    for (let i = 0; i < arrResults.length; i++) {

        const tableRowResults = document.createElement('tr');
        tableRowResults.classList.add('table_row_results');
        tableBody.appendChild(tableRowResults);

        const tableBodyTextSize = document.createElement('td');
        const tableBodyTextNumber = document.createElement('td');
        const tableBodyTextMove = document.createElement('td');
        const tableBodyTextSecond = document.createElement('td');

        tableBodyTextNumber.classList.add('table_body_text_number');
        tableBodyTextSize.classList.add('table_body_text_size');
        tableBodyTextMove.classList.add('table_body_text_move');
        tableBodyTextSecond.classList.add('table_body_text_second');

        tableBodyTextNumber.innerHTML = `${i + 1}`;
        tableBodyTextSize.innerHTML = `${arrResults[i].size}`;
        tableBodyTextMove.innerHTML = `${arrResults[i].move}`;
        tableBodyTextSecond.innerHTML = `${arrResults[i].second}`;

        tableRowResults.appendChild(tableBodyTextNumber);
        tableRowResults.appendChild(tableBodyTextSize);
        tableRowResults.appendChild(tableBodyTextMove);
        tableRowResults.appendChild(tableBodyTextSecond);

    }

}

const closeButton = document.createElement('div');
const leftLineClose = document.createElement('div');
const rightLineClose = document.createElement('div');

closeButton.classList.add('close_button');
leftLineClose.classList.add('left-line_close');
rightLineClose.classList.add('right-line_close');
closeButton.appendChild(leftLineClose);
closeButton.appendChild(rightLineClose);
table.appendChild(closeButton);
