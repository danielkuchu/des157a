(function(){

    "use strict";
    console.log("JS is running faster than the offspring of Forrest Gump and Usain Bolt.");

    const container = document.querySelector("#floor");
    const hotSpots = document.querySelectorAll("#floor article");
    const theImg = document.querySelector("article img");

    hotSpots.forEach(function (eachSpot) {

        eachSpot.addEventListener("mouseover", zoomPhoto);

    });

    function zoomPhoto(event) {

        const thisCorner = event.target.id;
        console.log(thisCorner);
        switch (thisCorner) {

            case "egg": theImg.className = "egg"; break;
            case "prof": theImg.className = "prof"; break;
            case "ball1": theImg.className = "ball1"; break;
            case "ball2": theImg.className = "ball2"; break;
            case "ball3": theImg.className = "ball3"; break;

        }

        hotSpots.forEach(function(eachSpot){

            eachSpot.addEventListener("mouseover", zoomPhoto);
            eachSpot.addEventListener("mouseout", function () {

                theImg.className = "start";

            });

        });

   } 


})();