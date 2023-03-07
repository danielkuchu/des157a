(function () {

    "use strict";
    console.log("Jesus is running")

    //change to match elements within game
    // bar1, bar2, text, and roll button, begin button


    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    const score = document.getElementById('score');
    const actionArea = document.getElementById('actions');

    //

    document.querySelector("#startgame").addEventListener("click", function () {

        document.getElementById("page1").className= "hide";
        document.getElementById("page2").className = "show";

    });

    //change object

    const gameData = {

        players: ['player 1', 'player 2'],
        score: [100, 100],
        messages: [
            "message1",
            "message2",

        ],
        roll: 0,
        index: 0,
        gameEnd: 0
    };


    startGame.addEventListener('click', function () {
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);

        gameControl.innerHTML = '<h2>The Game Has Started</h2>';



        setUpTurn();
    });

    function setUpTurn() {
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        document.getElementById('roll').addEventListener('click', function () {

            throwDice();

        });
    }

    function throwDice() {
        actionArea.innerHTML = '';
        gameData.roll = Math.floor(Math.random() * 7) + 1; //using ceil could result in a zero
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1 - 1]}"> `; // detting inner green bar to the width (player's health)
        // if (gameData.index == 0){ 
        // bar.style.width= `${gameData.score[gameData.index]}px`;

        // } else { }

        ;


        // if two 1's are rolled...
        if (gameData.rollSum === 2) {
            game.innerHTML += '<p>Oh snap! Snake eyes!</p>';
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            setTimeout(setUpTurn, 2000);
        }

        // if either die is a 1...
        else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to  ${gameData.players[gameData.index]
                }</p>`;
            setTimeout(setUpTurn, 2000);
        }

        // if neither die is a 1...
        else {
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';

            document.getElementById('rollagain').addEventListener('click', function () {
                //setUpTurn();
                throwDice();
            });

            document.getElementById('pass').addEventListener('click', function () {
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });

            checkWinningCondition();
        }

    }

    function checkWinningCondition() {
        if (gameData.score[gameData.index] > gameData.gameEnd) {
            score.innerHTML = `<h2>${gameData.players[gameData.index]} 
        wins with ${gameData.score[gameData.index]} points!</h2>`;

            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = 'Start a New Game?';
        } else {
            // show current score...
            showCurrentScore();
        }
    }

    function showCurrentScore() {
        score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]}
    ${gameData.score[0]}</strong> and <strong>${gameData.players[1]} 
    ${gameData.score[1]}</strong></p>`;
    }

})();