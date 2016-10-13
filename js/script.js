/*
X increases when going right
Y when going down
0,0 point is at upper left corner
*/

var canvas, ctx;
var cellSize = 30;
var startComplete = 'false';

var levelMap = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 0, 1, 1, 0, 1, 1, 
 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 
 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 
 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 
 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 
 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 
 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 
 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 
 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 
 1, 5, 6, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 
 0, 0, 0, 0, 0, 0, 9, 8, 8, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 
 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 3, 4, 1, 0, 1, 1, 1, 1, 0, 0, 0, 
 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 
 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 
 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 
 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 
 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 
 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 
 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 
 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 
 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 
 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];


var score = 0;
var feverTimer = 0;
var time = 180;
var startTime = 0;
var feverMode = 'false';
var sceneAt = 'intro';
var highScore;
var random = 0;

var firstRender = 'true';
var start = 'true';

var death = 'false';
var deathDone = 'false';
var pause = 'false';
var pauseSelector = 1;
//Indexes in objects array for quick access
var pacmanOBJN;
var ghost1OBJN;
var ghost2OBJN;
var ghost3OBJN;
var ghost4OBJN;

var maxPoints = 0;

//Movement booleans
var pMove = [0, 0, 0, 0] //Up, right, down, left
var g1Move = [0, 0, 0, 0] //Up, right, down, left
var g2Move = [0, 0, 0, 0] //Up, right, down, left
var g3Move = [0, 0, 0, 0] //Up, right, down, left
var g4Move = [0, 0, 0, 0] //Up, right, down, left

//Faced directions for animations
var pDir = 0;
var g1Dir = 0;
var g2Dir = 0;
var g3Dir = 0;
var g4Dir = 0;

//Scheduled movements to be done when possible
var schdUp = 'false';
var schdRight = 'false';
var schdDown = 'false';
var schdLeft = 'false';

//Possible diretions for ghosts to go
var g1Cho = [];
var g2Cho = [];
var g3Cho = [];
var g4Cho = [];

var collidedG = 0; //What ghost was collided with?
var g1Dead = 'false';
var g2Dead = 'false';
var g3Dead = 'false';
var g4Dead = 'false';

var gSpd = 1 / 3;

var aiTic = 0;

//Graphics
var dotImg = new Image();
var cookieImg = new Image();
var sheetImg = new Image();
var button = new Image();
var mapImg = new Image();

//Sounds
var sndBegin;
var sndChomp;
var sndDeath;
var sndEatG;
var startSound = 'notPlaying';
var bgGame;
var bgMenu;

//Values related to animation
var pacmanAnim;
var frameIndex;
var pXFrames = [7, 27, //Up
                7, 27, //Right
                7, 27, //Down
                7, 27  //Left
]; 

var pYFrames = [48, 48,
                27, 27,
                66, 66,
                7, 7
];
//Every ghost frame has the same x coordinates
var g1XFrames = [7, 27,
                127, 147,
                47, 67,
                87, 107
];

//Only their y coordinates differ in the table
var g1YFrames = [147, 147,
                147, 147,
                147, 147,
                147, 147
];

var g2YFrames = [107, 107,
                107, 107,
                107, 107,
                107, 107
];

var g3YFrames = [127, 127,
                127, 127,
                127, 127,
                127, 127
];

var g4YFrames = [87, 87,
                87, 87,
                87, 87,
                87, 87
];

var fvrXFrames = [7, 27,
                  7, 27,
                  7, 27,
                  7, 27
];

var fvrYFrames = [167, 167,
                  167, 167,
                  167, 167,
                  167, 167
];

var fvrLowYFrames = [167, 167,
                    167, 167,
                    167, 167,
                    167, 167
];

var fvrLowXFrames = [47, 67,
                    47, 67,
                    47, 67,
                    47, 67
];

var deathXFrames = [7, 27,
                    47, 67,
                    87, 107,
                    127, 147,
                    167, 187,
                    207
];

var deathYFrames = [246, 246,
                    246, 246,
                    246, 246,
                    246, 246,
                    246, 246,
                    246
];
var animTic = 0;





//Values related to scene 1 (DGMIT logo)
var logoAlpha = 0;
var logoFadeOut = 0;

//Four two dimensional arrays to be initialized. Left index is x-coordinate and right is y-coordinate
var objects = []; //Map of all game objects
var walls = []; //Map of all walls
var dots = []; //Map of all dots
var cookies = []; //Map of all cookies


//Menu values
var menuPosted = 'false';
var menuUpPosted = 'false';
var menuDownPosted = 'false';
var gameIsReady = 'false';
var escMenuChoice = 'quit';
var exitPressed = 'false';
var iframe;


// -------------------------------------------------------------
//Game area 900x630
// objects :

// -------------------------------------------------------------

// draw functions :

function clear() { // clear canvas function
  ctx.clearRect( 0, 0, ctx.canvas.width, ctx.canvas.height );
}


// -------------------------------------------------------------
// Initializing level
// -------------------------------------------------------------


function initializeLevel() {
  iFrameValue = iframeRef( iframe ); //Becomes a global variable

  canvas = iFrameValue.getElementById( 'scene' );
  ctx = canvas.getContext('2d'); //This one too
  if( score > highScore ){
    localStorage.setItem('highScore', score);
    }
  initializeValues();
  initializeArrays();


  for ( i = 1; i < 22; i++ ) { //y
    for ( j = 0; j < 30; j++ ) { //x
      switch ( levelMap[calc] ) {

        case 0:
          objects[calc] = [0, j, i, 1];
          dots[j][i] = 1;
          maxPoints += 100;
          break;
        case 1:
          walls[j][i] = 1;

          objects[calc] = [1, j, i, 1];
          break;
        case 2:
          cookies[j][i] = 1;
          objects[calc] = [2, j, i, 1];
          maxPoints += 100;
          break;
        case 3:
          objects[calc] = [3, j, i, 1];
          ghost1OBJN = calc;
          break;
        case 4:
          objects[calc] = [4, j, i, 1];
          ghost2OBJN = calc;
          break;
        case 5:
          objects[calc] = [5, j, i, 1];
          ghost3OBJN = calc;
          break;
        case 6:
          objects[calc] = [6, j, i, 1];
          ghost4OBJN = calc;
          break;
        case 7:
          objects[calc] = [7, j, i, 1];
          pacmanOBJN = calc;
          break;
        case 8:
          objects[calc] = [8, j, i, 1];
          break;
        case 9:
          walls[j][i] = 1;
          objects[calc] = [9, j, i, 1];
      }
      calc++;
    }
  }

  firstRender = 'false';

  clear(); // clear canvas
}

