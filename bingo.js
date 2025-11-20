console.log("bingo.js loaded!");
let draw = document.getElementById("draw")
let allCards = []
let win = new Array(25)
win[12] = 0
console.log(win)
//rng function
function random(min,max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min;
}

async function biteof87() {
    let freddy = document.getElementById("freddy");
    let music = document.getElementById("music");
    freddy.muted = false;
    music.muted = true
    freddy.playsInline = true;
    freddy.style.display = "flex";
    await freddy.play().catch(err => console.log(err));
    freddy.onended = () => {
        freddy.style.display = "none";
        freddy.currentTime = 0;
        music.muted = false
    };
}

//win check
function winningTicket(){
    // HORIZONTAL
    if (win[0]&&win[1]&&win[2]&&win[3]&&win[4]===0) {biteof87()};
    if (win[5]&&win[6]&&win[7]&&win[8]&&win[9]===0) {biteof87()};
    if (win[10]&&win[11]&&win[12]&&win[13]&&win[14]===0) {biteof87()};
    if (win[15]&&win[16]&&win[17]&&win[18]&&win[19]===0) {biteof87()};
    if (win[20]&&win[21]&&win[22]&&win[23]&&win[24]===0) {biteof87()};

    // VERTICAL
    if (win[0]===0 && win[5]===0 && win[10]===0 && win[15]===0 && win[20]===0) {biteof87()};
    if (win[1]===0 && win[6]===0 && win[11]===0 && win[16]===0 && win[21]===0) {biteof87()};
    if (win[2]===0 && win[7]===0 && win[12]===0 && win[17]===0 && win[22]===0) {biteof87()};
    if (win[3]===0 && win[8]===0 && win[13]===0 && win[18]===0 && win[23]===0) {biteof87()};
    if (win[4]===0 && win[9]===0 && win[14]===0 && win[19]===0 && win[24]===0) {biteof87()};

    // DIAGONALS
    if (win[0]===0 && win[6]===0 && win[12]===0 && win[18]===0 && win[24]===0) {biteof87()};
    if (win[4]===0 && win[8]===0 && win[12]===0 && win[16]===0 && win[20]===0) {biteof87()};

    // 4 CORNERS
    if (win[0]===0 && win[4]===0 && win[20]===0 && win[24]===0) {biteof87()}

    // INNER DIAMOND 
    if (win[7]===0 && win[11]===0 && win[13]===0 && win[17]===0) {biteof87()};

    // OUTER DIAMOND 
    if(
        win[2]===0 && win[6]===0 && win[10]===0 && 
        win[16]===0 && win[22]===0 && win[18]===0 &&
        win[14]===0 && win[8]===0
    ) {biteof87()};
}

//match card 
function matcher(drawResult){
    for(let allCheck = 0, i = 1; allCheck < allCards.length; allCheck++, i++){
        if(drawResult == allCards[allCheck]){
            let boxId = 'box' + i
            boxId = document.getElementById(boxId)
            boxId.setAttribute('class', 'tantos')
            win[allCheck] = 0
        }
        else{
        }
    }
}

//draw number
let drawHistory = []
function drawNum(){
    while (true){
        let drawResult = random(1, 75)
        if(drawHistory.includes(drawResult)){}
        else{
            draw.innerHTML=drawResult
            drawHistory.push(drawResult)
            console.log(drawResult)
            matcher(drawResult)
            break
        }
    }

    if(drawHistory.length > 75){
        draw.innerHTML="Finsihed"
        drawHistory = []
    }

    drawHistory.sort()
    console.log(drawHistory)
    console.log(win)
    winningTicket()
}

function clearPrev(){
        document.getElementById("draw").innerHTML = ''
        allCards = []
        win[12] = 0
        win = new Array(25)
        for(let i=1;i<26;i++){
            let boxId = document.getElementById('box' + i)
            boxId.setAttribute('class', '')
        }

    }
    
// Bingo Card Generator
function bingoCard(){
    clearPrev()
    drawHistory = []
    cardNum = []
    const free = "FREE"
    document.getElementById("box13").innerHTML=free

    let cardHist = []
    //B (1-15)
    for (let i = 0; i < 5; i++){
        //Assign box number
        let b = i + 1
        let boxId = "box" + b

        //Show to screen
        while (true){
            let randomCard = random(1,16)
            if (cardHist.includes(randomCard)){}
            else{
                randomCard = randomCard
                cardHist.push(randomCard)
                document.getElementById(boxId).innerHTML=randomCard
                document.getElementById(boxId).value = randomCard
                allCards.push(randomCard)
                break
            }
        } 
    }

    cardHist = []
    //I (16-30)
    for (let i = 5; i < 10; i++){
        //Assign box number
        let b = i + 1
        let boxId = "box" + b

        //Show to screen
        while (true){
            let randomCard = random(16,31)
            if (cardHist.includes(randomCard)){}
            else{
                randomCard = randomCard
                cardHist.push(randomCard)
                document.getElementById(boxId).innerHTML=randomCard
                document.getElementById(boxId).value = randomCard
                allCards.push(randomCard)
                break
            }
        } 
    }

    cardHist = []
    //N (31-45)
    for (let i = 10; i < 15; i++){
        //Assign box number
        let b = i + 1
        let boxId = "box" + b

        //Skip free
        if (b == 13){
            allCards.push('FREE')
            continue
        }

       //Show to screen
        while (true){
            let randomCard = random(31,46)
            if (cardHist.includes(randomCard)){}
            else{
                randomCard = randomCard
                cardHist.push(randomCard)
                document.getElementById(boxId).innerHTML=randomCard
                document.getElementById(boxId).value = randomCard
                allCards.push(randomCard)
                break
            }
        } 
    }

    cardHist = []
    //G (46-60)
    for (let i = 15; i < 20; i++){
        //Assign box number
        let b = i + 1
        let boxId = "box" + b

        //Show to screen
        while (true){
            let randomCard = random(46,61)
            if (cardHist.includes(randomCard)){}
            else{
                randomCard = randomCard
                cardHist.push(randomCard)
                document.getElementById(boxId).innerHTML=randomCard
                document.getElementById(boxId).value = randomCard
                allCards.push(randomCard)
                break
            }
        } 
    }

    cardHist = []
    //0 (60-75)
    for (let i = 20; i < 25; i++){
        //Assign box number
        let b = i + 1
        let boxId = "box" + b

       //Show to screen
        while (true){
            let randomCard = random(61,76)
            if (cardHist.includes(randomCard)){}
            else{
                cardHist.push(randomCard)
                document.getElementById(boxId).innerHTML=randomCard
                document.getElementById(boxId).value = randomCard
                allCards.push(randomCard)
                break
            }
        }
    }
    console.log(allCards)
}

function tantos(id, classss){
    let boxId = document.getElementById(id)
    if(boxId.className == 'tantos'){
        boxId.setAttribute('class', '')
    }
    else{
        boxId.setAttribute('class', 'tantos')
    }
    console.log(classss)
}