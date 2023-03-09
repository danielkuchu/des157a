(function () {

    "use strict";
    console.log("Jesus is running")

    //change to match elements within game
    // bar1 done, bar2, text done, and roll button done, begin button done


    const startGame = document.getElementById('startgame');
    const roll = document.getElementById("roll");
    const gameControl = document.getElementById('gamecontrol');
    const textbox = document.getElementById('texbox');
    const rules = document.querySelector("#rules");
    const ruleLay = document.querySelector("#rulesOverlay");
    const closeRules = document.querySelector("#closeOverlay");
    let healthBar1 = document.querySelector("#health1");

    //Starting screen to page 2

   startGame.addEventListener("click", function () {

        document.getElementById("page1").className = "hide";
        document.getElementById("page2").className = "show";

    });

    //Opening rules overlay

    rules.addEventListener("click", function (event) {
        event.preventDefault();
        ruleLay.className = "show";


    });

    //closing rules overlay

    closeRules.addEventListener("click", function (event) {
        event.preventDefault();
        console.log("Closing Rules Overlay");
        ruleLay.className = "hide";
    });


    //change object

    const gameData = {

        players: ['Charmander', 'Pikachu'],
        score: [100, 100],
        messages: [
            "You used a weak attack! ", // -10 hp
            "You used a strong attack!`", // -25 hp
            "You got scared and your pokemon soiled themself! Turn skipped.", // Turn skipped
            "You tapped into your secret steroid stash! HP slightly restored", //+10 hp
            "You charged up for a game-ending attack!.. But you missed.", // Turn skipped -- no effect
            "You're feeling a little shy... Turn skipped", // Turn skipped
            "Your pokemon got confused and attacked themself!", // -15 hp

        ],
        roll: 0,
        index: 0,
        gameEnd: 0
    };


    startGame.addEventListener('click', function () {
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);

        gameControl.innerHTML = '<h2>The Game Has Started</h2>';
        setTimeout(setUpTurn, 2000);


    });

    function setUpTurn() {
        gameControl.innerHTML = `<p>It's ${gameData.players[gameData.index]}'s turn!</p>`;
        roll.addEventListener('click', function () {

            throwDice();

        });
    }

    function throwDice() {
        gameData.roll = Math.floor(Math.random() * 7) + 1; //using ceil could result in a zero
        
        gameControl.innerHTML = `<p>It's ${gameData.players[gameData.index]}'s turn!</p>`;
        // setting inner green bar to the width (player's health)
        // if (gameData.index == 0){ 
        // bar.style.width= `${gameData.score[gameData.index]}px`;

        // } else { }


        // if 1 is rolled... Weak Attack
        if (gameData.roll === 0) {

            healthBar1.value -= 10;
            gameData.messages[0];
            setTimeout(setUpTurn, 2000);
        }

        // if 2 is rolled... Strong Attack
        else if (gameData.roll === 1) {
            gameData.messages[gameData.index]=1;
            healthBar1.value -= 25;
            setTimeout(setUpTurn, 2000);
        }

// If 3 is rolled, turn skipped
    
        else if (gameData.roll === 2) {
            gameData.messages[gameData.index]=2;
            setTimeout(setUpTurn, 2000);
        }

        //if 4 is rolled... +10 hp

        else if (gameData.roll === 3) {
            gameData.messages[gameData.index]=3;
            healthBar1.value += 10;
            setTimeout(setUpTurn, 2000);
        }

        //if 5 is rolled... turn is skipped


        else if (gameData.roll === 4) {
            gameData.messages[gameData.index]=4;
            setTimeout(setUpTurn, 2000);
        }

        //if 6 is rolled... turn is skipped

        else if (gameData.roll === 5) {
            gameData.messages[gameData.index]=5;
            setTimeout(setUpTurn, 2000);
        }


        //if 7 is rolled, user damages self -15 hp
        else if (gameData.roll === 6) {
            gameData.messages[gameData.index]=6;
            healthBar1.value -= 15;
            setTimeout(setUpTurn, 2000);
        }

        else {

            checkLosingCondition();
        }

    }

    function checkLosingCondition() {
        if (gameData.score[gameData.index] < gameData.gameEnd) {
            gameControl.innerHTML = `<h2>${gameData.players[gameData.index]} 
        has fainted!</h2>`;

            document.getElementById('quit').innerHTML = 'Start a New Game?';
        }}

})();