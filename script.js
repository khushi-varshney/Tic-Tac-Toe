console.log("WELCOME TO TIC-TAC-TOE");
let music = new Audio("BG-MUSIC.mp3");
let Turn = new Audio("TURN.mp3");
let gameover = new Audio("GAMEOVER.mp3");
let turn = "X";
let isgameover = false;

// function to change the turn 
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

// function to change for the win 
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 1, 5, 0],
        [3, 4, 5, 0.5, 13, 0],
        [6, 7, 8, 1, 21, 0],
        [0, 3, 6, -7, 13, 90],
        [1, 4, 7, 1.5, 13, 90],
        [2, 5, 8, 10, 13, 90],
        [0, 4, 8, 3, 15, 45],
        [2, 4, 6, 0.5, 15, 135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[2]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[0]].innerHTML !== "")) {
            document.querySelector('.infoe').innerHTML = boxtext[e[0]].innerHTML + " WON";
            isgameover = true
            music.play()
            document.querySelector('.img').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.width = "24vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
}

// gamelogic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            Turn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("infoe")[0].innerText = "Turn For " + turn;
            }
        }
    })
})

// Add oneclick listener to reset GamepadButton 
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerHTML = ""
    });
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("infoe")[0].innerText = "Turn For " + turn;
    document.querySelector('.img').getElementsByTagName('img')[0].style.width = "0px"
    document.querySelector(".line").style.width = "0px"

})