//Resets all important values for the game
function initializeValues(){
  highScore = localStorage.getItem( 'highScore' );
  
  if( highScore == null ){
    highScore = 0;
  }
  
  pMove = [0, 0, 0, 0]; //Up, right, down, left
  g1Move = [0, 0, 0, 0]; //Up, right, down, left
  g2Move = [0, 0, 0, 0]; //Up, right, down, left
  g3Move = [0, 0, 0, 0]; //Up, right, down, left
  g4Move = [0, 0, 0, 0]; //Up, right, down, left
  g1Cho = [];
  g2Cho = [];
  g3Cho = [];
  g4Cho = [];

  g1Dead = 'false';
  g2Dead = 'false';
  g3Dead = 'false';
  g4Dead = 'false';
  pDir = 0;
  g1Dir = 0;
  g2Dir = 0;
  g3Dir = 0;
  g4Dir = 0;

  pause = 'false';
  calc = 0;
  score = 0;
  time = 180;
  maxPoints = 0;
  aiTic = 0;
  death = 'false';
  start = 'true';
  startTime = 0;
  collidedG = 0;
  deathDone = 'false';
  feverMode = 'false';
  startSound = 'notPlaying';
  //bgGame.pause();
}

//Initializes three arrays into two dimensional ones
function initializeArrays(){
  //Initializing walls two dimensional array
  for ( i = 0; i < 30; i++ ) {
    walls[i] = [];
    for ( j = 1; j < 22; j++ ) {
      walls[i][j] = 0;
    }
  }

  //Initializing dots two dimensional array
  for ( i = 0; i < 30; i++ ) {
    dots[i] = [];
    for ( j = 1; j < 22; j++ ) {
      dots[i][j] = 0;
    }
  }

  //Initializing cookies two dimensional array
  for ( i = 0; i < 30; i++ ) {
    cookies[i] = [];
    for ( j = 1; j < 22; j++ ) {
      cookies[i][j] = 0;
    }
  }
}

// -------------------------------------------------------------
// Drawing level
// -------------------------------------------------------------

function drawLevel() { // main drawScene function
  clear(); // clear canvas

  //draw walls from an image
  //ctx.drawImage( mapImg, 0, 30, ctx.canvas.width, ctx.canvas.height - 60 );

  //Draw dots
  for ( i = 0; i < 30; i++ ) {
    for ( j = 1; j < 22; j++ ) {
      if( dots[i][j] == 1 ){
        ctx.drawImage( dotImg, ( i * cellSize ) + 
        ( cellSize / 2 ) - 5, j * cellSize + ( cellSize / 2 ) - 5 );
      }
    }
  }

  //Draw cookies
  for ( i = 0; i < 30; i++ ) {
    for ( j = 1; j < 22; j++ ) {
      if( cookies[i][j] == 1 ){
        ctx.drawImage( cookieImg, ( i * cellSize ) + 
        ( cellSize / 2 ) - 10, j * cellSize + ( cellSize / 2 ) - 10 );
      }
    }
  }

  for ( i = 0; i < objects.length; i++ ) {
    switch ( objects[i][0] ) {

      case 0:
        //draw dot, but dots already drawn
        /*if ( dots[objects[i][1]][objects[i][2]] == 1 ) {
          ctx.drawImage( dotImg, ( objects[i][1] * cellSize ) + 
          ( cellSize / 2 ) - 5, [objects[i][2]] * cellSize + ( cellSize / 2 ) - 5 );
        }*/
        break;
      case 1:
        //Small renderig problem here. Cutting rect sizes to half would fix it
        ctx.fillStyle = 'blue';
        ctx.fillRect( objects[i][1] * cellSize, objects[i][2] * cellSize, cellSize, cellSize );
        break;
      case 2:
        //draw cookie
        /*if ( cookies[objects[i][1]][objects[i][2]] == 1 ) {
          ctx.drawImage(cookieImg, ( objects[i][1] * cellSize ) + 
          ( cellSize / 2 ) - 10, [objects[i][2]] * cellSize + ( cellSize / 2 ) - 10 );
        }*/
        break;
      case 3:
        //draw orange ghost
        drawActor( objects[i][1], objects[i][2], g1XFrames, g1YFrames, g1Dir, 'false' );

        break;
      case 4:
        //draw pink ghost
        drawActor( objects[i][1], objects[i][2], g1XFrames, g2YFrames, g2Dir, 'false' );

        break;
      case 5:
        //draw blue ghost
        drawActor( objects[i][1], objects[i][2], g1XFrames, g3YFrames, g3Dir, 'false' );

        break;
      case 6:
        //draw red ghost
        drawActor( objects[i][1], objects[i][2], g1XFrames, g4YFrames, g4Dir, 'false' );

        break;
      case 7:
        //draw pacman
        drawActor( objects[i][1], objects[i][2], pXFrames, pYFrames, pDir, 'true' );
        break;
      case 8:
        //8 is just an empty tile
        break;
      case 9:
        //draw ghostgate
        ctx.fillStyle = 'orange';
        ctx.fillRect( objects[i][1] * cellSize, (objects[i][2] * cellSize), cellSize - 20, cellSize );
        break;
    }
  }

  //Draw pause menu
  drawPause();

  //draw texts
  drawTexts();
}

function drawTexts(){
  if ( start == 'true' && pause == 'false' ) {
    ctx.font = '30px Arial';
    ctx.fillStyle = 'yellow';
    ctx.fillText( 'Ready!', 400, 415 );
  }

  ctx.font = '30px Arial';
  ctx.fillStyle = 'white';
  ctx.fillText( 'Score', 10, 25 );
  ctx.fillText( score, 110, 25 );

  ctx.fillText( 'Time', 300, 25 );
  ctx.fillText( timeCountMinutes(), 380, 25 );
  ctx.fillText( ':' + timeCountSeconds(), 395, 25 );

  ctx.fillText( 'High Score', 600, 25 );
  ctx.fillText( highScore, 770, 25 );
}

