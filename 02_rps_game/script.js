
document.addEventListener('DOMContentLoaded', () => {
    init();
});

const rps = ['scissors', 'rock', 'paper'];
// 플레이어
let player1Cnt = document.getElementById('player1-score');
// 컴퓨터
let player2Cnt = document.getElementById('player2-score');
// 남은 횟수
let clickCount = document.getElementById('click-count');
let count = 0;
// 가위 바위 보 결과
let result = document.getElementsByClassName('click-result');
let rpsBtnSelection = document.getElementById('rps-btn-selection');
let rpsResult = document.getElementById('rps-result');

let player1ClickImg = document.getElementById("player1-img");
let player2ClickImg = document.getElementById("player2-img");

function init() {
    player1Cnt.innerText = 0;
    player2Cnt.innerText = 0;
    count = 10;
    clickCount.innerText = `남은 횟수 : ${count}`;
    player1ClickImg.src = "/img/question.jpg";
    player2ClickImg.src = "/img/question.jpg";
}

function playRPS(type) {
    // 가위 바위 보 중 플레이어가 선택한 것
    let selectPlayer1 = type;

    // 가위 바위 보 중 컴퓨터가 선택한 것
    const randomNumber = Math.floor(Math.random() * rps.length);
    let selectPlayer2 = rps[randomNumber];

    player1ClickImg.src = `./img/${type}.jpg`;
    player2ClickImg.src = `./img/${selectPlayer2}.jpg`;

    // 가위 => 보
    // 바위 => 가위
    // 보 => 바위
    if (selectPlayer1 === 'scissors' && selectPlayer2 === 'paper' || selectPlayer1 === 'rock' && selectPlayer2 === 'scissors' || selectPlayer1 === 'paper' && selectPlayer2 === 'rock') {
        player1Cnt.innerText = Number(player1Cnt.innerText) + 1;
        result.innerText = '플레이어 승리';
    } else if (selectPlayer2 === 'scissors' && selectPlayer1 === 'paper' || selectPlayer2 === 'rock' && selectPlayer1 === 'scissors' || selectPlayer2 === 'paper' && selectPlayer1 === 'rock') {
        player2Cnt.innerText = Number(player2Cnt.innerText) + 1;
        result.innerText = '컴퓨터 승리';
    } else {
        result.innerText = '무승부';
    }
    
    count = count - 1;
    clickCount.innerText = `남은 횟수 : ${count}`;

    if (count === 0) {
        rpsBtnSelection.style.display = 'none';
        
        let finishGame = document.createElement('div');
        finishGame.innerText = '게임 종료!';
        rpsResult.appendChild(finishGame);

        let finishResult = document.createElement('div');
        if(player1Cnt.innerText > player2Cnt.innerText) {
            finishResult.innerText = '이겼습니다! 축하합니다!!!';
        } else if(player1Cnt.innerText < player2Cnt.innerText) {
            finishResult.innerText = '졌습니다! 한판 더???';
        } else if(player1Cnt.innerText === player2Cnt.innerText) {
            finishResult.innerText = '비겼습니다!';
        }
        rpsResult.appendChild(finishResult);

        let restartBtn = document.createElement('button');
        restartBtn.innerText = '다시 시작';
        restartBtn.addEventListener('click', restart);
        rpsResult.appendChild(restartBtn);
    }
}


function restart() {
    while(rpsResult.firstChild) {
        rpsResult.removeChild(rpsResult.firstChild);
    }
    rpsBtnSelection.style.display = 'block';
    init();
}