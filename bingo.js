console.log("bingo.js loaded!");
let draw = document.getElementById("draw");
let allCards = [];
let win = new Array(25);
console.log(win);
let bingoScreen = document.getElementById("win");

// FREDDY FAZBEAR JUMPSCARE MODE
let wasThatTheBiteof87 = true;

// rng function
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

async function bingoWinner() {
    bingoScreen.setAttribute("style", 'animation: bingoIn 2s; display: flex;');
    await new Promise(resolve => setTimeout(resolve, 3000));
    bingoScreen.setAttribute("style", 'animation: bingoOut 1s; display: none;');
}

async function biteof87() {
    let freddy = document.getElementById("freddy");
    let music = document.getElementById("music");
    freddy.muted = false;
    music.muted = true;
    freddy.playsInline = true;
    freddy.style.display = "flex";
    await freddy.play().catch(err => console.log(err));
    freddy.onended = () => {
        freddy.style.display = "none";
        freddy.currentTime = 0;
        music.muted = false;
    };
}

function end() {
    console.log('bingo');
    if (wasThatTheBiteof87 === true) { biteof87(); }
    else { bingoWinner(); }
}

// win check
function winningTicket() {
    console.log(win);

    // HORIZONTAL
    if (win[0] && win[1] && win[2] && win[3] && win[4] === 'x') { end(); }
    if (win[5] && win[6] && win[7] && win[8] && win[9] === 'x') { end(); }
    if (win[10] && win[11] && win[12] && win[13] && win[14] === 'x') { end(); }
    if (win[15] && win[16] && win[17] && win[18] && win[19] === 'x') { end(); }
    if (win[20] && win[21] && win[22] && win[23] && win[24] === 'x') { end(); }

    // VERTICAL
    if (win[0] === 'x' && win[5] === 'x' && win[10] === 'x' && win[15] === 'x' && win[20] === 'x') { end(); }
    if (win[1] === 'x' && win[6] === 'x' && win[11] === 'x' && win[16] === 'x' && win[21] === 'x') { end(); }
    if (win[2] === 'x' && win[7] === 'x' && win[12] === 'x' && win[17] === 'x' && win[22] === 'x') { end(); }
    if (win[3] === 'x' && win[8] === 'x' && win[13] === 'x' && win[18] === 'x' && win[23] === 'x') { end(); }
    if (win[4] === 'x' && win[9] === 'x' && win[14] === 'x' && win[19] === 'x' && win[24] === 'x') { end(); }

    // DIAGONALS
    if (win[0] === 'x' && win[6] === 'x' && win[12] === 'x' && win[18] === 'x' && win[24] === 'x') { end(); }
    if (win[4] === 'x' && win[8] === 'x' && win[12] === 'x' && win[16] === 'x' && win[20] === 'x') { end(); }

    // 4 CORNERS
    if (win[0] === 'x' && win[4] === 'x' && win[20] === 'x' && win[24] === 'x') { end(); }

    // INNER DIAMOND
    if (win[7] === 'x' && win[11] === 'x' && win[13] === 'x' && win[17] === 'x') { end(); }

    // OUTER DIAMOND
    if (
        win[2] === 'x' && win[6] === 'x' && win[10] === 'x' &&
        win[16] === 'x' && win[22] === 'x' && win[18] === 'x' &&
        win[14] === 'x' && win[8] === 'x'
    ) { end(); }
}

// match card
function matcher(drawResult) {
    for (let allCheck = 0, i = 1; allCheck < allCards.length; allCheck++, i++) {
        if (drawResult == allCards[allCheck]) {
            let boxId = 'box' + i;
            boxId = document.getElementById(boxId);
            boxId.setAttribute('class', 'tantos');
            win[allCheck] = 'x';
        } else { }
    }
}

// draw number
let drawHistory = [];
function drawNum() {
    while (true) {
        let drawResult = random(1, 75);
        if (drawHistory.includes(drawResult)) { }
        else {
            draw.innerHTML = drawResult;
            drawHistory.push(drawResult);
            console.log(drawResult);
            matcher(drawResult);
            break;
        }
    }

    if (drawHistory.length > 75) {
        draw.innerHTML = "Finsihed";
        drawHistory = [];
    }

    drawHistory.sort();
    console.log(drawHistory);
    console.log(win);
    winningTicket();
}

function clearPrev() {
    document.getElementById("draw").innerHTML = '';
    allCards = [];
    win = new Array(25);
    win[12] = 'x';
    for (let i = 1; i < 26; i++) {
        let boxId = document.getElementById('box' + i);
        boxId.setAttribute('class', '');
    }
}

// Bingo Card Generator
function bingoCard() {
    clearPrev();
    drawHistory = [];
    cardNum = [];
    const free = "FREE";
    document.getElementById("box13").innerHTML = free;

    let cardHist = [];

    // B (1-15)
    for (let i = 0; i < 5; i++) {
        let b = i + 1;
        let boxId = "box" + b;

        while (true) {
            let randomCard = random(1, 16);
            if (cardHist.includes(randomCard)) { }
            else {
                randomCard = randomCard;
                cardHist.push(randomCard);
                document.getElementById(boxId).innerHTML = randomCard;
                document.getElementById(boxId).value = randomCard;
                allCards.push(randomCard);
                break;
            }
        }
    }

    cardHist = [];

    // I (16-30)
    for (let i = 5; i < 10; i++) {
        let b = i + 1;
        let boxId = "box" + b;

        while (true) {
            let randomCard = random(16, 31);
            if (cardHist.includes(randomCard)) { }
            else {
                randomCard = randomCard;
                cardHist.push(randomCard);
                document.getElementById(boxId).innerHTML = randomCard;
                document.getElementById(boxId).value = randomCard;
                allCards.push(randomCard);
                break;
            }
        }
    }

    cardHist = [];

    // N (31-45)
    for (let i = 10; i < 15; i++) {
        let b = i + 1;
        let boxId = "box" + b;

        if (b == 13) {
            allCards.push('FREE');
            continue;
        }

        while (true) {
            let randomCard = random(31, 46);
            if (cardHist.includes(randomCard)) { }
            else {
                randomCard = randomCard;
                cardHist.push(randomCard);
                document.getElementById(boxId).innerHTML = randomCard;
                document.getElementById(boxId).value = randomCard;
                allCards.push(randomCard);
                break;
            }
        }
    }

    cardHist = [];

    // G (46-60)
    for (let i = 15; i < 20; i++) {
        let b = i + 1;
        let boxId = "box" + b;

        while (true) {
            let randomCard = random(46, 61);
            if (cardHist.includes(randomCard)) { }
            else {
                randomCard = randomCard;
                cardHist.push(randomCard);
                document.getElementById(boxId).innerHTML = randomCard;
                document.getElementById(boxId).value = randomCard;
                allCards.push(randomCard);
                break;
            }
        }
    }

    cardHist = [];

    // O (61-75)
    for (let i = 20; i < 25; i++) {
        let b = i + 1;
        let boxId = "box" + b;

        while (true) {
            let randomCard = random(61, 76);
            if (cardHist.includes(randomCard)) { }
            else {
                cardHist.push(randomCard);
                document.getElementById(boxId).innerHTML = randomCard;
                document.getElementById(boxId).value = randomCard;
                allCards.push(randomCard);
                break;
            }
        }
    }

    console.log(allCards);
}

function tantos(id, classss) {
    let boxId = document.getElementById(id);
    if (boxId.className == 'tantos') {
        boxId.setAttribute('class', '');
    }
    else {
        boxId.setAttribute('class', 'tantos');
    }
    console.log(classss);
}

