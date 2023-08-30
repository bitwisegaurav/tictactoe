// console.log('gaurav');

let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let audiogameover = new Audio("gameover.mp3");
let turn = 'X';
let gameover = false;

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X"
}

// Function to check for a win
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won";
            gameover = true;
            audiogameover.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "25vw";
        }
    })
}

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkWin();
            if (!gameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
            checkDraw();
        }
    })
})

reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
        gameover = false;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    })
})

function checkDraw() {
    let boxtexts = document.querySelectorAll('.boxtext');
    let count = 0;
    Array.from(boxtexts).forEach(element => {
        if (element.innerText === "") {
            count++;
        }
    })
    if (count === 0) {
        gameover = true;
        document.querySelector('.info').innerText = "Match Draw";
    }
}