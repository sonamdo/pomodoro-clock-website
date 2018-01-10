$(document).ready(function(){

var myVar = 0;//0 is pause, 1 is play
var minutes = 25;
var seconds = 0;
var countdownFunction = 0;
var workPlay =0;


 function otherFunction() {
   console.log(minutes, seconds);
    if ((seconds===0) && (minutes === 0)) {
      if (workPlay === 0){
        alert("Break Time!");
        minutes+= 5;
        document.getElementById("work").innerHTML = "Play";
        document.getElementById("minutes").innerHTML = minutes+" : ";
        workPlay++;
      }
      else {
        alert("Back to Work!");
        minutes+= 25;
        document.getElementById("work").innerHTML = "Work";
        document.getElementById("minutes").innerHTML =  minutes+" : ";
        workPlay--;

          }
    }


   else if (seconds === 0) {
      seconds = 59;
      minutes--;
      document.getElementById("time").innerHTML = seconds;
      document.getElementById("minutes").innerHTML =  minutes+" : ";
    } else {
      seconds--;
    }
    document.getElementById("time").innerHTML = seconds;
  }

$("#btn").on("click",function(){
  if (myVar===0){
    countdownFunction = setInterval(otherFunction, 1000);
    document.getElementById("play").src="../images/pause.png";
    myVar++;
  }
    else{
      clearInterval(countdownFunction);
      document.getElementById("play").src="../images/play.png";
      myVar--;

  }
});

$("#plus").on("click",function(){
  minutes += 5;
  document.getElementById("minutes").innerHTML =  minutes+" : ";
});

$("#minus").on("click",function(){
  minutes -= 5;
  document.getElementById("minutes").innerHTML =  minutes+" : ";
});

$("#reset").on("click",function(){
  minutes = 25;
  seconds = 00;
  document.getElementById("minutes").innerHTML = minutes+" : ";
  document.getElementById("time").innerHTML = seconds;
});

});
