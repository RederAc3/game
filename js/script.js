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
    params.progress = []; // statystyki
    tableEnd.innerHTML = ' ';
};

var showModal = function () {
    overlay.classList.add('show');
    endModal.classList.add('show');
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
};

var writeRound = function () {
    params.round = window.prompt('Podaj liczbę rund');

    if (params.round != '') {
        info.innerHTML = '<br> Number of rounds - ' + params.round;
    } else {
        showModal();
        endModalP.innerHTML = 'Enter the correct number of rounds!';
    }
}

newGame.addEventListener('click', function (event) {
    reset();
    writeRound();
});

var player = document.querySelectorAll('.player-move');

// var a = 0; //zmienna do przypisania w tablicy następnej generoanego obiektu

player[0].addEventListener('click', function (event) {
    params.scoreYou = 1;
    // output.innerHTML = params.progress;
});

player[1].addEventListener('click', function (event) {
    params.scoreYou = 2;
});

player[2].addEventListener('click', function (event) {
    params.scoreYou = 3;
});

for (var i = 0; i < player.length; i++) {
    var a = player[1].getAttribute('data-move');

    player[i].addEventListener('click', function (event) {

        var winner;

        if ((params.round != params.scoreWon) && (params.round != params.scoreLost)) {
            playerMove();

            if ((params.scoreYou == 1 && params.score == 1) || (params.scoreYou == 2 && params.score == 2) || (params.scoreYou == 3 && params.score == 3)) {
                output.insertAdjacentHTML('afterBegin', '<br> DRAW <br>');
                winner = 'draw';


            } else if ((params.scoreYou == 1 && params.score == 2) || (params.scoreYou == 2 && params.score == 3) || (params.scoreYou == 3 && params.score == 1)) {
                params.scoreLost++;
                output.insertAdjacentHTML('afterBegin', '<br> YOU LOST !!! <br>');
                winner = 'lost';

            } else {
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

            if (params.scoreWon > params.scoreLost) {
                endModalP.innerHTML = 'You Won !!! <br>';
                endModalP.insertAdjacentHTML('beforeend', 'You: ' + params.scoreWon + '<br>' + 'Computer: ' + params.scoreLost);
                tableEnd.insertAdjacentHTML('afterbegin', '<tr>' + '<th>' + 'Round' + '</th><th>' + 'Player <br> movement' + '</th>' + '<th>' + 'Computer <br> movement' + '</th>' + '<th>' + 'Score' + '</th>' + '<th>' + 'End of the <br> round <br>' + '</th>' + '</tr>' );

                for (i = 0; i < params.progress.length; i++) {
                    var numberScore = 1;
                    tableEnd.insertAdjacentHTML('beforeend', '<tr>' + '<th>' + numberScore++ + '</th><td>' + params.progress[i].player + '</td>' + '<td>' + params.progress[i].computer + '</td>' + '<td>' + params.progress[i].winner + '</td>' + '<td>' + params.progress[i].scoreWon + ' - ' + params.progress[i].scoreLost + '</td>' + '</tr>');
                }
            } else {
                endModalP.innerHTML = 'Computer Won !!! <br>';
                endModalP.insertAdjacentHTML('beforeend', 'Computer: ' + params.scoreLost + '<br>' + 'You: ' + params.scoreWon);
                tableEnd.insertAdjacentHTML('afterbegin', '<tr>' + '<th>' + 'Round' + '</th><th>' + 'Player <br> movement' + '</th>' + '<th>' + 'Computer <br> movement' + '</th>' + '<th>' + 'Score' + '</th>' + '<th>' + 'End of the round <br>' + '</th>' + '</tr>' );

                for (i = 0; i < params.progress.length; i++) {
                    var sco = i;
                    var numberScore = sco + 1;
                    tableEnd.insertAdjacentHTML('beforeend', '<tr>' + '<th>' + numberScore + '</th><td>' + params.progress[i].player + '</td>' + '<td>' + params.progress[i].computer + '</td>' + '<td>' + params.progress[i].winner + '</td>' + '<td>' + params.progress[i].scoreWon + ' - ' + params.progress[i].scoreLost + '</td>' + '</tr>');
                }
            }
        }
        result.innerHTML = 'You - ' + params.scoreWon + '-' + params.scoreLost + ' - Computer';
    });
}

var hiddenModal = function () {
    overlay.classList.remove('show');
    endModal.classList.remove('show');
};

buttonGame.addEventListener('click', function () {
    reset();
    writeRound();
    hiddenModal();
});