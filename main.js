// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;
const numberOfRows = 10;
const size = 500 / numberOfRows;
const first = "white"
const second= "black"


// Iteration 1
function drawGrid() {
  
      for (let row = 0; row < numberOfRows; row++) {
      for (let column = 0; column < numberOfRows; column++) {
        if ((row + column) % 2 === 0) {
          context.fillStyle = first;
        } else {
          context.fillStyle = second;
        }
        context.strokeRect(column * size, row * size, size, size);
      }
    }
}

// Iteration 2

class Character {
  
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

moveUp() {
  if (this.row < 1) {
    return 0;
  } else {
    this.row--;
  }
}

moveRight() {
  if (this.col > 8) {
    return 9;
  } else {
    this.col++;
  }
}
moveDown() {
  if (this.row > 8) {
    return 9;
  } else {
    this.row++;
  }
}

moveLeft() {
  if (this.col < 1) {
    return 0;
  } else {
    this.col--;
  }
}
}





// Iteration 3

const player = new Character (0,0);

function drawPlayer() {
  
  const playerImg = new Image();
  playerImg.src = 'images/character-down.png';
  playerImg.onload = () => {
    context.drawImage(playerImg, player.col * 50, player.row * 50, 50, 50);
    player.col = clamp(col, 0,9);
    player.row = clamp(row, 0,9);
  };

};

// Iteration 4
  
class Treasure {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    
  }
  setRandomPosition() {
    this.col = Math.floor(Math.random() * 9);
    console.log(this.col);
    this.row = Math.floor(Math.random() * 9);
    console.log(this.row);
  }
}

const treasure = new Treasure(0, 0);

function drawTreasure() {

  const treasureImg = new Image ();
  treasureImg.src = 'images/treasure.png';
  treasureImg.onload = () => {
    context.drawImage(treasureImg, treasure.col * 50, treasure.row * 50, 50, 50);
 }

}


// Iteration 5

window.addEventListener('keydown', (event) => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();
  // React based on the key pressed
  switch (event.key) {
    case "ArrowLeft":
      player.moveLeft();
      console.log("it works")
      drawEverything();
      break;
    case "ArrowUp":
      player.moveUp();
      drawEverything();
      break;
    case "ArrowRight":
      player.moveRight();
      drawEverything();
      break;
    case "ArrowDown":
      player.moveDown();
      drawEverything();
      break;
  } 
});
function drawEverything() {
  context.clearRect(0, 0, 500, 500);
  drawGrid();
  drawPlayer();
  drawTreasure();
  if (player.col === treasure.col && player.row ===  treasure.row) {
    setTimeout(() => {alert('The treasure is yours!')}, 33);
    
  }
  
}
treasure.setRandomPosition();
drawEverything();