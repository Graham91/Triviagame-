var possiblequestions = ["In episode season 3 episode 14 nick screams like a little girl after meeting this famous artist.",
"In season 2 episode Schmidt, lamenting the loss of Cecelia, tries to replace her with this fish.",
 "In season 2 episode 20 At Nicks dads funeral While impersonating Elvis Jess sings this song.",
  "In season 4 episode 18 Bear Claw a Jess sing a song about this homosexual woodland animal.", "4?"];
var possibleanswer1 = ["A.	Michael Jackson", "A. Hammerhead shark", "A. Heart Break Hotel", "A. Bear", 4];
var possibleanswer2 = ["B.	Beyoncé", "B. Clone fish", "B. In The Ghetto", "B. Deer", 4];
var possibleanswer3 = ["C. Prince", "C. Angel fish", "C. Can’t Help Falling in Love", "C. Fox", 4];
var possibleanswer4 = ["D.	Elvis Presley","D. Lion fish", "D. I’m Leaving", "D. Frog", 4];
var questionindictator = 0;
var rightorwrongindictator = true;
var pictures =[0,1,2,3,4];
var answerclicked = "crazy"; 
var correctanswer = "bad";
var time = 10;
var timerRunning = true;
var intervalId = null;
var setupclicksarray = [];
setupclicksarray[0] =[false,false,true,false];
setupclicksarray[1] =[false,false,false,true];
setupclicksarray[2] =[false,true,false,false];
setupclicksarray[3] =[false,false,true,false];
setupclicksarray[4] =[false,false,true,false];
setupclicksarray[5] =[false,false,true,false];
setupclicksarray[6] =[false,false,true,false];
function gamerestart(){
resart();
// click();
}
function movetonextquestion(){
$(".question").html(possiblequestions[questionindictator]);
for (var i = 1; i <= 4; i++){
    var answerid = '#answer'+i;
    var possibleanswer = [0,possibleanswer1[questionindictator], possibleanswer2[questionindictator], possibleanswer3[questionindictator], possibleanswer4[questionindictator]];

    $(answerid).html(possibleanswer[i]);
   }
clearInterval(intervalId);
time = 10;
starttimer();





   
};


function starttimer(){
$("#timerdiv").text(time);

intervalId = setInterval(start, 1000);
function start( ){
if (time > 0){
time--;
$("#timerdiv").text(time);
}
else{
clearInterval(intervalId);
 clearAll();
 $(".question").text("to slow joe");
 logcorrectanswer();
 $("#picturediv").append(pictures[questionindictator]);
 gifplay();
 resart();

}
}
}

// this needs to change every time.

movetonextquestion();



$("#answer1").on("click", function(){
     logcorrectanswer();
     clearInterval(intervalId);
     console.log(correctanswer);
     console.log(possibleanswer1[questionindictator])
     if (correctanswer == possibleanswer1[questionindictator]){
       clearAll();
   $(".question").text("correct");
   $("#picturediv").append(pictures[questionindictator]);
   gifplay();
resart();}
   else {
       clearAll();
       answerclicked = possibleanswer1[questionindictator];
   $(".question").html("incorrect");
   $("#answer1").text("you choose: "+ answerclicked);
   $("#picturediv").append(pictures[questionindictator]);
   $("#answer3").text("correct choice: " + correctanswer);
   gifplay();
   resart();
  }
    });
$("#answer2").on("click", function(){
logcorrectanswer();
clearInterval(intervalId);
console.log(correctanswer);
console.log(possibleanswer2[questionindictator])
     if (correctanswer == possibleanswer2[questionindictator]){
       clearAll();
   $(".question").text("correct");
   $("#picturediv").append(pictures[questionindictator]);
   gifplay();
   resart();}
   else {
       clearAll();
       answerclicked = possibleanswer2[questionindictator];
   $(".question").html("incorrect");
   $("#answer1").text("you choose: "+ answerclicked);
   $("#picturediv").append(pictures[questionindictator]);
   $("#answer3").text("correct choice: " + correctanswer);
   gifplay()
   resart();;
   
   }

});
$("#answer3").on("click", function(){
logcorrectanswer();
clearInterval(intervalId);
console.log(correctanswer);
console.log(possibleanswer3[questionindictator])
     if (correctanswer == possibleanswer3[questionindictator]){
       clearAll();
   $(".question").text("correct");
   $("#picturediv").append(pictures[questionindictator]);
   gifplay();
   resart();}
   else {
       clearAll();
       answerclicked = possibleanswer3[questionindictator];
   $(".question").html("incorrect");
   $("#answer1").text("you choose: "+ answerclicked);
   $("#picturediv").append(pictures[questionindictator]);
   $("#answer3").text("correct choice: " + correctanswer);
   gifplay()
   resart();;
   
   }

});
$("#answer4").on("click", function(){
   logcorrectanswer();
   clearInterval(intervalId);
    console.log(correctanswer);
    console.log(possibleanswer4[questionindictator])
     if (correctanswer == possibleanswer4[questionindictator]){
       clearAll();
   $(".question").text("correct");
   $("#picturediv").append(pictures[questionindictator]);
   gifplay();
   resart();}
   else {
       clearAll();
   $(".question").html("incorrect");
   answerclicked = possibleanswer4[questionindictator];
   $("#answer1").text("you choose: "+ answerclicked);
   $("#picturediv").append(pictures[questionindictator]);
   $("#answer3").text("correct choice: " + correctanswer);
   gifplay();
   resart();
   }
   
});


// function winlose(){
//     if (rightorwrongindictator === true){
//         console.log("you win");
//         clearAll();
//         $(".question").text("correct");
//         $("#picturediv").append(pictures[questionindictator]);
//         gifplay();
  

//     }
//     else {
//         console.log("you lose");
//         clearAll();
//         $(".question").html("incorrect");
//         $("#answer1").text("you choose: "+ answerclicked);
//         $("#picturediv").append(pictures[questionindictator]);
//         gifplay();
   
  
   

function resart(){
questionindictator++;
}
function logcorrectanswer(){
for (var i = 0; i < 4; i++){
       var questionspecificarray = setupclicksarray[questionindictator];
       if (questionspecificarray[i] === true){
       var possibleanswer = [possibleanswer1[questionindictator], possibleanswer2[questionindictator], possibleanswer3[questionindictator], possibleanswer4[questionindictator]];
       
       correctanswer = possibleanswer[i];
       $("#answer3").text("correct choice: " + correctanswer);}
   };
};
function gifplay(){
time = 10;
setTimeout(function () {
clearAll();
$("#picturediv").empty();
movetonextquestion();
}, 3000)
}

function clearAll(){
$(".question").empty();
$("#answer1").empty();
$("#answer2").empty();
$("#answer3").empty();
$("#answer4").empty();
}