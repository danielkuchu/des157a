(function () {

    "use strict";
    console.log("Run Forrest JS run");

    const inp = document.querySelector("input");
    const play = document.getElementById("play");
    const myForm = document.querySelector('#myForm');
    const madlibs = document.querySelector('#madlibs');
    const icons = document.querySelector("#icons");
    const dumb = document.getElementById("dumb");
    const snape = document.getElementById("snape");
    const hag = document.getElementById("hag");

    console.log(myForm);


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

        const myText = `<p>Walking through the halls of Hogwarts, it seems like a normal ${adj1} ${tod} until you hear, "${yname}!!!!!!!!!!!!!" 
        A booming voice shouts from the other end of the hallway. Professor ${profs} rushes toward you with a sassy, determined strut. 
        "Stop right there, you ${mean}," Professor ${profs} 
        commands. Without hesitation, I ${verb1} to the nearest escape route. I find myself bolting toward a storage closet and locking the door.
        I chant to myself, "There's no place like ${place}, there's no place like ${place}." Then I cast ${spell} and POOF! 
        Smoke fills the air and I begin to feel weightless! I open my eyes
        slowly and immediately recognize where I am. I transported to ${place}! 
        Excitement fills my body and I am unable to resist the urge to emote. Suddenly, my body takes over and I begin to ${dance}.</p>`;

        madlibs.innerHTML = myText;

        if (profs === "snape") {

            madlibs.dumb.innerHTML = "";
            madlibs.hag.innerHTML = "";


        } else if (profs === "dumb") {

            madlibs.snape.innerHTML = "";
            madlibs.hag.innerHTML = "";
        } else if (profs === "hag") {

            madlibs.dumb.innerHTML = "";
            madlibs.snape.innerHTML = "";

        }

    });




})();