function drawPause(){
  if ( pause == 'true' ) {
    ctx.fillStyle = 'white';
    ctx.fillText( 'Up and down = Move selector, Enter = choose selected option', 10, 685 );
    if ( pauseSelector == 1 ) ctx.fillStyle = 'yellow';
    else ctx.fillStyle = 'white';

    ctx.fillRect( 400, 250, 120, 50 );
    ctx.fillStyle = 'blue';
    ctx.fillText( 'Resume', 405, 280 );

    if ( pauseSelector == 2 ) ctx.fillStyle = 'yellow';
    else ctx.fillStyle = 'white';

    ctx.fillRect( 400, 310, 120, 50 );
    ctx.fillStyle = 'blue';
    ctx.fillText( 'Retry', 425, 340 );

    if ( pauseSelector == 3 ) ctx.fillStyle = 'yellow';
    else ctx.fillStyle = 'white';
    ctx.fillRect( 400, 370, 120, 50 );
    ctx.fillStyle = 'blue';
    ctx.fillText( 'Main', 425, 400 );
    } 
    else if ( death == 'true' ) {
      ctx.fillStyle = 'white';
      ctx.fillText( 'Left and right = Move selector, Enter = choose selected option', 10, 685 );
      deathDone = 'true';

      ctx.fillStyle = 'black';
      ctx.fillRect( 320, 200, 300, 150 );
      ctx.fillStyle = 'blue';
      if( score < maxPoints ){
        ctx.fillText( 'Game over!', 385, 230 );
      }
      else{
        ctx.fillText( 'Victory!', 415, 230 );
      }
      

      if ( menuChoice == 1 ) ctx.fillStyle = 'yellow';
      else ctx.fillStyle = 'white';
      ctx.fillRect( 340, 250, 100, 50 );
      ctx.fillStyle = 'blue';
      ctx.fillText( 'Retry', 350, 285 );

      if ( menuChoice == 2 ) ctx.fillStyle = 'yellow';
      else ctx.fillStyle = 'white';
      ctx.fillRect( 510, 250, 100, 50 );
      ctx.fillStyle = 'blue';
      ctx.fillText( 'Menu', 520, 285 );

        //}

    } 
    else if ( pause == 'false' ) {
      ctx.fillStyle = 'white';
      ctx.fillText( 'Movement = arrow keys, Pause = ESC', 10, 685 );
    }
}

//Drawing sprite and its animations
function drawActor( _x, _y, _framesX, _framesY, _dir, _isPMan ){
  if ( feverMode == 'true' && _isPMan == 'false') {
    if( feverTimer < 200){
      renderFrame( _x * cellSize, _y * cellSize, fvrXFrames,
      fvrYFrames, g4Dir );
    }
    else{
      if(animTic == 1){
        renderFrame( _x * cellSize, _y * cellSize, fvrXFrames,
        fvrYFrames, g4Dir );
      }
      else{
        renderFrame( _x * cellSize, _y * cellSize, fvrLowXFrames,
        fvrYFrames, g4Dir );
      }
      
    }
  } else {
    renderFrame( _x * cellSize, _y * cellSize, _framesX,
    _framesY, _dir );
  }
}


//For debuging tiles
function drawDebug() { 
  clear(); // clear canvas
  ctx.fillStyle = 'white';
  var calc = 0;
  for ( i = 0; i < 30; i++ ) { //x
    for ( j = 1; j < 21; j++ ) { //y
      ctx.font = '15px Arial';

      ctx.fillText( calc, i * cellSize, j * cellSize );
      calc++;
    }
  }
  ctx.stroke();




}

// -------------------------------------------------------------
// ANIMATION
// -------------------------------------------------------------


function renderFrame( _dx, _dy, _sx, _sy, _dir ) {
  if ( typeof _dir == 'undefined' ) {
    _dir = 0;
  }
  // Draw the animation
  ctx.drawImage(
    sheetImg,
    _sx[frameIndex + (_dir * 2)],
    _sy[frameIndex + (_dir * 2)],
    14,
    14,
    _dx,
    _dy,
    30,
    30);
}

function updateFrame() {
  animTic++;
  if (animTic == 2) {

    if ( frameIndex < 1 ) {
      frameIndex++;
      animTic = 0
    } else {
      frameIndex = 0;
      animTic = 0;
    }
  }
}

// -------------------------------------------------------------
// MenuManager
// -------------------------------------------------------------

function menuManager( _selection ){
  iframe = document.getElementById('screen');
  iFrameValue = iframeRef( iframe );

  switch (_selection){
    case 'toGame':
      iFrameValue.getElementById( 'toGame' ).className = 'myButtonColored';
      iFrameValue.getElementById( 'toMadeBy' ).className = 'myButton';
      break;
    case 'toMadeBy':
      iFrameValue.getElementById( 'toGame' ).className = 'myButton';
      iFrameValue.getElementById( 'toMadeBy' ).className = 'myButtonColored';
      break;
    case 'quit':
      iFrameValue.getElementById( 'back' ).className = 'myButton';
      iFrameValue.getElementById( 'quit' ).className = 'myButtonColored';
      break;
    case 'back':
      iFrameValue.getElementById( 'back' ).className = 'myButtonColored';
      iFrameValue.getElementById( 'quit' ).className = 'myButton';
      break;
    case 'openExit':
      iFrameValue.location='menu.html#exit_popup';
      break;
    case 'closeExit':
      iFrameValue.location='menu.html#close';
      break;
  }
  
}

// -------------------------------------------------------------
// Fever mode
// -------------------------------------------------------------

function fever() {
  feverMode = 'true';
  //gSpd = 1/3 * 0.8;
  feverTimer = 0;
}

// -------------------------------------------------------------
// CLOCK
// -------------------------------------------------------------

