console.log("page loaded...");
// the remove box
function hide(el) {
    document.querySelector("#subscribing").remove();
}
// the alert 
setTimeout(function(){
    alert("This page says.\nThe ninjas have won!")
}, 13000); //Time before execution

// increase count
var ninjasScore = 314;
var liveScore1=document.querySelector("#ninjas-scores");
function score1(){
ninjasScore++;
liveScore1.innerHTML = ninjasScore;
}
var piratesScore = 159;
var liveScore2= document.querySelector("#pirates-scores");
function score2(){
    piratesScore++;
    liveScore2.innerHTML = piratesScore;
}
