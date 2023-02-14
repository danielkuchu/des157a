(function () {

    "use strict";
    console.log("Run Forrest JS run");

    const inp = document.querySelector("input");
    const play = document.getElementById("play");
    const myForm = document.querySelector('#myform');
    const madlib = document.querySelector('#madlib');


    function playMusic() {
        console.log("Music has started");
        const audio = new Audio("hpsong.mp3");
        audio.play();

    }

    play.addEventListener("click", playMusic);


    myForm.addEventListener("submit", function (event) {

        event.preventDefault();
        const adj1 = document.querySelector("#adj1").value;
        const tod = document.querySelector("#tod").value;
        const yname = document.querySelector("#yname").value;
        const profs = document.querySelector("#profs").value;
        const mean = document.querySelector("#mean").value;
        const verb1 = document.querySelector("#verb1").value;
        const place = document.querySelector("#place").value;
        const spell = document.querySelector("#spell").value;
        const dance = document.querySelector("#dance").value;
        const myText = ``





    });





})();