function timeCountSeconds() {

  //Needs to be converted to mm:ss
  var tempTime = Math.floor( time % 60 );

  if( tempTime == 0 ){
    return '00';
  }
  else if( tempTime < 10 && tempTime > 0 ){
    return ( '0' + tempTime )
  }
  else{
    return Math.floor( time % 60 );
  }
  
}
function timeCountMinutes() {
  
  //Needs to be converted to mm:ss
  return Math.floor(time / 60);
}
// -------------------------------------------------------------
// MAIN
// -------------------------------------------------------------
function main() {
  //Display logo
  switch ( sceneAt ) {
    //Draw logo
    case 'intro':
      /*if (logoAlpha < 1.5 && logoFadeOut == 0) {
          logoAlpha += 0.03;
      } else {
          logoAlpha -= 0.03;
          logoFadeOut = 1;
      }
      if (logoAlpha > 0) {
          drawScene1();
      } else {
          sceneAt++;
          ctx.globalAlpha = 1;
      }*/
      break;
    case 'menu':
      firstRender = 'true';
      if( menuPosted == 'false' ){
        iframe.src = 'menu.html';
        menuPosted = 'true';
      }

      break;
      //Draw game
    case 'game':
        
      if ( firstRender == 'true' ) {
          initializeLevel();
      }
      drawLevel();
      if ( start == 'true' ) {
        if( startSound == 'notPlaying' ){

          startSound = 'playing';
          sndBegin.play();

        }
          
      }

      //If time runs out, Pacman dies
      if ( time <= 0 ) {
        death = 'true';
      }
      if ( score == maxPoints ) {
        death = 'true';
      }

      if ( death == 'false' && pause == 'false' ) {
        updateFrame();
        startTime += 1;
          if ( startTime == 87 ) {
            start = 'false';
            playGameBGM();
          }
        if ( start == 'false' ) {
          time -= 0.04
          ghostAI();
          collision();
          movement();
          if ( feverMode == 'true' ) {
            if ( feverTimer == 250 ) {
              feverMode = 'false';
            } else {
              feverTimer += 1;
            }

          }
        }
      }
      if ( death == 'true' ) {
        if ( score > highScore ) {
          localStorage.setItem('highScore', score);
        }
      }
      break;
    case 'madeBy':
      //drawMadeBy();
      if( menuPosted == 'false' ){
        iframe.src = 'madeBy.html';
        menuPosted = 'true';
      }
  }

}

// -------------------------------------------------------------
// COLLISIONS
// -------------------------------------------------------------

function collision() {
  var pX = objects[pacmanOBJN][1];
  var pY = objects[pacmanOBJN][2];

  //If pacman's location is between two squares eg. his location's x or y has decimals
  var floorX;
  var floorY;
  var ceilX;
  var ceilY;

  if ( pX % 1 != 0 ) {
    floorX = Math.floor(pX);
    ceilX = Math.ceil(pX);
  } else {
    floorX = pX;
    ceilX = pX;
  }

  if ( pY % 1 != 0 ) {
    floorY = Math.floor(pY);
    ceilY = Math.ceil(pY);
  } else {
    floorY = pY;
    ceilY = pY;
  }

  //Improved collisions
  //Collision to upper wall
  if ( pMove[0] == 1 ) {
    if ( walls[floorX][floorY - 1] == 1 && walls[ceilX][ceilY - 1] == 1 ) {
      if ( schdLeft != 'true' || schdRight != 'true' || schdUp != 'true' ) {
        pMove = [0, 0, 0, 0];
      }

    }
  }

  //Collision to wall on right
  if ( pMove[1] == 1 ) {
    if ( walls[floorX + 1][floorY] == 1 && walls[ceilX + 1][ceilY] == 1 ) {
      if ( schdUp != 'true' || schdDown != 'true' || schdRight != 'true' ) {
        pMove = [0, 0, 0, 0];
      }

    }
  }


  //Collision to lower wall
  if ( pMove[2] == 1 ) {
    if ( walls[floorX][floorY + 1] == 1 && walls[ceilX][ceilY + 1] == 1 ) {
      if ( schdLeft != 'true' || schdRight != 'true' || schdDown != 'true' ) {
        pMove = [0, 0, 0, 0];
      }
    }
  }


  //Collision to wall on left
  if ( pMove[3] == 1 ) {
    if ( walls[floorX - 1][floorY] == 1 && walls[ceilX - 1][ceilY] == 1 ) {
      if ( schdUp != 'true' || schdDown != 'true' || schdLeft != 'true' ) {
        pMove = [0, 0, 0, 0];
      }
    }
  }

  //Is there a dot on pacman?
  if ( pX % 1 == 0 && pY % 1 == 0 ) {
    if ( dots[pX][pY] == 1 ) {
      dots[pX][pY] = 0;
      score += 100;
      sndChomp.play();
    }
  }

  //Is there a cookie on pacman?
  if ( pX % 1 == 0 && pY % 1 == 0 ) {
    if ( cookies[pX][pY] == 1 ) {
      cookies[pX][pY] = 0;
      score += 100;
      sndChomp.play();
      fever();
    }
  }


  //Is there a ghost on Pacman?
  if ( ghostCollision( ghost1OBJN, pX, pY ) ) {
    collidedG = 'orange';
  }
  if ( ghostCollision( ghost2OBJN, pX, pY ) ) {
    collidedG = 'pink'
  }
  if ( ghostCollision( ghost3OBJN, pX, pY ) ) {
    collidedG = 'blue';
  }
  if ( ghostCollision( ghost4OBJN, pX, pY ) ) {
    collidedG = 'red';
  }


  if ( collidedG != 0 ) {
      //Eat a ghost
    if ( feverMode == 'true' ) {
      sndEatG.play();
        time += 10;
        switch ( collidedG ) {
          case 'orange':
            moveGhostToSpawn(ghost1OBJN);
            g1Dead = 'true';
            break;
          case 'pink':
            moveGhostToSpawn(ghost2OBJN);
            g2Dead = 'true';
            break;
          case 'blue':
            moveGhostToSpawn(ghost3OBJN);
            g3Dead = 'true';
            break;
          case 'red':
            moveGhostToSpawn(ghost4OBJN);
            g4Dead = 'true';
            break;
        }
        collidedG = 0;
    }
    //die
    else {
      death = 'true';
      bgGame.pause();
      sndDeath.play();
      pMove = [0, 0, 0, 0];
    }
  }
}

