(function () {

    "use strict";
    console.log("JS is running faster than the offspring of Forrest Gump and Usain Bolt.");
//variables
    // const hotSpots = document.querySelectorAll("#main article");
    // const theImg = document.querySelector("article img");
    // const openBtns = document.querySelectorAll(".open");
    // const closeBtns = document.querySelectorAll(".close");


    // hotSpots.forEach(function (eachSpot) {

    //     eachSpot.addEventListener("mouseover", zoomPhoto);

    // });

    // function zoomPhoto(event) {

    //     const thisCorner = event.target.id;
    //     console.log(thisCorner);

    //     switch (thisCorner) {

    //         case "egg": theImg.className = "egg"; break;
    //         case "prof": theImg.className = "prof"; break;
    //         case "ball1": theImg.className = "ball1"; break;
    //         case "ball2": theImg.className = "ball2"; break;
    //         case "ball3": theImg.className = "ball3"; break;

    //     }

    //     hotSpots.forEach(function (eachSpot) {

    //         eachSpot.addEventListener("mouseover", zoomPhoto);
    //         eachSpot.addEventListener("mouseout", function () {

    //             theImg.className = "start";

    //         });

    //     });

    // }

    //overlays

    //ball 1 overlay
    document.querySelector("#ball1").addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("overlayBall1").className = "show";

    });

    //ball 2 overlay
    document.querySelector("#ball2").addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("overlayBall2").className = "show";

    });

    //ball3 overlay
    document.querySelector("#ball3").addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("overlayBall3").className = "show";

    });

    //prof overlay
    document.querySelector("#prof").addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("overlayProf").className = "show";

    });

    //egg overlay
    document.querySelector("#egg").addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("overlayEgg").className = "show";

    });

    // closing overlays
    
    //closing ball 1
    document.querySelector("#overlayBall1 button").addEventListener("click", function (event) {
        // event.preventDefault();
        console.log("Closing Ball 1"); //overlayBall1
        document.getElementById("overlayBall1").className = "hide";


    });

    //closing ball 2
    document.querySelector("#overlayBall2 button").addEventListener("click", function (event) {
        // event.preventDefault();
        console.log("Closing ball 2");
        document.getElementById("overlayBall2").className = "hide";

    });

    //closing ball 3
    document.querySelector("#overlayBall3 button").addEventListener("click", function (event) {
        // event.preventDefault();
        document.getElementById("overlayBall3").className = "hide";

    });


    // //closing Prof
    document.querySelector("#overlayProf button").addEventListener("click", function (event) {
        // event.preventDefault();
        document.getElementById("overlayProf").className = "hide";

    });

    // //closing Egg
    document.querySelector("#overlayEgg button").addEventListener("click", function (event) {
        // event.preventDefault();
        document.getElementById("overlayEgg").className = "hide";

    });



//     for (const eachBtn of openBtns){
// eachBtn.addEventListener("click", function(event){

//     event.preventDefault();
//     const thisBtn = event.target.id;
//     document.getElementById(`ol-${thisBtn}`).className= "overlay show";

// });
//     }

//     for (const eachBtn of closeBtns){
//         eachBtn.addEventListener("click", function(event){
        
//             event.preventDefault();
//             document.querySelector(".show").className= "overlay hidden";
        
//         });
//             }



//             //closing overlay with escape key

            document.addEventListener("keydown", function(event){

if (event.key === "Escape") {

    document.querySelector(".show").className="hide";

}

            });

    //next button

    document.querySelector("#next").addEventListener("click", function (event) {

        event.preventDefault();

        document.getElementById("text").innerHTML=`I may be old and have poor vision, but you don't seem to be looking around. Keep looking! <button id="back">Return</button>`;

    });


    // Attempting to reset textbox

//     document.querySelector("#back").addEventListener("click", function(){


// window.alert("Just refresh the page, this guy doesn't know how to make a return button LOL");


//     });

    //Music

//     function playMusic() {
//         console.log("Music has started");
//         const audio = new Audio("pokesong.mp3");
//         audio.play();

//     }

// playMusic();

    

    //    document.querySelector(".open").addEventListener("click", function (event) {
    //     event.preventDefault();
    //     document.querySelector("#overlay").className = "showing";

    // });
    // document.querySelector(".closed").addEventListener("click", function (event) {
    //     event.preventDefault();
    //     document.querySelector("#overlay").className = "hidden";});


})();