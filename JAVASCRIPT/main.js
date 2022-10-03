  // decoration around img
function clicks(){
  document.getElementById("rock").style.boxShadow = "10px 5px 5px #"+Math.floor(Math.random()*16777215).toString(16);
  document.getElementById("paper").style.boxShadow = "10px 5px 5px #"+Math.floor(Math.random()*16777215).toString(16);
  document.getElementById("scissors").style.boxShadow = "10px 5px 5px #"+Math.floor(Math.random()*16777215).toString(16);
  document.getElementById("backSide").style.boxShadow = "10px 5px 5px #"+Math.floor(Math.random()*16777215).toString(16);
  }
  // starting decorations, starting button.
function startButton(){
  setInterval(clicks, 1000);
  // hover imgs
  let moveRock = document.getElementById("rock");
  moveRock.addEventListener("mouseover", function( event ) {
    moveRock.style.bottom = '5px'; 
    moveRock.style.left = '5px'; 
  }, false);
  moveRock.addEventListener("mouseout", function( event ) {
    moveRock.style.bottom = '0px'; 
    moveRock.style.left = '0px'; 
  }, false);
  let movepaper = document.getElementById("paper");
  movepaper.addEventListener("mouseover", function( event ) {
    movepaper.style.bottom = '5px'; 
    movepaper.style.left = '5px'; 
  }, false);
  movepaper.addEventListener("mouseout", function( event ) {
    movepaper.style.bottom = '0px'; 
    movepaper.style.left = '0px'; 
  }, false);
  let moveScissors = document.getElementById("scissors");
  moveScissors.addEventListener("mouseover", function( event ) {
    moveScissors.style.bottom = '5px'; 
    moveScissors.style.left = '5px'; 
  }, false);
  moveScissors.addEventListener("mouseout", function( event ) {
    moveScissors.style.bottom = '0px'; 
    moveScissors.style.left = '0px'; 
  }, false);
  
}
// Random Computer Choice
const ComputerChoice = ['rock', 'paper', 'scissors'];
const randomComputerChoice = Math.floor(Math.random() * ComputerChoice.length);

// player choice compare with coputer choice visualy
document.getElementById("rock").addEventListener("click",function displayCompChoice(){
  if(randomComputerChoice === 0){
   document.getElementById('rock1').style.visibility = "visible";
  }else if(randomComputerChoice === 1){
    document.getElementById('paper1').style.visibility = "visible";
  }else if(randomComputerChoice === 2){
    document.getElementById('scissors1').style.visibility = "visible";
  }
} );
document.getElementById("paper").addEventListener("click",function displayCompChoice(){
  if(randomComputerChoice === 0){
   document.getElementById('rock1').style.visibility = "visible";
  }else if(randomComputerChoice === 1){
    document.getElementById('paper1').style.visibility = "visible";
  }else if(randomComputerChoice === 2){
    document.getElementById('scissors1').style.visibility = "visible";
  }
} );
document.getElementById("scissors").addEventListener("click",function displayCompChoice(){
  if(randomComputerChoice === 0){
   document.getElementById('rock1').style.visibility = "visible";
  }else if(randomComputerChoice === 1){
    document.getElementById('paper1').style.visibility = "visible";
  }else if(randomComputerChoice === 2){
    document.getElementById('scissors1').style.visibility = "visible";
  }
} );
// display text results
document.getElementById('rock').addEventListener("click", function displayTextResult(){
  if(randomComputerChoice === 0){
    document.getElementById('e').style.visibility = "visible";
   }else if(randomComputerChoice === 1){
     document.getElementById('cw').style.visibility = "visible";
   }else if(randomComputerChoice === 2){
     document.getElementById('yw').style.visibility = "visible";
   }
});
document.getElementById('paper').addEventListener("click", function displayTextResult(){
  if(randomComputerChoice === 0){
    document.getElementById('yw').style.visibility = "visible";
   }else if(randomComputerChoice === 1){
     document.getElementById('e').style.visibility = "visible";
   }else if(randomComputerChoice === 2){
     document.getElementById('cw').style.visibility = "visible";
   }
});
document.getElementById('scissors').addEventListener("click", function displayTextResult(){
  if(randomComputerChoice === 0){
    document.getElementById('cw').style.visibility = "visible";
   }else if(randomComputerChoice === 1){
     document.getElementById('yw').style.visibility = "visible";
   }else if(randomComputerChoice === 2){
     document.getElementById('e').style.visibility = "visible";
   }
});



 