function ghostCollision( _OBJN, _pX, _pY ){
  if ( Math.floor( objects[_OBJN][1] ) == Math.floor(_pX) && 
      Math.floor( objects[_OBJN][2] ) == Math.floor(_pY) || 
      Math.ceil( objects[_OBJN][1] ) == Math.ceil(_pX) && 
      Math.ceil( objects[_OBJN][2] ) == Math.ceil(_pY) ) {
    return true;
  }
  else return false;
}

function moveGhostToSpawn( _OBJN ){
  objects[_OBJN][1] = 14;
  objects[_OBJN][2] = 10;
}

function collisionCheck( _direction, _OBJN ) {
  var pX = objects[_OBJN][1];
  var pY = objects[_OBJN][2];

  //If pacman's location is between two squares eg. his location's x or y has decimals
  var floorX;
  var floorY;
  var ceilX;
  var ceilY;

  if ( pX % 1 != 0 ) {
    floorX = Math.floor( pX );
    ceilX = Math.ceil( pX );
  } else {
    floorX = pX;
    ceilX = pX;
  }

  if ( pY % 1 != 0 ) {
    floorY = Math.floor( pY );
    ceilY = Math.ceil( pY );
  } else {
    floorY = pY;
    ceilY = pY;
  }


  //Improved collisions
  //Collision to upper wall
  if ( _direction == 0 ) {
    if ( walls[floorX][floorY - 1] == 1 || walls[ceilX][ceilY - 1] == 1 ) {
      return 1;
    }
  }

  //Collision to wall on right
  if ( _direction == 1 ) {
    if ( walls[floorX + 1][floorY] == 1 || walls[ceilX + 1][ceilY] == 1 ) {
      return 1;
    }
  }


  //Collision to lower wall
  if ( _direction == 2 ) {
    if ( walls[floorX][floorY + 1] == 1 || walls[ceilX][ceilY + 1] == 1 ) {
      return 1;
    }
  }


  //Collision to wall on left
  if (_direction == 3 ) {
    if ( walls[floorX - 1][floorY] == 1 || walls[ceilX - 1][ceilY] == 1 ) {
      return 1;
    }
  }

  return 0;
}


// -------------------------------------------------------------
// MOVEMENT
// -------------------------------------------------------------

function movement() {
  //Pacman

  //Movement schedule
  if ( schdUp == 'true' ) {

    if ( collisionCheck( 0, pacmanOBJN ) == 0 ) {
      pMove = [1, 0, 0, 0];
      schUp = 'false';
    }

  } else if ( schdRight == 'true' ) {
      if ( collisionCheck( 1, pacmanOBJN ) == 0 ) {
        pMove = [0, 1, 0, 0];
        schdRight = 'false';
      }
  } else if ( schdDown == 'true' ) {
      if ( collisionCheck( 2, pacmanOBJN ) == 0 ) {
        pMove = [0, 0, 1, 0];
        schdDown = 'false';
      }
  } else if ( schdLeft == 'true' ) {
    if ( collisionCheck( 3, pacmanOBJN ) == 0 ) {
      pMove = [0, 0, 0, 1];
      schdLeft = 'false';
    }
  }
  //Pacman
  if ( pMove[0] == 1 ) {
    pDir = 0;
    objects[pacmanOBJN][2] -= 1 / 3;
  } else if ( pMove[1] == 1 ) {
    objects[pacmanOBJN][1] += 1 / 3;
    pDir = 1;
  } else if ( pMove[2] == 1 ) {
    objects[pacmanOBJN][2] += 1 / 3;
    pDir = 2;
  } else if ( pMove[3] == 1 ) {
    objects[pacmanOBJN][1] -= 1 / 3;
    pDir = 3;
  }

  //Movement for ghosts
  gMovement();

  //Rounding locations for more accurate collisions
  roundLoc();
}

function gMovement(){
  //Ghosts
  if ( g1Dead == 'false' ) {
    if ( g1Move[0] == 1 ) {
      objects[ghost1OBJN][2] -= gSpd;
      g1Dir = 0;
    } else if ( g1Move[1] == 1 ) {
      objects[ghost1OBJN][1] += gSpd;
      g1Dir = 1;
    } else if ( g1Move[2] == 1 ) {
      objects[ghost1OBJN][2] += gSpd;
      g1Dir = 2;
    } else if ( g1Move[3] == 1 ) {
      objects[ghost1OBJN][1] -= gSpd;
      g1Dir = 3;
    }

  }

  if ( g2Dead == 'false' ) {
    if ( g2Move[0] == 1 ) {
      objects[ghost2OBJN][2] -= gSpd;
      g2Dir = 0;
    } else if ( g2Move[1] == 1 ) {
      objects[ghost2OBJN][1] += gSpd;
      g2Dir = 1;
    } else if ( g2Move[2] == 1 ) {
      objects[ghost2OBJN][2] += gSpd;
      g2Dir = 2;
    } else if ( g2Move[3] == 1 ) {
      objects[ghost2OBJN][1] -= gSpd;
      g2Dir = 3;
    }
  }

  if ( g3Dead == 'false' ) {
    if ( g3Move[0] == 1 ) {
      objects[ghost3OBJN][2] -= gSpd;
      g3Dir = 0;
    } else if ( g3Move[1] == 1 ) {
      objects[ghost3OBJN][1] += gSpd;
      g3Dir = 1;
    } else if ( g3Move[2] == 1 ) {
      objects[ghost3OBJN][2] += gSpd;
      g3Dir = 2;
    } else if ( g3Move[3] == 1 ) {
      objects[ghost3OBJN][1] -= gSpd;
      g3Dir = 3;
    }
  }

  if ( g4Dead == 'false' ) {
    if ( g4Move[0] == 1 ) {
      objects[ghost4OBJN][2] -= gSpd;
      g4Dir = 0;
    } else if ( g4Move[1] == 1 ) {
      objects[ghost4OBJN][1] += gSpd;
      g4Dir = 1;
    } else if ( g4Move[2] == 1 ) {
      objects[ghost4OBJN][2] += gSpd;
      g4Dir = 2;
    } else if ( g4Move[3] == 1 ) {
      objects[ghost4OBJN][1] -= gSpd;
      g4Dir = 3;
    }
  }
}


