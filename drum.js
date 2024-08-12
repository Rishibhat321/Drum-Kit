// detecting button press

let numberOfDrums= document.querySelector(".drum");

for(let i=0;i<numberOfDrums.clientHeight;i++)
{

document.querySelectorAll("button")[i].addEventListener("click",Clicked);
}

function Clicked(){
  /* alert("I got CLICKEKD!"); */

  /*   var audio=new Audio("sounds_drum/tom-1.mp3");
    audio.play();   */

  /*  console.log(this);  */

/*  this.style.color="white";   */


var buttoninnerHtml = this.innerHTML;

/*   switch(buttoninnerHtml)
{
  case "w" :
    var crash=new Audio("./sounds_drum/crash.mp3");
    crash.play();
    break;

  case "a" :
    var kick=new Audio("./sounds_drum/kick-bass.mp3");
    kick.play();
    break;

  case "s" :
    var snare=new Audio("./sounds_drum/snare.mp3");
    snare.play();
    break;

  case "d" :
    var tom1=new Audio("./sounds_drum/tom-1.mp3");
    tom1.play();
    break;

  case "j" :
    var tom2=new Audio("./sounds_drum/tom-2.mp3");
    tom2.play();
    break;
  case "k" :
    var tom3=new Audio("./sounds_drum/tom-3.mp3");
    tom3.play();
    break;
  
  case "l" :
    var tom4=new Audio("./sounds_drum/tom-4.mp3");
    tom4.play();
    break;

    default: console.log(buttoninnerHtml)

}  */

  makeSound(buttoninnerHtml);

  buttonAnimation(buttoninnerHtml);
      }


      // detecting keyboard press

document.addEventListener("keypress",function(event)
{
/*  this.alert("key got pressed");  */
  /*  console.log(event);  */

  makeSound(event.key);
  buttonAnimation(event.key);
});


     
  function makeSound(key) {

  switch(key)
{
  case "w" :
    var crash=new Audio("./sounds_drum/crash.mp3");
    crash.play();
    break;

  case "a" :
    var kick=new Audio("./sounds_drum/kick-bass.mp3");
    kick.play();
    break;

  case "s" :
    var snare=new Audio("./sounds_drum/snare.mp3");
    snare.play();
    break;

  case "d" :
    var tom1=new Audio("./sounds_drum/tom-1.mp3");
    tom1.play();
    break;

  case "j" :
    var tom2=new Audio("./sounds_drum/tom-2.mp3");
    tom2.play();
    break;
  case "k" :
    var tom3=new Audio("./sounds_drum/tom-3.mp3");
    tom3.play();
    break;
  
  case "l" :
    var tom4=new Audio("./sounds_drum/tom-4.mp3");
    tom4.play();
    break;

    default: console.log(buttoninnerHtml)

}

}


function buttonAnimation(CurrentKey){

  var ActiveButton= document.querySelector("." + CurrentKey);
  /* Timeout function in javascript
  ActiveButton.classList.add("pressed");  */

 /* setTimeout(function(){
    ActiveButton.classList.remove("pressed");
  }, 100); */

}