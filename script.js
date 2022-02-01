var seconds = 00;     // Initialization of second
var tens =00;         //// Initialization of milisecond
var appendTens =document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");
var intarval ;  // To Store Timer Values

//----------This is the main logic for Stopwatch----------//

function startTimer(){
    tens++;
if(tens<9){
    appendTens.innerHTML = "0" + tens;
}
if(tens>9){
    appendTens.innerHTML =  tens;
}
if(tens>99){
    seconds++;
    appendSeconds.innerHTML = "0"+seconds;
    tens =0;
    appendTens.innerHTML = "0"+ 0; 
}
if(seconds>9){
    appendSeconds.innerHTML =  seconds;
}
}
//----------This Function Will Run When Click on Start----------//
buttonStart.onclick= function(){
    intarval=setInterval(startTimer,10);
};

//----------This Function Will Run When Click on Stop----------//

buttonStop.onclick= function(){
    clearInterval(intarval);
};
//----------This Function Will Run When Click on Reset----------//

buttonReset.onclick= function(){
   clearInterval(intarval);
   tens="00";
   seconds="00";
   appendSeconds.innerHTML=seconds;
   appendTens.innerHTML=tens;
};