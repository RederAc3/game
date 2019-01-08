var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var output = document.getElementById('output');
var result = document.getElementById('result');
var newGame = document.getElementById('new-game');
var info = document.getElementById('info');
var endModal = document.querySelector('.end-game-modal');
var endModalP = document.querySelector('.end-game-modal p');
var overlay = document.querySelector('.overlay');
var buttonGame = document.querySelector('.new-game-button');
var tableEnd = document.querySelector('.table-end');
var round = 0;
//var score = 1;
//var scoreWon = 0;
//var scoreLost = 0;

var params = {
    round: '0', // ilość rund
    scoreLost: '0', // przegrana
    scoreWon: '0', // wygrana
    score: '1', // losowanie komputera
    scoreYou: 0, // mój wybór 1-kamień 2-papier 3-norzyce 
    progress: []
}

var reset = function () {
    params.round = 0; // ilość rund
    params.score = 1; // losowanie komputera
    params.scoreWon = 0; // wygrana
    params.scoreLost = 0; // przegrana
    output.innerHTML = ' ';
    result.innerHTML = ' ';
    params.progress = [];
    tableEnd.innerHTML = ' ';

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

    console.log('komputer wylosował - ', params.score);
};

//
//var wonR = function () {
//
//    if (params.score == 1) {
//        output.insertAdjacentHTML('afterBegin', '<br> DRAW <br>');
//    } else if (params.score == 3) {
//        params.scoreWon++;
//        output.insertAdjacentHTML('afterBegin', '<br> YOU WON !!! <br>');
//    } else if (params.score == 2) {
//        params.scoreLost++;
//        output.insertAdjacentHTML('afterBegin', '<br> YOU LOST :( <br>');
//    }
//    info.innerHTML = '<br> Number of rounds - ' + params.round--;
//};
//
//var wonP = function () {
//
//    if (params.score == 2) {
//        output.insertAdjacentHTML('afterBegin', '<br> DRAW <br>');
//    } else if (params.score == 1) {
//        params.scoreWon++;
//        output.insertAdjacentHTML('afterBegin', '<br> YOU WON !!! <br>');
//    } else if (params.score == 3) {
//        params.scoreLost++;
//        output.insertAdjacentHTML('afterBegin', '<br> YOU LOST :( <br>');
//    }
//    info.innerHTML = '<br> Number of rounds - ' + params.round--;
//};
//
//var wonS = function () {
//
//    if (params.score == 3) {
//        output.insertAdjacentHTML('afterBegin', '<br> DRAW <br>');
//    } else if (params.score == 2) {
//        params.scoreWon++;
//        output.insertAdjacentHTML('afterBegin', '<br> YOU WON !!! <br>');
//    } else if (params.score == 1) {
//        params.scoreLost++;
//        output.insertAdjacentHTML('afterBegin', '<br> YOU LOST :( <br>');
//    }
//    info.innerHTML = '<br> Number of rounds - ' + params.round--;
//    //    writeRound();
//}

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

//############--przypisywanie do zmiennej naszego wyboru 

var a = 0; //zmienna do przypisania w tablicy następnej generoanego obiektu

player[0].addEventListener('click', function (event) {
    params.scoreYou = 1;
    console.log('klinąłeś - ', params.scoreYou);
    //    a++;
    // var d = params.progress.computerScore = params.score;
    // console.log(params.progress);
    output.innerHTML = params.progress;
});

player[1].addEventListener('click', function (event) {
    params.scoreYou = 2;
    console.log('klinąłeś - ', params.scoreYou);
    //  var d = params.progress.computerScore = params.score;
});

player[2].addEventListener('click', function (event) {
    params.scoreYou = 3;
    console.log('klinąłeś - ', params.scoreYou);
});


