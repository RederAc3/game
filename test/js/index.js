var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var output = document.getElementById('output');
var result = document.getElementById('result');
var newGame = document.getElementById('new-game');
var info = document.getElementById('info');
var round = 0;
var score = 1;
var scoreWon = 0;
var scoreLost = 0;

var reset = function () {
    round = 0;
    score = 1;
    scoreWon = 0;
    scoreLost = 0;
};

var playerMove = function (event) {

    score = Math.round(Math.random() * (3 - 1) + 1);

    if (score == 1) {
        output.innerHTML = 'ROCK';
    } else if (score == 2) {
        output.innerHTML = 'PAPER';
    } else if (score == 3) {
        output.innerHTML = 'SCISSORS';
    }      
};

var wonR = function () {

    if (score == 1) {
        output.insertAdjacentHTML('afterBegin', '<br> DRAW <br>');
    } else if (score == 3) {
        scoreWon++;
        output.insertAdjacentHTML('afterBegin', '<br> YOU WON !!! <br>');
    } else if (score == 2) {
        scoreLost++;
        output.insertAdjacentHTML('afterBegin', '<br> YOU LOST :( <br>');
    }  
};

var wonP = function () {

    if (score == 2) {
        output.insertAdjacentHTML('afterBegin', '<br> DRAW <br>');
    } else if (score == 1) {
         scoreWon++;
         output.insertAdjacentHTML('afterBegin', '<br> YOU WON !!! <br>');
    } else  if (score == 3) {
         scoreLost++;
         output.insertAdjacentHTML('afterBegin', '<br> YOU LOST :( <br>');
    }     
};

var wonS = function () {

    if (score == 3) {
        output.insertAdjacentHTML('afterBegin', '<br> DRAW <br>');
    } else if (score == 2) {
        scoreWon++;
        output.insertAdjacentHTML('afterBegin', '<br> YOU WON !!! <br>');
    } else if (score == 1) {
        scoreLost++;
        output.insertAdjacentHTML('afterBegin', '<br> YOU LOST :( <br>');
    }

}

var writeRound = function () {
    round = window.prompt('Podaj liczbę rund');

    if (round != '') {
        info.innerHTML = '<br> Number of rounds - ' + round;
    } else {
        info.innerHTML = 'Enter the correct number of rounds!';
    }
}

newGame.addEventListener('click', function (event) {
    reset();
    writeRound();
});

rock.addEventListener('click', function (event) {

    if ((round != scoreWon) && (round != scoreLost)) {
        playerMove();
        wonR();
    } else {
        info.innerHTML = '<br>' + 'End of the game, please press the new game button!';
    }
  
    result.innerHTML = 'You - ' + scoreWon + '-' + scoreLost + ' - Computer';
});

paper.addEventListener('click', function (event) {

    if ((round != scoreWon) && (round != scoreLost)) {
        playerMove();
        wonP();
    } else {
        info.innerHTML = '<br>' + 'End of the game, please press the new game button!';
    }

    result.innerHTML = 'You - ' + scoreWon + '-' + scoreLost + ' - Computer';
});


scissors.addEventListener('click', function (event) {

    if ((round != scoreWon) && (round != scoreLost)) {
        playerMove();
        wonS();
    } else {
        info.innerHTML = '<br>' + 'End of the game, please press the new game button!';
    }

    result.innerHTML = 'You - ' + scoreWon + '-' + scoreLost + ' - Computer';
});