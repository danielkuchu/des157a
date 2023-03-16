(function () {

    "use strict";
    console.log("Jesus is running")

    //change to match elements within game
    // bar1 done, bar2, text done, and roll button done, begin button done

    const selectBtn = document.querySelectorAll(".selectBtn"); // Select Buttons

    const player1display = document.querySelector("#displayP1");
    const player2display = document.querySelector("#displayP2");

    const ballSquirtle = document.querySelector("#squirtleBall"); //Select Squirtle- Ball 1
    const ballChar = document.querySelector("#charBall"); //Select Char - Ball 2
    const ballBulb = document.querySelector("#bulbBall"); //Select Bulb - Ball 3 
    const ballPika = document.querySelector("#pikaBall"); //Select Pika - Ball 4

    const squirtleOverlay = document.querySelector("#squirtleOverlay"); // Squirtle Overlay
    const charOverlay = document.querySelector("#charOverlay"); // Charmander Overlay
    const bulbOverlay = document.querySelector("#bulbOverlay"); // Bulbasaur Overlay
    const pikaOverlay = document.querySelector("#pikaOverlay"); // Pikachu Overlay

    const closeSquirtle = document.querySelector("#squirtleOverlay button");
    const closeChar = document.querySelector("#charOverlay button");
    const closeBulb = document.querySelector("#bulbOverlay button");
    const closePika = document.querySelector("#pikaOverlay button");

    const charPage0 = document.querySelector("#char"); // Charmander behind bush
    const squirtlePage0 = document.querySelector("#squirt"); // Squirtle behind bush
    const bulbPage0 = document.querySelector("#bulb"); // Bulbasaur behind bush


    const startGame = document.getElementById('startgame'); // "begin" button on start page
    const roll = document.getElementById("roll"); // roll button
    const gameControl = document.getElementById('gamecontrol'); // where text is displayed and where roll button sits


    const rules = document.querySelector("#rules"); // rules button
    const ruleLay = document.querySelector("#rulesOverlay"); // rules overlay display
    const closeRules = document.querySelector("#closeOverlay"); //closing the 

    const bush1 = document.querySelector("#bush1"); // Bush1
    const bush2 = document.querySelector("#bush2"); // Bush2
    const bush3 = document.querySelector("#bush3"); // Bush3


    let healthBar1 = document.querySelector("#healthBar1 .inner"); //Charmander's healthbar
    let healthBar2 = document.querySelector("#healthBar2 .inner"); //Pikachu's healthbar


    let audioChar = new Audio("audio/charmandersound.wav"); // Charmander Attack sound
    let audioPika = new Audio("audio/pikachusound.mp3"); // Pikachu Attack 
    let audioBulb = new Audio("audio/bulbasaur.mp3"); // Bulbasaur sound 
    let audioSquirtle = new Audio("audio/squirtle.mp3"); // Squirtle sound
    let audioBush = new Audio("audio/bushes.mp3");
    let audioBattle = new Audio("audio/battlesound.mp3"); // fight scene music
    let audioOuch = new Audio("audio/ouch.mp3"); // me saying ouch
    let audioSoiled = new Audio("audio/soiled.mp3"); // Soiled it
    let audioSteroids = new Audio("audio/augh.mp3"); // AUUUUGH
    let audioNervous = new Audio("audio/nervous.mp3"); // nervous
    let audioBtns = new Audio("audio/button.mp3"); // all button sounds

    audioBattle.volume = 0.2;
    audioOuch.volume = 1.0;
    let counter = 0;
    
    for (let i = 0; i < selectBtn.length; i++) {

        selectBtn[i].addEventListener("click", function (event) {

            event.preventDefault();
            audioBtns.play();
            const thisPokemon = event.target.id;
            if (counter == 0){

                gameData.players[0]=thisPokemon;
                document.querySelector(`#${thisPokemon}`).remove();
                document.querySelector("#poke1").src=`images/${thisPokemon}.png`;
                counter++;
                player1display.innerHTML= `<h2>${thisPokemon}</h2>`;

            } else if(counter == 1){

                gameData.players[1]=thisPokemon;
                document.querySelector("#poke2").src=`images/${thisPokemon}.png`;
                player2display.innerHTML= `<h2>${thisPokemon}</h2>`;
                document.getElementById("page0").className = "hide";
                document.getElementById("page1").className = "show";
            

            } 

        });

    }


    //Squirtle Overlay (Open + Close)

    ballSquirtle.addEventListener("click", function () {

        squirtleOverlay.className = "show";
        audioSquirtle.play();
        audioBtns.play();

    });

    closeSquirtle.addEventListener("click", function () {

        squirtleOverlay.className = "hide";
        audioBtns.play();

    });

    //Charmander Overlay (Open + Close)

    ballChar.addEventListener("click", function () {

        charOverlay.className = "show"
        audioChar.play();
        audioBtns.play();

    });

    closeChar.addEventListener("click", function () {

        charOverlay.className = "hide";
        audioBtns.play();

    });

    //Bulbasaur Overlay (Open + Close)

    ballBulb.addEventListener("click", function () {

        bulbOverlay.className = "show";
        audioBulb.play();
        audioBtns.play();
        console.log("Bulbasaur Overlay");

    });

    closeBulb.addEventListener("click", function () {

        bulbOverlay.className = "hide";
        audioBtns.play();

    });

    //Pikachu Overlay (Open + Close)

    ballPika.addEventListener("click", function () {

        pikaOverlay.className = "show";
        audioPika.play();
        audioBtns.play();
        console.log("Pikachu Overlay");

    });

    closePika.addEventListener("click", function () {

        pikaOverlay.className = "hide";
        audioBtns.play();

    });

    //Transition to page 2

    startGame.addEventListener("click", function () {

        document.getElementById("page1").className = "hide";
        document.getElementById("page2").className = "show";
        audioBtns.play();

    });

    //Opening rules overlay

    rules.addEventListener("click", function (event) {
        event.preventDefault();
        ruleLay.className = "show";
        audioBtns.play();


    });

    //closing rules overlay

    closeRules.addEventListener("click", function (event) {
        event.preventDefault();
        console.log("Closing Rules Overlay");
        ruleLay.className = "hide";
        audioBtns.play();
    });

    //Bush Hover

    bush1.addEventListener("mouseover", function () {

        audioBush.play();
        charPage0.className = "pokeFloat";

    });


    bush2.addEventListener("mouseover", function () {

        audioBush.play();
        squirtlePage0.className = "pokeFloat";

    });


    bush3.addEventListener("mouseover", function () {

        audioBush.play();
        bulbPage0.className = "pokeFloat";

    });



    //Game Data

    const gameData = {

        players: ['Charmander', 'Pikachu'], //What do I change this to?
        score: [100, 100],
        effects: [-15, -35, -5, 5, -4, 0, -15], // [score] - 10??
        messages: [
            "You used a weak attack! ", // [1] -10 hp
            "You used a strong attack!`", //[2] -25 hp
            "You made the other Pokemon soil themself!", // [3] -5hp
            "The enemy tapped into your secret steroid stash! HP slightly restored", // [4] +5 hp
            "You charged up for a game-ending attack!.. But you missed.", // [5] Turn skipped
            "You're feeling a little shy... Turn skipped", // [6] Turn skipped
            "Your pokemon confused the other player and they attacked themself!", // [7] -15 hp

        ],
        roll: 0,
        index: 0,
        gameEnd: 0
    };


    startGame.addEventListener('click', function () {
        gameData.index = Math.round(Math.random());
        gameControl.innerHTML = '<h2>The Battle is Beginning</h2>';
        setTimeout(setUpTurn, 4000);
        audioBattle.play();
        audioBtns.play();

    });

    function setUpTurn() {
        gameData.index = Math.round(Math.random());
        gameControl.innerHTML = `<p>It's ${gameData.players[gameData.index]}'s turn!</p>`;

    }


    // Correct Placement? 
    //Roll action + calling to outcomes

    roll.addEventListener('click', function () {

        throwDice();
        audioBtns.play();


    });


    function throwDice() {
        const attack = Math.floor(Math.random() * 7); //using ceil could result in a zero

        if ( attack == 0){

            audioOuch.play(); //Is this possible? Audio assigned to move

        } else if ( attack == 1){

            audioOuch.play();

        } else if ( attack == 2){

            audioSoiled.play();

        } else if ( attack == 3) {

            audioSteroids.play();

        } else if ( attack == 4) {

            audioSoiled.play();

        } else if ( attack == 5) {

            audioNervous.play();

        } else if ( attack == 6) {

            audioSteroids.play()

        } 

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
    }

})();