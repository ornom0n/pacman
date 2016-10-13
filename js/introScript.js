var logoAlpha = 0;
var logoFadeOut = 0;
var startComplete = 0;

var logo = new Image();
//Drawing the logo

function clear() { // clear canvas function
  ctx.clearRect( 0, 0, ctx.canvas.width, ctx.canvas.height );
}

function drawScene1() {
  clear();
  ctx.globalAlpha = logoAlpha;
  ctx.drawImage( logo, (canvas.width / 2) - 50, canvas.height / 2 );
}

//------------------
// MAIN
//------------------
function main() {
  //Draw logo
  if (logoAlpha < 1.0 && logoFadeOut == 0) {
      logoAlpha += 0.03;
  } else {
      logoAlpha -= 0.03;
      logoFadeOut = 1;
  }
  if (logoAlpha > 0) {
      drawScene1();
  } else {
      ctx.globalAlpha = 1;
      clearInterval();
      parent.toMenu(true);
  }


}


// -------------------------------------------------------------
// initialization
// -------------------------------------------------------------


document.onreadystatechange = function() {
  if (startComplete == 0) {

    canvas = document.getElementById('scene');
    ctx = canvas.getContext('2d'); //This one too
    
    
    highScore = localStorage.getItem("highScore");
    startComplete = 1; //Ensures that initialization wont be done twice
    //setInterval(main, 50); // loop drawScene, recursive setTimeout could be better, needs testing
    parent.toMenu(true);
    }

};

function iframeRef( frameRef ) {
  return frameRef.contentWindow
      ? frameRef.contentWindow.document
      : frameRef.contentDocument
};