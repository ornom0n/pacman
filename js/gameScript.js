var canvas, ctx;
var circles = [];
var selectedCircle;
var hoveredCircle;
var button;
var moving = false;
var speed = 2.0;
var cellSize = 30;
var startComplete = 0;
var levelMap = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 2, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1,
    0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0,
    0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0,
    0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0,
    0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1,
    0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0,
    1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1,
    0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1,
    0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0,
    1, 5, 6, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0,
    1, 1, 1, 0, 1, 0, 1, 1, 0, 8, 8, 8, 1, 0, 1, 1, 0, 1, 0, 1, 1,
    1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 4,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1,
    0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0,
    0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0,
    1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 
    0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 
    1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 
    0, 7, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 
    0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 
    0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 
    0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 2, 0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
    2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
];
var score = 0;
var feverTimer = 0;
var time = 180;
var startTime = 0;
var feverMode = 0;

var sceneAt = 3;

var highScore;

var firstRender = 1;
var start = 1;

var death = 0;
var deathBtn;
var deathDone = 0;
var pause = 0;
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
var schdUp = 0;
var schdRight = 0;
var schdDown = 0;
var schdLeft = 0;

//Possible diretions for ghosts to go
var g1Cho = [];
var g2Cho = [];
var g3Cho = [];
var g4Cho = [];

var collidedG = 0; //What ghost was collided with?
var g1Dead = 0;
var g2Dead = 0;
var g3Dead = 0;
var g4Dead = 0;

var gSpd = 1 / 3;

var aiTic = 0;

//Graphics
var dotImg = new Image();
var cookieImg = new Image();
var sheetImg = new Image();
var logo = new Image();
var button = new Image();

var pacmanAnim;
var frameIndex;
var pXFrames = [7, 27, //Up
    7, 27, //Right
    7, 27, //Down
    7, 27
]; //Left

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

/*
X increases when going right
Y when going down
0,0 point is at upper left corner
*/

var objects = []; //Map of all game objects
var walls = []; //Map of all walls
var dots = []; //Map of all dots
var cookies = []; //Map of all cookies


//Menu values
var menuPosted = 'false';
var menuUpPosted = 'false';
var menuDownPosted = 'false';
var menuChoice = 1;
var exitPressed = 0;
var iframe;


// -------------------------------------------------------------
//Game area 900x630
// objects :

function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}

function Button(x, y, w, h, state, image) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.state = state;
    this.imageShift = 0;
    this.image = image;
}
// -------------------------------------------------------------

// draw functions :

function clear() { // clear canvas function
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}



// -------------------------------------------------------------
// ANIMATION
// -------------------------------------------------------------

//Animations still break the game
//Make some of these values global?


function renderFrame(_dx, _dy, _sx, _sy, _dir) {
    if (typeof _dir == 'undefined') {
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

        if (frameIndex < 1) {
            frameIndex++;
            animTic = 0
        } else {
            frameIndex = 0;
            animTic = 0;
        }
    }
}

// -------------------------------------------------------------
// Drawing level
// -------------------------------------------------------------

function initializeLevel() {
    clear(); // clear canvas

    pMove = [0, 0, 0, 0] //Up, right, down, left
    g1Move = [0, 0, 0, 0] //Up, right, down, left
    g2Move = [0, 0, 0, 0] //Up, right, down, left
    g3Move = [0, 0, 0, 0] //Up, right, down, left
    g4Move = [0, 0, 0, 0] //Up, right, down, left
    g1Cho = [];
    g2Cho = [];
    g3Cho = [];
    g4Cho = [];

    g1Dead = 0;
    g2Dead = 0;
    g3Dead = 0;
    g4Dead = 0;
    pDir = 0;
    g1Dir = 0;
    g2Dir = 0;
    g3Dir = 0;
    g4Dir = 0;

    pause = 0;
    calc = 0;
    score = 0;
    time = 180;
    maxPoints = 0;
    aiTic = 0;
    death = 0;
    start = 1;
    startTime = 0;
    collidedG = 0;
    deathDone = 0;

    //Initializing walls two dimensional array
    for (i = 0; i < 30; i++) {
        walls[i] = [];
        for (j = 1; j < 22; j++) {
            walls[i][j] = 0;
        }
    }

    //Initializing dots two dimensional array
    for (i = 0; i < 30; i++) {
        dots[i] = [];
        for (j = 1; j < 22; j++) {
            dots[i][j] = 0;
        }
    }

    //Initializing cookies two dimensional array
    for (i = 0; i < 30; i++) {
        cookies[i] = [];
        for (j = 1; j < 22; j++) {
            cookies[i][j] = 0;
        }
    }



    for (i = 1; i < 22; i++) { //y
        for (j = 0; j < 30; j++) { //x
            switch (levelMap[calc]) {

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
            }
            calc++;
        }
    }

    firstRender = 0;

}


