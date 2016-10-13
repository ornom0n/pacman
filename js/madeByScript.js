var menuChoice = 1;
var exitPressed = 0;
document.addEventListener('keydown', function(event) {
  var button = document.getElementById('toGame');
  var button2 = document.getElementById('toMadeBy');
  switch (event.keyCode) {
    case 27: //esc
      parent.toMenu();
      break;

    case 13: //enter
      if ( exitPressed == 0 ) {
        parent.toMenu();
        break;
      }
    break;
  }
});