function roundLoc() {
  //Rounding Pacman
  if ( ( objects[pacmanOBJN][1] % 1 ) > 0.8) {
    objects[pacmanOBJN][1] = Math.ceil( objects[pacmanOBJN][1] );
  }
  if ( ( objects[pacmanOBJN][1] % 1 ) < 0.1 && ( objects[pacmanOBJN][1] % 1 ) != 0 ) {
    objects[pacmanOBJN][1] = Math.floor( objects[pacmanOBJN][1] );
  }
  if ( ( objects[pacmanOBJN][2] % 1 ) > 0.8 ) {
    objects[pacmanOBJN][2] = Math.ceil( objects[pacmanOBJN][2] );
  }
  if ( ( objects[pacmanOBJN][2] % 1 ) < 0.1 && ( objects[pacmanOBJN][2] % 1 ) != 0 ) {
    objects[pacmanOBJN][2] = Math.floor( objects[pacmanOBJN][2] );
  }

  //Rounding Ghosts
  if ( ( objects[ghost1OBJN][1] % 1 ) > 0.8 ) {
    objects[ghost1OBJN][1] = Math.ceil( objects[ghost1OBJN][1] );
  }
  if ( ( objects[ghost1OBJN][1] % 1) < 0.1 && ( objects[ghost1OBJN][1] % 1 ) != 0 ) {
    objects[ghost1OBJN][1] = Math.floor( objects[ghost1OBJN][1] );
  }
  if ( ( objects[ghost1OBJN][2] % 1 ) > 0.8 ) {
    objects[ghost1OBJN][2] = Math.ceil( objects[ghost1OBJN][2] );
  }
  if ( ( objects[ghost1OBJN][2] % 1 ) < 0.1 && ( objects[ghost1OBJN][2] % 1 ) != 0 ) {
    objects[ghost1OBJN][2] = Math.floor( objects[ghost1OBJN][2] );
  }

  if ( ( objects[ghost2OBJN][1] % 1 ) > 0.8 ) {
    objects[ghost2OBJN][1] = Math.ceil( objects[ghost2OBJN][1] );
  }
  if ( ( objects[ghost2OBJN][1] % 1) < 0.1 && ( objects[ghost2OBJN][1] % 1 ) != 0 ) {
    objects[ghost2OBJN][1] = Math.floor( objects[ghost2OBJN][1] );
  }
  if ( ( objects[ghost2OBJN][2] % 1 ) > 0.8 ) {
    objects[ghost2OBJN][2] = Math.ceil( objects[ghost2OBJN][2] );
  }
  if ( ( objects[ghost2OBJN][2] % 1 ) < 0.1 && ( objects[ghost2OBJN][2] % 1 ) != 0 ) {
    objects[ghost2OBJN][2] = Math.floor( objects[ghost2OBJN][2] );
  }

  if ( ( objects[ghost3OBJN][1] % 1 ) > 0.8 ) {
    objects[ghost3OBJN][1] = Math.ceil( objects[ghost3OBJN][1] );
  }
  if ( ( objects[ghost3OBJN][1] % 1 ) < 0.1 && ( objects[ghost3OBJN][1] % 1 ) != 0 ) {
    objects[ghost3OBJN][1] = Math.floor( objects[ghost3OBJN][1] );
  }
  if ( ( objects[ghost3OBJN][2] % 1) > 0.8 ) {
    objects[ghost3OBJN][2] = Math.ceil( objects[ghost3OBJN][2] );
  }
  if ( ( objects[ghost3OBJN][2] % 1 ) < 0.1 && ( objects[ghost3OBJN][2] % 1 ) != 0 ) {
    objects[ghost3OBJN][2] = Math.floor( objects[ghost3OBJN][2] );
  }

  if ( ( objects[ghost4OBJN][1] % 1 ) > 0.8 ) {
    objects[ghost4OBJN][1] = Math.ceil( objects[ghost4OBJN][1] );
  }
  if ( ( objects[ghost4OBJN][1] % 1) < 0.1 && ( objects[ghost4OBJN][1] % 1 ) != 0 ) {
    objects[ghost4OBJN][1] = Math.floor( objects[ghost4OBJN][1] );
  }
  if ( ( objects[ghost4OBJN][2] % 1 ) > 0.8 ) {
    objects[ghost4OBJN][2] = Math.ceil( objects[ghost4OBJN][2] );
  }
  if ( ( objects[ghost4OBJN][2] % 1 ) < 0.1 && ( objects[ghost4OBJN][2] % 1 ) != 0 ) {
    objects[ghost4OBJN][2] = Math.floor( objects[ghost4OBJN][2] );
  }
}



// -------------------------------------------------------------
// KEY HANDLING
// -------------------------------------------------------------

