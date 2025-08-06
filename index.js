var buttons = document.querySelectorAll(".drum");

function sounds(letter) {
  switch (letter) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonLetter);
  }
}

function animationOnClick(buttonClicked) {
  var buttonAnimated = document.querySelector("." + buttonClicked);
  buttonAnimated.classList.toggle("pressed");
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var buttonLetter = this.innerHTML;
    sounds(buttonLetter);
    animationOnClick(buttonLetter);
    setTimeout(function () {
      animationOnClick(buttonLetter);
    }, 100);
  });
}

document.addEventListener("keydown", function (event) {
  sounds(event.key);
  animationOnClick(event.key);
});

document.addEventListener("keyup", function (event) {
  animationOnClick(event.key);
});
