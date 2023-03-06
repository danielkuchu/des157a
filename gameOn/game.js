(function(){

"use strict";
console.log("Jesus is running")

document.querySelector("#startgame").addEventListener("click",function(){

    document.getElementById("cloud1").className="hide";
    document.getElementById("cloud2").className="hide";
    document.getElementById("bush1").className="hide";
    document.getElementById("bush2").className="hide";
    document.getElementById("bush3").className="hide";
    document.getElementById("startgame").className="hide";
    document.getElementById("title").className="hide";
});

})();