for (var i = 0; i < player.length; i++) {
    var a = player[1].getAttribute('data-move');

    player[i].addEventListener('click', function (event) {

        var winner;

        if ((params.round != params.scoreWon) && (params.round != params.scoreLost)) {
            playerMove();

            if ((params.scoreYou == 1 && params.score == 1) || (params.scoreYou == 2 && params.score == 2) || (params.scoreYou == 3 && params.score == 3)) {

                console.log('remis');
                output.insertAdjacentHTML('afterBegin', '<br> DRAW <br>');
                winner = 'remis';


            } else if ((params.scoreYou == 1 && params.score == 2) || (params.scoreYou == 2 && params.score == 3) || (params.scoreYou == 3 && params.score == 1)) {

                console.log('lost');
                params.scoreLost++;
                output.insertAdjacentHTML('afterBegin', '<br> YOU LOST !!! <br>');
                winner = 'lost';

            } else {

                console.log('win');
                params.scoreWon++;
                output.insertAdjacentHTML('afterBegin', '<br> YOU WON !!! <br>');
                winner = 'won';
            }

            info.innerHTML = '<br> Number of rounds - ' + params.round;

            params.progress.push({
                player: params.scoreYou,
                computer: params.score,
                winner: winner,
                scoreWon: params.scoreWon,
                scoreLost: params.scoreLost
            })

        } else {

            showModal();

            // for ( i=0; i < params.progress.length; i++ ) { 
            //     tableEnd.innerHTML = '<tr>' + '<th>' + i++ + '</th><td>' + params.progress[i].player + '</td>' + '<td>' + params.progress[i].computer + '</td>' + '<td>' + params.progress[i].winner + '</td>' + '<td>' + params.progress[i].scoreWon + ' - ' + params.progress[i].scoreLost + '</td>' + '</tr>';
            // }

            if (params.scoreWon > params.scoreLost) {
                endModalP.innerHTML = 'You Won !!! <br>';
                // console.log(params.progress);
                endModalP.insertAdjacentHTML('beforeend', 'You: ' + params.scoreWon + '<br>' + 'Computer: ' + params.scoreLost);

                tableEnd.insertAdjacentHTML('afterbegin', '<tr>' + '<th>' + 'Round' + '</th><th>' + 'Ruch <br> gracza' + '</th>' + '<th>' + 'Ruch <br> komputera' + '</th>' + '<th>' + 'Wynik <br> rundy' + '</th>' + '<th>' + 'Wynik <br> na koniec <br> rundy' + '</th>' + '</tr>' );

                for (i = 0; i < params.progress.length; i++) {
                    var numberScore = 1;
                    tableEnd.insertAdjacentHTML('beforeend', '<tr>' + '<th>' + numberScore++ + '</th><td>' + params.progress[i].player + '</td>' + '<td>' + params.progress[i].computer + '</td>' + '<td>' + params.progress[i].winner + '</td>' + '<td>' + params.progress[i].scoreWon + ' - ' + params.progress[i].scoreLost + '</td>' + '</tr>');
                }
            } else {
                endModalP.innerHTML = 'Computer Won !!! <br>';
                console.log(params.progress['0'].player);
                console.log(params.progress);
                endModalP.insertAdjacentHTML('beforeend', 'Computer: ' + params.scoreLost + '<br>' + 'You: ' + params.scoreWon);

                tableEnd.insertAdjacentHTML('afterbegin', '<tr>' + '<th>' + 'Round' + '</th><th>' + 'Ruch <br> gracza' + '</th>' + '<th>' + 'Ruch <br> komputera' + '</th>' + '<th>' + 'Wynik <br> rundy' + '</th>' + '<th>' + 'Wynik <br> na koniec <br> rundy' + '</th>' + '</tr>' );

                for (i = 0; i < params.progress.length; i++) {
                    var sco = i;
                    var numberScore = sco + 1;
                    tableEnd.insertAdjacentHTML('beforeend', '<tr>' + '<th>' + numberScore + '</th><td>' + params.progress[i].player + '</td>' + '<td>' + params.progress[i].computer + '</td>' + '<td>' + params.progress[i].winner + '</td>' + '<td>' + params.progress[i].scoreWon + ' - ' + params.progress[i].scoreLost + '</td>' + '</tr>');
                }

                // endModal.insertAdjacentHTML('afterend', 'You: ' + params.progress.player);
                // endModal.insertAdjacentHTML('')
            }
            //            endModalP.innerHTML = 'End of the game, please press the new game button!';
        }

        result.innerHTML = 'You - ' + params.scoreWon + '-' + params.scoreLost + ' - Computer';
        //    console.log("komp wylosował: ");
        //    console.log(params.score);
    });
}


var showModal = function () {
    overlay.classList.add('show');
    endModal.classList.add('show');
};

var hiddenModal = function () {
    overlay.classList.remove('show');
    endModal.classList.remove('show');
};

buttonGame.addEventListener('click', function () {
    reset();
    writeRound();
    hiddenModal();
    // params.round = window.prompt('Podaj liczbę rund');
    // if (params.round != '') {
    //     info.innerHTML = '<br> Number of rounds - ' + params.round;
    //     hiddenModal();

    // } else {
    //     endModalP.innerHTML = 'Enter the correct number of rounds!';
    // }


});

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