document.addEventListener( 'keydown', function(event) {
  //alert(event.keyCode);
  schdUp = 'false';
  schdRight = 'false';
  schdDown = 'false';
  schdLeft = 'false';

  //Menu
  switch ( sceneAt ) {
    case 'menu':
      switch ( event.keyCode ) {
        case 38: //up
          if ( exitPressed == 'false' ) {
                
            menuChoice = 1;
            menuManager( 'toGame' );
                
            }
          break;
        case 40: //down
          if ( exitPressed == 'false' ) {
                
            menuChoice = 2;
            menuManager( 'toMadeBy' );
            }
          break;

        case 39: //right
          if ( exitPressed == 'true' ) {
            escMenuChoice = 'back';
            menuManager( 'back' );
            }
          break;

        case 37: //left
          if ( exitPressed == 'true' ) {
            escMenuChoice = 'quit';
            menuManager( 'quit' );
          }
          break;
        case 13: //enter
          if ( exitPressed == 'false' ) {
            if ( menuChoice == 1 ) {
              toGame();
              break;
            }
            if ( menuChoice == 2 ) {
              toMadeBy();
              //menuChoice = 1;
              break;
            }
          } else {
            if ( escMenuChoice == 'quit' ) {
              break;
            };
            if ( escMenuChoice == 'back' ) {
              menuManager( 'closeExit' );

              exitPressed = 'false';
              break;
            }
          }
          break;

        case 27: //ESC
          if ( exitPressed == 'false' ) {
            menuManager( 'openExit' );

            menuManager( 'quit' );
            exitPressed = 'true';
            escMenuChoice = 'quit';
            break;
          } else {
            menuManager( 'closeExit' );

            exitPressed = 'false';

            break;
          }
          break;
      }
      break;
    //The game
    case 'game':
      switch ( event.keyCode ) {

        case 38: //up
          if ( pause == 'false' ) {
            if ( death == 'false' ) {
              schdUp = 'true';
            }
          } 
          else {
            pauseSelector--;
            if (pauseSelector == 0) {
              pauseSelector = 3;
            }
          }
          break;

              
        case 39: //right

          if ( death == 'false' ) {
            schdRight = 'true';
          } else {
              //Just picks the button quickly, no selector yet
            if ( pause == 'false' ) {
              menuChoice--;
              if ( menuChoice == 0 ) {
                menuChoice = 2;
              }
            }
          }

          break;
        case 40: //down
          if ( pause == 'false' ) {
            if ( death == 'false' ) {
              schdDown = 'true';
            }
          } else {
            pauseSelector++;
            if ( pauseSelector == 4 ) {
              pauseSelector = 1;
            }
          }
          break;
        case 37: //left 
          if ( death == 'false' ) {
            schdLeft = 'true';
          } else {
              
            if ( pause == 'false' ) {
              menuChoice++;
              if ( menuChoice == 3 ) {
                menuChoice = 1;
              }
            }
          }
          break;
        case 13: //Enter
          if ( pause == 'true' ) {
            switch ( pauseSelector ) {
              case 1:
                pause = 'false';
                menuChoice = 1;
                break;
              case 2:
                menuChoice = 1;
                bgGame.pause();
                pause = 'false';
                if( score > highScore ){
                  localStorage.setItem( 'highScore', score );
                }
                initializeLevel();
                break;
              case 3:

                toMenu(true);
                playMenuBGM();
                if ( score > highScore ) {
                  localStorage.setItem( 'highScore', score );
                  }

                menuChoice = 1;
                break;
            }
          } 
          else {
            if ( death == 'true' ) {
              if ( menuChoice == 1 ) {
                pause = 'false';
                menuChoice = 1;
                initializeLevel();
              } else if ( menuChoice == 2 ) {
                toMenu(true);
              }
            }
          }
          break;
          case 27: //Esc
            if ( pause == 'false' && sceneAt == 'game' ) {
              menuChoice = 1;
              pause = 'true';
            } else {
              pause = 'false';
              menuChoice = 1;
            }
            break;
      }
    //Made by
    case 'madeBy':
      switch ( event.keyCode ) {
        case 27: //ESC
          if ( sceneAt == 'madeBy' ) {
            menuChoice = 1;
            toMenu(false);
          }
          break;
        case 13: //Enter
          if ( sceneAt == 'madeBy' ) {
            menuChoice = 1;
            toMenu(false);
          }
          break;
        }

  }

});




// -------------------------------------------------------------
// Ghost AI
// -------------------------------------------------------------

function ghostAI() {
  if ( aiTic == 0 ) {

    ghostAIIni();

    //Is a ghost at spawn? If so, move it out,
    //except if Pacman is camping close to gate
    g1Dir = ghostOutOfSpawn( objects[ghost1OBJN][1], objects[ghost1OBJN][2] );
    if( g1Dir != 5 ){
      if( pacmanAtGate( objects[pacmanOBJN][1],objects[pacmanOBJN][2] ) ){
        g1Move[g1Dir] = 0;
      }
      else{
        g1Move[g1Dir] = 1;
      }
      g1AtSpawn = 'true';
    }
    g2Dir = ghostOutOfSpawn( objects[ghost2OBJN][1], objects[ghost2OBJN][2] );
    if( g2Dir != 5 ){
      if( pacmanAtGate( objects[pacmanOBJN][1], objects[pacmanOBJN][2] ) ){
        g2Move[g2Dir] = 0;
      }
      else{
        g2Move[g2Dir] = 1;
      }
      g2AtSpawn = 'true';
    }
    g3Dir = ghostOutOfSpawn( objects[ghost3OBJN][1], objects[ghost3OBJN][2] );
    if( g3Dir != 5 ){
      if( pacmanAtGate( objects[pacmanOBJN][1], objects[pacmanOBJN][2] ) ){
        g3Move[g3Dir] = 0;
      }
      else{
        g3Move[g3Dir] = 1;
      }
      g3AtSpawn = 'true';
    }
    g4Dir = ghostOutOfSpawn( objects[ghost4OBJN][1], objects[ghost4OBJN][2] );
    if( g4Dir != 5 ){
      if( pacmanAtGate( objects[pacmanOBJN][1], objects[pacmanOBJN][2] ) ){
        g4Move[g4Dir] = 0;
      }
      else{
        g4Move[g4Dir] = 1;
      }
      g4AtSpawn = 'true';
    }

    
    //Ordinary ghost movement
    if( g1AtSpawn == 'false' ){
      g1Cho = ghostMovementChoices( ghost1OBJN );
      //random = g1Cho[ Math.floor( Math.random() * ( g1Cho.length ) ) ];
      random = aiDecission(g1Cho, ghost1OBJN);
      g1Move[random] = 1;
      g1Dir = random;
    }
    
    if( g2AtSpawn == 'false' ){
      g2Cho = ghostMovementChoices( ghost2OBJN );
      //random = g2Cho[ Math.floor( Math.random() * ( g2Cho.length ) ) ];
      random = aiDecission(g2Cho, ghost2OBJN);
      g2Move[random] = 1;
      g2Dir = random;
    }

    if( g3AtSpawn == 'false' ){
      g3Cho = ghostMovementChoices( ghost3OBJN );
      //random = g3Cho[ Math.floor( Math.random() * ( g3Cho.length ) ) ];
      random = aiDecission(g3Cho, ghost3OBJN);
      g3Move[random] = 1;
      g3Dir = random;
    }

    if( g4AtSpawn == 'false' ){
      g4Cho = ghostMovementChoices( ghost4OBJN );
      //random = g4Cho[ Math.floor( Math.random() * ( g4Cho.length ) ) ];
      random = aiDecission(g4Cho, ghost4OBJN);
      g4Move[random] = 1;
      g4Dir = random;
    }
    
    
    }

    //Ghosts can only move once they've crossed an entire cell.
    //aiTic:s ensure they do
    aiTic++;
    if ( aiTic == 3 ) {
      aiTic = 0;
    }
};

