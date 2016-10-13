var menuChoice = 1;
var exitPressed = 0;
document.addEventListener('keydown', function(event) {
  var toGameButton = document.getElementById('toGame');
  var toMadeButton = document.getElementById('toMadeBy');
  var quitButton = document.getElementById('quit');
  var backButton = document.getElementById('back');
  switch (event.keyCode) {
    case 38: //up
      
      if (exitPressed == 0) {
        
        menuChoice = 1;
        toGameButton.className = 'myButtonColored';
        toMadeButton.className = 'myButton';
        }
      break;

    case 40: //down
      if (exitPressed == 0) {
        menuChoice = 2;
        toGameButton.className = 'myButton';
        toMadeButton.className = 'myButtonColored';
      }
    break;

    case 37: //left
      if (exitPressed == 1) {
        menuChoice = 1;

        backButton.className = 'myButton';
        quitButton.className = 'myButtonColored';
      }
      break;
    case 39: //right
      if (exitPressed == 1) {
        menuChoice = 2;
        backButton.className = 'myButtonColored';
        quitButton.className = 'myButton';
        }
      break;

    case 13: //enter
      if ( exitPressed == 0 ) {
        if ( menuChoice == 1 ) {
          menuChoice = 1;
          parent.toGame();
          break;
        }
        if ( menuChoice == 2 ) {
          parent.toMadeBy();
          menuChoice = 1;
          break;
        }
        break;
    }
    case 27: //ESC
    if(exitPressed == 0){
      exitPressed = 1;
      menuChoice = 1;
      window.location="menu.html#login_form";
      backButton.className = 'myButton';
      quitButton.className = 'myButtonColored';
    }
    else{
      exitPressed = 0;
      menuChoice = 1;
      window.location="menu.html#close";
      toGameButton.className = 'myButtonColored';
      toMadeButton.className = 'myButton';

    }
      
  }
});

document.addEventListener('keydown', function(event) {
  
//alert(event.keyCode);
});

document.onreadystatechange = function() {
    menuChoice = 1;
  }