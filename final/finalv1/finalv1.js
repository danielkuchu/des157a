(function () {

    "use strict";
    console.log("Jesus is running")

    //change to match elements within game
    // bar1 done, bar2, text done, and roll button done, begin button done


    const select = document.querySelector('#select'); // Select button transition to page 1
    const selectSquirtle = document.querySelector("#squirtleBall"); //Select Squirtle Ball 1
    const squirtleOverlay = document.querySelector("#squirtleOverlay"); // Squirtle Overlay
    const startGame = document.getElementById('startgame'); // "begin" button on start page
    const roll = document.getElementById("roll"); // roll button
    const gameControl = document.getElementById('gamecontrol'); // where text is displayed and where roll button sits
    const rules = document.querySelector("#rules"); // rules button
    const ruleLay = document.querySelector("#rulesOverlay"); // rules overlay display
    const closeRules = document.querySelector("#closeOverlay"); //closing the rules
    let healthBar1 = document.querySelector("#healthBar1 .inner"); //Charmander's healthbar
    let healthBar2 = document.querySelector("#healthBar2 .inner"); //Pikachu's healthbar
    let audioChar = new Audio("audio/charmandersound.mp3"); // Charmander Attack sound
    let audioPika = new Audio("audio/pikachusound.mp3"); // Pikachu Attack sound

    //Sound Effects

    
 // Transition to page 1

select.addEventListener("click", function(){

document.getElementById("page0").className = "hide";
document.getElementById("page1").className = "show";


});

selectSquirtle.addEventListener("click", function(){

squirtleOverlay.className="show";

});

    //Transition to page 2

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

    //Game Data

    const gameData = {


        // how do I apply effects to the healthbar1/healthbar2 + messages to the textbox simultaneously
        players: ['Charmander', 'Pikachu'],
        score: [100, 100],
        effects: [-15, -35, -5, 5, -4, 0, -15], // [score] - 10??
        messages: [
            "You used a weak attack! ", // [1] -10 hp
            "You used a strong attack!`", //[2] -25 hp
            "You made the other Pokemon soil themself!", // [3] -5hp
            "The enemy tapped into your secret steroid stash! HP slightly restored", // [4] +5 hp
            "You charged up for a game-ending attack!.. But you missed.", // [5] Turn skipped
            "You're feeling a little shy... Turn skipped", // [6] Turn skipped
            "Your pokemon got confused the other player and they attacked themself!", // [7] -15 hp

        ],
        roll: 0,
        index: 0,
        gameEnd: 0
    };


    startGame.addEventListener('click', function () {
        gameData.index = Math.round(Math.random());
        gameControl.innerHTML = '<h2>The Battle is Beginning</h2>';
        setTimeout(setUpTurn, 4000);

    });

    function setUpTurn() {
        gameData.index = Math.round(Math.random());
        gameControl.innerHTML = `<p>It's ${gameData.players[gameData.index]}'s turn!</p>`;

    }


    // Correct Placement? 
    //Roll action + calling to outcomes

    roll.addEventListener('click', function () {

        throwDice();

    });


    function throwDice() {
        const attack = Math.floor(Math.random() * 7); //using ceil could result in a zero


        //setting/switching player
        // addding to max score will be problem

        // set progress bar to overflow hidden

        if (gameData.index == 0) {

            gameData.score[1] = gameData.score[1] + gameData.effects[attack];
            gameControl.innerHTML = gameData.messages[attack]; //use css to cover up roll button
            if (gameData.score[1] < 1) {

                gameControl.innerHTML = `<h3>Charmander has won the battle!</h3>`;
                healthBar2.style.width = `0%`;

            } else {

                healthBar2.style.width = `${gameData.score[1]}%`;
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);

                setTimeout(function () {
                    gameControl.innerHTML = `<p>It's ${gameData.players[gameData.index]}'s turn!</p>`;
                }, 3500);


            }



        } else {

            gameData.score[0] = gameData.score[0] + gameData.effects[attack];
            gameControl.innerHTML = gameData.messages[attack];
            healthBar1.style.width = `${gameData.score[0]}%`;

            if (gameData.score[0] < 1) {

                gameControl.innerHTML = `<h3>Pikachu has won the battle!</h3>`;
                healthBar1.style.width = `0%`;

            } else {

                healthBar1.style.width = `${gameData.score[0]}%`;
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);

                setTimeout(function () {
                    gameControl.innerHTML = `<p>It's ${gameData.players[gameData.index]}'s turn!</p>`;
                }, 3500);


            }

        }

        // checkLosingCondition();
        // gameData.index ? (gameData.index = 0) : (gameData.index = 1);

        // setTimeout(function(){
        //     gameControl.innerHTML = `<p>It's ${gameData.players[gameData.index]}'s turn!</p>`;
        // }, 4000);


    }

    // function checkLosingCondition() {

    //     let winner = "";

    //     if (gameData.index == 0) {

    //         winner = "Charmander";


    //         if (gameData.score[1] < 1) {
    //             action.innerHTML = `<h3>${winner} has won the battle!</h3>`;
    //         }
    //     }


    //     else if (gameData.index == 1) {
    //         winner = "Pikachu";


    //         if (gameData.score[0] < 1) {
    //             action.innerHTML = `<h3>${winner} has won the battle!</h3>`;
    //         }
    //     }

    // }

})();