//What possible directions to go are there for ghosts?
function ghostMovementChoices( _OBJN ){
  var gCho = [];
  var gChoCounter = 0;
  for ( i = 0; i < 4; i++ ) {
    if ( collisionCheck( i, _OBJN ) == 0 ) {
      gCho[gChoCounter] = i;
      gChoCounter++;
      }

    }
    return gCho;
}

//Movement towards pacman. Uses aiRandomness 
function aiDecission( _gCho, _OBJN ){
  if(feverMode == 'false' && aiRandomness(10) == 1){
    if( objects[pacmanOBJN][2] < objects[_OBJN][2] && _gCho.indexOf(0) != -1 ){
    return 0;
    }
    else if( objects[pacmanOBJN][2] > objects[_OBJN][2] && _gCho.indexOf(2) != -1 ){
      return 2;
    }
    else if( objects[pacmanOBJN][1] > objects[_OBJN][1] && _gCho.indexOf(1) != -1 ){
      return 1;
    }
    else if( objects[pacmanOBJN][1] < objects[_OBJN][1] && _gCho.indexOf(3) != -1 ){
      return 3;
    }
    else{
      return _gCho[ Math.floor( Math.random() * ( _gCho.length ) ) ];
    }
  }
  else{
    return _gCho[ Math.floor( Math.random() * ( _gCho.length ) ) ];
  }
   
}

//How often AI just goes to a random direction?
//Propability of movement to pacman's direction is 1/_value so with
//_value == 1 AI will always move towards pacman and with 100 every
//100th move should be made towards Pacman
function aiRandomness(_value){
  return  (Math.floor(Math.random() * (_value - 1 + 1)) + 1);
}


function ghostAIIni(){
  if ( g1Dead == 'true' ) g1Dead = 'false';
  if ( g2Dead == 'true' ) g2Dead = 'false';
  if ( g3Dead == 'true' ) g3Dead = 'false';
  if ( g4Dead == 'true' ) g4Dead = 'false';
  g1Move = [0, 0, 0, 0];
  g2Move = [0, 0, 0, 0];
  g3Move = [0, 0, 0, 0];
  g4Move = [0, 0, 0, 0];

  g1Cho = [];
  g2Cho = [];
  g3Cho = [];
  g4Cho = [];


  g1AtSpawn = 'false';
  g2AtSpawn = 'false';
  g3AtSpawn = 'false';
  g4AtSpawn = 'false';
}

//This function leads ghosts out of spawn
function ghostOutOfSpawn( _gX, _gY ) {
  if( ( _gX <= 15 && _gX >= 13 ) && ( _gY <= 12 && _gY >= 10 ) ){
    switch(_gY){
      case 10:
        return 2;
        break;
      case 11:
        if( _gX <= 15 && _gX >= 13 ){
          return 3;
          break;
        }
        return 5;
        break;
      case 12:
        return 0;
        break;
    }
    return 5; //Ghost is not in spawn
  }
  return 5;   //Ghost is not in spawn
}

function pacmanAtGate( _pX, _pY ){
  if( ( _pX >= 7 && _pX <= 13 ) && ( _pY >= 8 && _pY <= 15 ) && feverMode == 'true' ){
    return true;
  }
  else{
    return false;
  }
}

// -------------------------------------------------------------
// Transitions
// -------------------------------------------------------------

function toGame(){
  
  iframe.src = 'game.html';
  setTimeout( 'makeGameReady()', 100 );
  bgMenu.pause();
  bgGame.pause();
  
}

function toMenu( _playMusic ){
  sceneAt = 'menu';
  menuChoice = 1;
  menuPosted = 'false';
  gameIsReady = 'true';
  iframe.src = 'menu.html';
  playMenuBGM();
  
}

function toMadeBy(){
  sceneAt = 'madeBy';
  menuPosted = 'false';
  iframe.src = 'madeBy.html';
}

function makeGameReady(){
  sceneAt = 'game';
  menuPosted = 'false';
  
  gameIsReady = 'true';

}

// -------------------------------------------------------------
// Sounds
// -------------------------------------------------------------

function playMenuBGM(){
  bgGame.pause();
  bgGame.currentTime = 0;
  bgGame.loop = false;
  bgMenu.play();
  bgMenu.loop = true;
  sndBegin.pause();
  sndBegin.currentTime = 0;

}

function playGameBGM(){
  bgMenu.pause();
  bgMenu.currentTime = 0;
  bgMenu.loop = false;
  bgGame.currentTime = 0;
  bgGame.play();
  bgGame.loop = true;
  
}

// -------------------------------------------------------------
// Initialization
// -------------------------------------------------------------


document.onreadystatechange = function() {
  if ( startComplete == 'false' ) {
    iframe = document.getElementById( 'screen' );

    iFrameValue = iframeRef( iframe ); //Becomes a global variable
    
    dotImg.src = 'images/smalldot.png';
    cookieImg.src = 'images/dot.png';
    sheetImg.src = 'images/pacmansprites.png';
    button.src = 'images/button.png';
    mapImg.src = 'images/map.png';
    sndBegin = new Audio( 'sound/pacman_beginning.ogg' );
    sndChomp = new Audio( 'sound/pacman_chompv2.ogg' );
    sndDeath = new Audio( 'sound/pacman_death.ogg' );
    sndEatG = new Audio( 'sound/pacman_eatghost.ogg' );
    bgMenu = new Audio( 'sound/bg_takeAChance.ogg' );
    bgGame = new Audio( 'sound/bg_runAmok.ogg' );

    //bgMenu.onload = function(){};
    //bgGame.onload = function(){};
    dotImg.onload = function() {};
    cookieImg.onload = function() {};
    sheetImg.onload = function() {};
    button.onload = function() {};
    mapImg.onload = function() {};
    
    startComplete = 'true'; //Ensures that initialization wont be done twice
    setInterval( main, 50 );

    }
};

function iframeRef( frameRef ) {
  return frameRef.contentWindow
    ? frameRef.contentWindow.document
    : frameRef.contentDocument
};