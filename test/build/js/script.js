var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var output = document.getElementById('output');
var result = document.getElementById('result');
var newGame = document.getElementById('new-game');
var info = document.getElementById('info');
var endModal = document.querySelector('.end-gamae-modal');
//var round = 0;
//var score = 1;
//var scoreWon = 0;
//var scoreLost = 0;

var params = {
    round: '0',
    scoreLost: '0',
    scoreWon: '0',
    score: '1'
}

var reset = function () {
    params.round = 0;
    params.score = 1;
    params.scoreWon = 0;
    params.scoreLost = 0;

    //    console.log(params.round);
    //    output.innerHTML = params.round;
};

var playerMove = function (event) {

    params.score = Math.round(Math.random() * (3 - 1) + 1);

    if (params.score == 1) {
        output.innerHTML = 'ROCK';
    } else if (params.score == 2) {
        output.innerHTML = 'PAPER';
    } else if (params.score == 3) {
        output.innerHTML = 'SCISSORS';
    }

    console.log(params.score);
};



var wonR = function () {

    if (params.score == 1) {
        output.insertAdjacentHTML('afterBegin', '<br> DRAW <br>');
    } else if (params.score == 3) {
        params.scoreWon++;
        output.insertAdjacentHTML('afterBegin', '<br> YOU WON !!! <br>');
    } else if (params.score == 2) {
        params.scoreLost++;
        output.insertAdjacentHTML('afterBegin', '<br> YOU LOST :( <br>');
    }
};

var wonP = function () {

    if (params.score == 2) {
        output.insertAdjacentHTML('afterBegin', '<br> DRAW <br>');
    } else if (params.score == 1) {
        params.scoreWon++;
        output.insertAdjacentHTML('afterBegin', '<br> YOU WON !!! <br>');
    } else if (params.score == 3) {
        params.scoreLost++;
        output.insertAdjacentHTML('afterBegin', '<br> YOU LOST :( <br>');
    }
};

var wonS = function () {

    if (params.score == 3) {
        output.insertAdjacentHTML('afterBegin', '<br> DRAW <br>');
    } else if (params.score == 2) {
        params.scoreWon++;
        output.insertAdjacentHTML('afterBegin', '<br> YOU WON !!! <br>');
    } else if (params.score == 1) {
        params.scoreLost++;
        output.insertAdjacentHTML('afterBegin', '<br> YOU LOST :( <br>');
    }

}

var writeRound = function () {
    params.round = window.prompt('Podaj liczbę rund');

    if (params.round != '') {
        info.innerHTML = '<br> Number of rounds - ' + params.round;
    } else {
        info.innerHTML = 'Enter the correct number of rounds!';
    }
}

newGame.addEventListener('click', function (event) {
    reset();
    writeRound();
});


var player = document.querySelectorAll('.player-move');


for (var i = 0; i < player.length; i++) {
    var a = player[i].getAttribute('data-move');
    //    playerMove();
    //    console.log(s);

    player[i].addEventListener('click', function (event) {

        if ((params.round != params.scoreWon) && (params.round != params.scoreLost)) {
            playerMove();
            wonP();
        } else {
            info.innerHTML = '<br>' + 'End of the game, please press the new game button!';
            endModal.ClassList.add('show');
        }

        result.innerHTML = 'You - ' + params.scoreWon + '-' + params.scoreLost + ' - Computer';
    });
    console.log("komp wylosował: ");
    console.log(params.score);
}



//paper.addEventListener('click', function (event) {
//
//    if ((params.round != params.scoreWon) && (params.round != params.scoreLost)) {
//        playerMove();
//        wonP();
//    } else {
//        info.innerHTML = '<br>' + 'End of the game, please press the new game button!';
//    }
//
//    result.innerHTML = 'You - ' + params.scoreWon + '-' + params.scoreLost + ' - Computer';
//});
//
//rock.addEventListener('click', function (event) {
//
//        if ((params.round != params.scoreWon) && (params.round != params.scoreLost)) {
//            playerMove();
//            wonR();
//        } else {
//            info.innerHTML = '<br>' + 'End of the game, please press the new game button!';
//        }
//
//        result.innerHTML = 'You - ' + params.scoreWon + '-' + params.scoreLost + ' - Computer';
//    });
//
//scissors.addEventListener('click', function (event) {
//
//    if ((params.round != params.scoreWon) && (params.round != params.scoreLost)) {
//        playerMove();
//        wonS();
//    } else {
//        info.innerHTML = '<br>' + 'End of the game, please press the new game button!';
//    }
//
//    result.innerHTML = 'You - ' + params.scoreWon + '-' + params.scoreLost + ' - Computer';
//});