function drawLevel() { // main drawScene function
    clear(); // clear canvas
    for (i = 0; i < objects.length; i++) {
        switch (objects[i][0]) {

            case 0:
                //draw dot
                if (dots[objects[i][1]][objects[i][2]] == 1) {
                    ctx.drawImage(dotImg, (objects[i][1] * cellSize) + (cellSize / 2) - 5, [objects[i][2]] * cellSize + (cellSize / 2) - 5);
                }
                break;
            case 1:
                //draw wall
                ctx.fillStyle = "blue";
                ctx.fillRect(objects[i][1] * cellSize, objects[i][2] * cellSize, cellSize, cellSize);
                break;
            case 2:
                //draw cookie
                if (cookies[objects[i][1]][objects[i][2]] == 1) {
                    ctx.drawImage(cookieImg, (objects[i][1] * cellSize) + (cellSize / 2) - 10, [objects[i][2]] * cellSize + (cellSize / 2) - 10);
                }
                break;
            case 3:
                //draw orange ghost
                if (feverMode == 1) {
                    renderFrame(objects[i][1] * cellSize, objects[i][2] * cellSize, fvrXFrames,
                        fvrYFrames, g1Dir);
                } else {
                    renderFrame(objects[i][1] * cellSize, objects[i][2] * cellSize, g1XFrames,
                        g1YFrames, g1Dir);
                }
                break;
            case 4:
                //draw pink ghost
                if (feverMode == 1) {
                    renderFrame(objects[i][1] * cellSize, objects[i][2] * cellSize, fvrXFrames,
                        fvrYFrames, g2Dir);
                } else {
                    renderFrame(objects[i][1] * cellSize, objects[i][2] * cellSize, g1XFrames,
                        g2YFrames, g2Dir);
                }
                break;
            case 5:
                //draw blue ghost
                if (feverMode == 1) {
                    renderFrame(objects[i][1] * cellSize, objects[i][2] * cellSize, fvrXFrames,
                        fvrYFrames, g3Dir);
                } else {
                    renderFrame(objects[i][1] * cellSize, objects[i][2] * cellSize, g1XFrames,
                        g3YFrames, g3Dir);
                }
                break;
            case 6:
                //draw red ghost
                if (feverMode == 1) {
                    renderFrame(objects[i][1] * cellSize, objects[i][2] * cellSize, fvrXFrames,
                        fvrYFrames, g4Dir);
                } else {
                    renderFrame(objects[i][1] * cellSize, objects[i][2] * cellSize, g1XFrames,
                        g4YFrames, g4Dir);
                }
                break;
            case 7:
                //draw pacman
                renderFrame(objects[i][1] * cellSize, objects[i][2] * cellSize, pXFrames,
                    pYFrames, pDir);
                break;


        }



    }

    if (pause == 1) {
        ctx.fillStyle = "white";
        ctx.fillText("Up and down = Move selector, Enter = choose selected option", 10, 685);
        if (pauseSelector == 1) ctx.fillStyle = "yellow";
        else ctx.fillStyle = "white";

        ctx.fillRect(400, 250, 120, 50);
        ctx.fillStyle = "blue";
        ctx.fillText("Resume", 410, 280);

        if (pauseSelector == 2) ctx.fillStyle = "yellow";
        else ctx.fillStyle = "white";

        ctx.fillRect(400, 310, 120, 50);
        ctx.fillStyle = "blue";
        ctx.fillText("Retry", 410, 340);

        if (pauseSelector == 3) ctx.fillStyle = "yellow";
        else ctx.fillStyle = "white";
        ctx.fillRect(400, 370, 120, 50);
        ctx.fillStyle = "blue";
        ctx.fillText("Main", 410, 400);
    } else if (death == 1) {
        ctx.fillStyle = "white";
        ctx.fillText("Left = Play again, Right = Go to menu", 10, 685);
        deathDone = 1;

        ctx.fillStyle = "black";
        ctx.fillRect(320, 200, 300, 150);
        ctx.fillStyle = "blue";
        ctx.fillText("Game over!", 350, 230);

        if (menuChoice == 1) ctx.fillStyle = "yellow";
        else ctx.fillStyle = "white";
        ctx.fillRect(340, 250, 100, 50);
        ctx.fillStyle = "blue";
        ctx.fillText("Retry", 350, 290);

        if (menuChoice == 2) ctx.fillStyle = "yellow";
        else ctx.fillStyle = "white";
        ctx.fillRect(510, 250, 100, 50);
        ctx.fillStyle = "blue";
        ctx.fillText("Menu", 520, 290);

        //}

    } else if (pause == 0) {
        ctx.fillStyle = "white";
        ctx.fillText("Movement = arrow keys, Pause = ESC", 10, 685);
    }

    //draw texts
    if (start == 1) {
        ctx.font = "30px Arial";
        ctx.fillStyle = "yellow";
        ctx.fillText("Ready!", 400, 415);
    }


    ctx.font = "30px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("Score", 10, 25);
    ctx.fillText(score, 110, 25);

    ctx.fillText("Time", 300, 25);
    ctx.fillText(timeCount(), 380, 25);

    ctx.fillText("High Score", 600, 25);
    ctx.fillText(highScore, 770, 25);


}


function drawMenu() {
    clear();
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Pacman", (canvas.width / 2) - 50, canvas.height / 2 - 250);

    ctx.fillText("Start", (canvas.width / 2) - 50, canvas.height / 2 - 50);

    ctx.fillText("Made by", (canvas.width / 2) - 50, canvas.height / 2);
    ctx.fillText("Up and down = Move selector, Enter = Choose selected option,", 10, 660);
    ctx.fillText("Esc = Exit", 10, 685);

    if (exitPressed == 0) {
        //Selector
        if (menuChoice == 1) {
            ctx.fillRect((canvas.width / 2) - 90, canvas.height / 2 - 65, 10, 10)
        } else if (menuChoice == 2) {
            ctx.fillRect((canvas.width / 2) - 90, canvas.height / 2 - 15, 10, 10)
        }
    }
    if (exitPressed == 1) {
        if (menuChoice == 1) {
            ctx.fillStyle = "black";
            ctx.fillRect(300, 200, 300, 150);
            ctx.fillStyle = "blue";
            ctx.fillText("Do you want to quit?", 320, 230);

            ctx.fillStyle = "yellow";
            ctx.fillRect(310, 250, 100, 50);
            ctx.fillStyle = "blue";
            ctx.fillText("Yes", 340, 290);

            ctx.fillStyle = "white";
            ctx.fillRect(450, 250, 100, 50);
            ctx.fillStyle = "blue";
            ctx.fillText("No", 490, 290);
        } else if (menuChoice == 2) {
            ctx.fillStyle = "black";
            ctx.fillRect(300, 200, 300, 150);
            ctx.fillStyle = "blue";
            ctx.fillText("Do you want to quit?", 320, 230);

            ctx.fillStyle = "white";
            ctx.fillRect(310, 250, 100, 50);
            ctx.fillStyle = "blue";
            ctx.fillText("Yes", 340, 290);

            ctx.fillStyle = "yellow";
            ctx.fillRect(450, 250, 100, 50);
            ctx.fillStyle = "blue";
            ctx.fillText("No", 490, 290);
        }
    }

}



function drawDebug() { // main drawScene function
    clear(); // clear canvas
    ctx.fillStyle = "white";
    var calc = 0;
    for (i = 0; i < 30; i++) { //x
        for (j = 1; j < 21; j++) { //y
            ctx.font = "15px Arial";

            ctx.fillText(calc, i * cellSize, j * cellSize);
            calc++;
        }
    }
    ctx.stroke();




}

// -------------------------------------------------------------
// Fever mode
// -------------------------------------------------------------

function fever() {
    feverMode = 1;
    //gSpd = 1/3 * 0.8;
    feverTimer = 0;
}

// -------------------------------------------------------------
// CLOCK
// -------------------------------------------------------------

function timeCount() {

    //Needs to be converted to mm:ss
    return Math.floor(time);
}
// -------------------------------------------------------------
// MAIN
// -------------------------------------------------------------
function main() {
  //Display logo
  switch (sceneAt) {
  //Draw logo
  case 2:
      parent.toMenu();
      break;
      //Draw game
  case 3:
      
      if (firstRender == 1) {
          initializeLevel();
      }
      drawLevel();
      if (start == 1) {
          startTime += 1;
          if (startTime == 75) {
              start = 0;
          }
      }

      if (feverMode == 1) {
          if (feverTimer == 333) {
              feverMode = 0;
          } else {
              feverTimer += 1;
          }

      }

      //If time runs out, Pacman dies
      if (time <= 0) {
          death = 1;
      }
      if (score == 30900) {
          death = 1;
      }

      if (death == 0 && pause == 0) {
          updateFrame();
          if (start == 0) {
              time -= 0.03
              ghostAI();
              collision();
              movement();
          }
      }
      if (death == 1) {
          if (score > highScore) {
              localStorage.setItem("highScore", score);

          }
      }
      break;
  case 4:
      //drawMadeBy();
      parent.toMadeBy();
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

    if (pX % 1 != 0) {
        floorX = Math.floor(pX);
        ceilX = Math.ceil(pX);
    } else {
        floorX = pX;
        ceilX = pX;
    }

    if (pY % 1 != 0) {
        floorY = Math.floor(pY);
        ceilY = Math.ceil(pY);
    } else {
        floorY = pY;
        ceilY = pY;
    }




    //Improved collisions
    //Collision to upper wall
    //Use collisionCheck()?
    if (pMove[0] == 1) {
        if (walls[floorX][floorY - 1] == 1 && walls[ceilX][ceilY - 1] == 1) {
            if (schdLeft != 1 || schdRight != 1 || schdUp != 1) {
                pMove = [0, 0, 0, 0];
            }

        }
    }

    //Collision to wall on right
    if (pMove[1] == 1) {
        if (walls[floorX + 1][floorY] == 1 && walls[ceilX + 1][ceilY] == 1) {
            if (schdUp != 1 || schdDown != 1 || schdRight != 1) {
                pMove = [0, 0, 0, 0];
            }

        }
    }


    //Collision to lower wall
    if (pMove[2] == 1) {
        if (walls[floorX][floorY + 1] == 1 && walls[ceilX][ceilY + 1] == 1) {
            if (schdLeft != 1 || schdRight != 1 || schdDown != 1) {
                pMove = [0, 0, 0, 0];
            }
        }
    }


    //Collision to wall on left
    if (pMove[3] == 1) {
        if (walls[floorX - 1][floorY] == 1 && walls[ceilX - 1][ceilY] == 1) {
            if (schdUp != 1 || schdDown != 1 || schdLeft != 1) {
                pMove = [0, 0, 0, 0];
            }
        }
    }

    //Is there a dot on pacman?
    if (pX % 1 == 0 && pY % 1 == 0) {
        if (dots[pX][pY] == 1) {
            dots[pX][pY] = 0;
            score += 100;
        }
    }

    //Is there a cookie on pacman?
    if (pX % 1 == 0 && pY % 1 == 0) {
        if (cookies[pX][pY] == 1) {
            cookies[pX][pY] = 0;
            score += 100;
            fever();
        }
    }


    //Is there a ghost on Pacman?
    if (Math.floor(objects[ghost1OBJN][1]) == Math.floor(pX) && Math.floor(objects[ghost1OBJN][2]) == Math.floor(pY) || Math.ceil(objects[ghost1OBJN][1]) == Math.ceil(pX) && Math.ceil(objects[ghost1OBJN][2]) == Math.ceil(pY)) {
        collidedG = 3;
    }
    if (Math.floor(objects[ghost2OBJN][1]) == Math.floor(pX) && Math.floor(objects[ghost2OBJN][2]) == Math.floor(pY) || Math.ceil(objects[ghost2OBJN][1]) == Math.ceil(pX) && Math.ceil(objects[ghost2OBJN][2]) == Math.ceil(pY)) {
        collidedG = 4
    }
    if (Math.floor(objects[ghost3OBJN][1]) == Math.floor(pX) && Math.floor(objects[ghost3OBJN][2]) == Math.floor(pY) || Math.ceil(objects[ghost3OBJN][1]) == Math.ceil(pX) && Math.ceil(objects[ghost3OBJN][2]) == Math.ceil(pY)) {
        collidedG = 5;
    }
    if (Math.floor(objects[ghost4OBJN][1]) == Math.floor(pX) && Math.floor(objects[ghost4OBJN][2]) == Math.floor(pY) || Math.ceil(objects[ghost4OBJN][1]) == Math.ceil(pX) && Math.ceil(objects[ghost4OBJN][2]) == Math.ceil(pY)) {
        collidedG = 6;
    }


    if (collidedG >= 3) {
        //Eat a ghost
        if (feverMode == 1) {
            time += 10;
            switch (collidedG) {
                case 3:
                    objects[ghost1OBJN][1] = 14;
                    objects[ghost1OBJN][2] = 10;
                    g1Dead = 1;
                    break;
                case 4:
                    objects[ghost2OBJN][1] = 14;
                    objects[ghost2OBJN][2] = 10;
                    g2Dead = 1;
                    break;
                case 5:
                    objects[ghost3OBJN][1] = 14;
                    objects[ghost3OBJN][2] = 10;
                    g3Dead = 1;
                    break;
                case 6:
                    objects[ghost4OBJN][1] = 14;
                    objects[ghost4OBJN][2] = 10;
                    g4Dead = 1;
                    break;
            }
            collidedG = 0;
        }
        //die
        else {
            death = 1;
            pMove = [0, 0, 0, 0];
        }
    }
}

function collisionCheck(_direction, _OBJN) {
    var pX = objects[_OBJN][1];
    var pY = objects[_OBJN][2];

    //If pacman's location is between two squares eg. his location's x or y has decimals
    var floorX;
    var floorY;
    var ceilX;
    var ceilY;

    if (pX % 1 != 0) {
        floorX = Math.floor(pX);
        ceilX = Math.ceil(pX);
    } else {
        floorX = pX;
        ceilX = pX;
    }

    if (pY % 1 != 0) {
        floorY = Math.floor(pY);
        ceilY = Math.ceil(pY);
    } else {
        floorY = pY;
        ceilY = pY;
    }




    //Improved collisions
    //Collision to upper wall
    if (_direction == 0) {
        if (walls[floorX][floorY - 1] == 1 || walls[ceilX][ceilY - 1] == 1) {
            return 1;
        }
    }

    //Collision to wall on right
    if (_direction == 1) {
        if (walls[floorX + 1][floorY] == 1 || walls[ceilX + 1][ceilY] == 1) {
            return 1;
        }
    }


    //Collision to lower wall
    if (_direction == 2) {
        if (walls[floorX][floorY + 1] == 1 || walls[ceilX][ceilY + 1] == 1) {
            return 1;
        }
    }


    //Collision to wall on left
    if (_direction == 3) {
        if (walls[floorX - 1][floorY] == 1 || walls[ceilX - 1][ceilY] == 1) {
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
    if (schdUp == 1) {

        if (collisionCheck(0, pacmanOBJN) == 0) {
            pMove = [1, 0, 0, 0];
            schUp = 0;

        }

    } else if (schdRight == 1) {
        if (collisionCheck(1, pacmanOBJN) == 0) {
            pMove = [0, 1, 0, 0];
            schdRight = 0;
        }
    } else if (schdDown == 1) {
        if (collisionCheck(2, pacmanOBJN) == 0) {
            pMove = [0, 0, 1, 0];
            schdDown = 0;
        }
    } else if (schdLeft == 1) {
        if (collisionCheck(3, pacmanOBJN) == 0) {
            pMove = [0, 0, 0, 1];
            schdLeft = 0;
        }
    }
    //Pacman
    if (pMove[0] == 1) {
        pDir = 0;
        objects[pacmanOBJN][2] -= 1 / 3;
    } else if (pMove[1] == 1) {
        objects[pacmanOBJN][1] += 1 / 3;
        pDir = 1;
    } else if (pMove[2] == 1) {
        objects[pacmanOBJN][2] += 1 / 3;
        pDir = 2;
    } else if (pMove[3] == 1) {
        objects[pacmanOBJN][1] -= 1 / 3;
        pDir = 3;
    }


    //Ghosts
    if (g1Dead == 0) {
        if (feverMode == 0) {

        }
        if (g1Move[0] == 1) {
            objects[ghost1OBJN][2] -= gSpd;
            g1Dir = 0;
        } else if (g1Move[1] == 1) {
            objects[ghost1OBJN][1] += gSpd;
            g1Dir = 1;
        } else if (g1Move[2] == 1) {
            objects[ghost1OBJN][2] += gSpd;
            g1Dir = 2;
        } else if (g1Move[3] == 1) {
            objects[ghost1OBJN][1] -= gSpd;
            g1Dir = 3;
        }

    }

    if (g2Dead == 0) {
        if (g2Move[0] == 1) {
            objects[ghost2OBJN][2] -= gSpd;
            g2Dir = 0;
        } else if (g2Move[1] == 1) {
            objects[ghost2OBJN][1] += gSpd;
            g2Dir = 1;
        } else if (g2Move[2] == 1) {
            objects[ghost2OBJN][2] += gSpd;
            g2Dir = 2;
        } else if (g2Move[3] == 1) {
            objects[ghost2OBJN][1] -= gSpd;
            g2Dir = 3;
        }
    }

    if (g3Dead == 0) {
        if (g3Move[0] == 1) {
            objects[ghost3OBJN][2] -= gSpd;
            g3Dir = 0;
        } else if (g3Move[1] == 1) {
            objects[ghost3OBJN][1] += gSpd;
            g3Dir = 1;
        } else if (g3Move[2] == 1) {
            objects[ghost3OBJN][2] += gSpd;
            g3Dir = 2;
        } else if (g3Move[3] == 1) {
            objects[ghost3OBJN][1] -= gSpd;
            g3Dir = 3;
        }
    }

    if (g4Dead == 0) {
        if (g4Move[0] == 1) {
            objects[ghost4OBJN][2] -= gSpd;
            g4Dir = 0;
        } else if (g4Move[1] == 1) {
            objects[ghost4OBJN][1] += gSpd;
            g4Dir = 1;
        } else if (g4Move[2] == 1) {
            objects[ghost4OBJN][2] += gSpd;
            g4Dir = 2;
        } else if (g4Move[3] == 1) {
            objects[ghost4OBJN][1] -= gSpd;
            g4Dir = 3;
        }
    }

    //Rounding locations for more accurate collisions
    roundLoc();




}

function roundLoc() {
  //Rounding Pacman
  if ((objects[pacmanOBJN][1] % 1) > 0.8) {
    objects[pacmanOBJN][1] = Math.ceil(objects[pacmanOBJN][1]);
  }
  if ((objects[pacmanOBJN][1] % 1) < 0.1 && (objects[pacmanOBJN][1] % 1) != 0) {
    objects[pacmanOBJN][1] = Math.floor(objects[pacmanOBJN][1]);
  }
  if ((objects[pacmanOBJN][2] % 1) > 0.8) {
    objects[pacmanOBJN][2] = Math.ceil(objects[pacmanOBJN][2]);
  }
  if ((objects[pacmanOBJN][2] % 1) < 0.1 && (objects[pacmanOBJN][2] % 1) != 0) {
    objects[pacmanOBJN][2] = Math.floor(objects[pacmanOBJN][2]);
  }

  //Rounding Ghosts
  if ((objects[ghost1OBJN][1] % 1) > 0.8) {
    objects[ghost1OBJN][1] = Math.ceil(objects[ghost1OBJN][1]);
  }
  if ((objects[ghost1OBJN][1] % 1) < 0.1 && (objects[ghost1OBJN][1] % 1) != 0) {
    objects[ghost1OBJN][1] = Math.floor(objects[ghost1OBJN][1]);
  }
  if ((objects[ghost1OBJN][2] % 1) > 0.8) {
    objects[ghost1OBJN][2] = Math.ceil(objects[ghost1OBJN][2]);
  }
  if ((objects[ghost1OBJN][2] % 1) < 0.1 && (objects[ghost1OBJN][2] % 1) != 0) {
    objects[ghost1OBJN][2] = Math.floor(objects[ghost1OBJN][2]);
  }

  if ((objects[ghost2OBJN][1] % 1) > 0.8) {
    objects[ghost2OBJN][1] = Math.ceil(objects[ghost2OBJN][1]);
  }
  if ((objects[ghost2OBJN][1] % 1) < 0.1 && (objects[ghost2OBJN][1] % 1) != 0) {
    objects[ghost2OBJN][1] = Math.floor(objects[ghost2OBJN][1]);
  }
  if ((objects[ghost2OBJN][2] % 1) > 0.8) {
    objects[ghost2OBJN][2] = Math.ceil(objects[ghost2OBJN][2]);
  }
  if ((objects[ghost2OBJN][2] % 1) < 0.1 && (objects[ghost2OBJN][2] % 1) != 0) {
    objects[ghost2OBJN][2] = Math.floor(objects[ghost2OBJN][2]);
  }

  if ((objects[ghost3OBJN][1] % 1) > 0.8) {
    objects[ghost3OBJN][1] = Math.ceil(objects[ghost3OBJN][1]);
  }
  if ((objects[ghost3OBJN][1] % 1) < 0.1 && (objects[ghost3OBJN][1] % 1) != 0) {
    objects[ghost3OBJN][1] = Math.floor(objects[ghost3OBJN][1]);
  }
  if ((objects[ghost3OBJN][2] % 1) > 0.8) {
    objects[ghost3OBJN][2] = Math.ceil(objects[ghost3OBJN][2]);
  }
  if ((objects[ghost3OBJN][2] % 1) < 0.1 && (objects[ghost3OBJN][2] % 1) != 0) {
    objects[ghost3OBJN][2] = Math.floor(objects[ghost3OBJN][2]);
  }

  if ((objects[ghost4OBJN][1] % 1) > 0.8) {
    objects[ghost4OBJN][1] = Math.ceil(objects[ghost4OBJN][1]);
  }
  if ((objects[ghost4OBJN][1] % 1) < 0.1 && (objects[ghost4OBJN][1] % 1) != 0) {
    objects[ghost4OBJN][1] = Math.floor(objects[ghost4OBJN][1]);
  }
  if ((objects[ghost4OBJN][2] % 1) > 0.8) {
    objects[ghost4OBJN][2] = Math.ceil(objects[ghost4OBJN][2]);
  }
  if ((objects[ghost4OBJN][2] % 1) < 0.1 && (objects[ghost4OBJN][2] % 1) != 0) {
    objects[ghost4OBJN][2] = Math.floor(objects[ghost4OBJN][2]);
  }
}



// -------------------------------------------------------------
// KEY HANDLING
// -------------------------------------------------------------

document.addEventListener('keydown', function(event) {
schdUp = 0;
schdRight = 0;
schdDown = 0;
schdLeft = 0;
//Menu
switch (sceneAt) {
  case 2:
      switch (event.keyCode) {
          case 38: //up
              if (exitPressed == 0) {
                  menuChoice = 1;
              }
              break;
          case 40: //down
              if (exitPressed == 0) {
                  menuChoice = 2;
              }
              break;

          case 39: //right
              if (exitPressed == 1) {
                  menuChoice = 2;
              }
              break;

          case 37: //left
              if (exitPressed == 1) {
                  menuChoice = 1;
              }
              break;
          case 13: //enter
              if (exitPressed == 0) {
              if (menuChoice == 1) {
                  toGame();
                  menuChoice = 1;
                  break;
              }
              if (menuChoice == 2) {
                  toMadeBy();
                  menuChoice = 1;
                  break;
              }
              } else {
                if (menuChoice == 1) {

                };
                if (menuChoice == 2) {
                    exitPressed = 0;
                    menuChoice = 1;
                    break;
                }
              }
              break;

          case 27: //ESC
            if (exitPressed == 0) {
                exitPressed = 1;
                menuChoice = 1;
            } else {
                exitPressed = 0;
                menuChoice = 1;
            }
            break;
        }

        //The game
    case 3:
        switch (event.keyCode) {

            case 38: //up
                if (pause == 0) {
                    if (death == 0) {
                        schdUp = 1;
                    }
                } else {
                    pauseSelector--;
                    if (pauseSelector == 0) {
                        pauseSelector = 3;
                    }
                }


                break;
            case 39: //right

                if (death == 0) {
                    schdRight = 1;
                } else {
                    //Just picks the button quickly, no selector yet
                    if (pause == 0) {
                        menuChoice--;
                        if (menuChoice == 0) {
                            menuChoice = 2;
                        }
                    }
                    //deathBtn = document.getElementById("menuBtn").click();
                }

                break;
            case 40: //down
                if (pause == 0) {
                    if (death == 0) {
                        schdDown = 1;
                    }
                } else {
                    pauseSelector++;
                    if (pauseSelector == 4) {
                        pauseSelector = 1;
                    }
                }
                break;
            case 37: //left 
                if (death == 0) {
                    schdLeft = 1;
                } else {
                    //Just picks the button quickly, no selector yet
                    if (pause == 0) {
                        menuChoice++;
                        if (menuChoice == 3) {
                            menuChoice = 1;
                        }
                    }
                    //deathBtn = document.getElementById("menuBtn").click();
                }
                break;
            case 13: //Enter
                if (pause == 1) {
                    switch (pauseSelector) {
                        case 1:
                            pause = 0;
                            menuChoice = 1;
                            break;
                        case 2:
                            menuChoice = 1;
                            pause = 0;
                            initializeLevel();
                            break;
                        case 3:
                            pause = 0;
                            parent.toMenu();
                            menuChoice = 1;
                            break;
                    }
                } else {
                    if (death == 1) {
                        if (menuChoice == 1) {
                            pause = 0;
                            menuChoice = 1;
                            initializeLevel();
                        } else if (menuChoice == 2) {
                            pause = 0;
                            parent.toMenu();
                            menuChoice = 1;
                        }
                    }
                }
                break;
            case 27: //Esc
                if (pause == 0) {
                    menuChoice = 1;
                    pause = 1;
                } else {
                    pause = 0;
                    menuChoice = 1;
                }
                break;
        }
        //Made by
    case 4:
        switch (event.keyCode) {
            case 27: //ESC
              if (sceneAt == 4) {
                toMenu();
              }
              break;
            case 13: //Enter
              if (sceneAt == 4) {
                //toMenu();
              }
              break;
        }



}


});
// -------------------------------------------------------------
// Ghost AI
// -------------------------------------------------------------

function ghostAI() {
  if (aiTic == 0) {

    if (g1Dead == 1) g1Dead = 0;
    if (g2Dead == 1) g2Dead = 0;
    if (g3Dead == 1) g3Dead = 0;
    if (g4Dead == 1) g4Dead = 0;
    g1Move = [0, 0, 0, 0];
    g2Move = [0, 0, 0, 0];
    g3Move = [0, 0, 0, 0];
    g4Move = [0, 0, 0, 0];

    g1Cho = [];
    g2Cho = [];
    g3Cho = [];
    g4Cho = [];

    for (i = 0; i < 4; i++) {
      if (collisionCheck(i, ghost1OBJN) == 0) {
        g1Cho[i] = i;
        }

      }
    for (i = 0; i < 4; i++) {
      if (collisionCheck(i, ghost2OBJN) == 0) {
        g2Cho[i] = i;
        }
      }
    for (i = 0; i < 4; i++) {
      if (collisionCheck(i, ghost3OBJN) == 0) {
        g3Cho[i] = i;
        }
      }
    for (i = 0; i < 4; i++) {
      if (collisionCheck(i, ghost4OBJN) == 0) {
        g4Cho[i] = i;
        }
      }

    var random = g1Cho[Math.floor(Math.random() * g1Cho.length)];
    g1Move[random] = 1;
    g1Dir = random;

    random = g2Cho[Math.floor(Math.random() * g2Cho.length)];
    g2Move[random] = 1;
    g2Dir = random;

    random = g3Cho[Math.floor(Math.random() * g3Cho.length)];
    g3Move[random] = 1;
    g3Dir = random;

    random = g4Cho[Math.floor(Math.random() * g4Cho.length)];
    g4Move[random] = 1;
    g4Dir = random;
    }
    aiTic++;
    if (aiTic == 3) {
        aiTic = 0;
    }
};


// -------------------------------------------------------------
// Transitions
// -------------------------------------------------------------



// -------------------------------------------------------------
// initialization
// -------------------------------------------------------------


document.onreadystatechange = function() {
  if (startComplete == 0) {

    canvas = iFrameValue.getElementById('scene');
    ctx = canvas.getContext('2d'); //This one too
    
    dotImg.src = 'images/smalldot.png';
    cookieImg.src = 'images/dot.png';
    sheetImg.src = 'images/pacmansprites.png';
    logo.src = 'images/logo_dgmit.png';
    button.src = 'images/button.png';
    dotImg.onload = function() {};
    cookieImg.onload = function() {};
    sheetImg.onload = function() {};
    logo.onload = function() {};
    button.onload = function() {};
    highScore = localStorage.getItem("highScore");
    startComplete = 1; //Ensures that initialization wont be done twice
    setInterval(main, 50); // loop drawScene, recursive setTimeout could be better, needs testing
    }

};

function iframeRef( frameRef ) {
  return frameRef.contentWindow
      ? frameRef.contentWindow.document
      : frameRef.contentDocument
};