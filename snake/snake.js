

const width = 20, height = 20;
const cellSize = 20;

const canvas = document.createElement("canvas");
canvas.width = width*cellSize;
canvas.height = height*cellSize;
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);
const snake = [[0/2, height/2]] // x y
dir = [1, 0] // x y
gameOver = false

const random = (a) => Math.floor(Math.random() * (a + 1));
foodx = random(width), foody = random(height)

const walk=()=>{
    const next = [snake[0][0]+dir[0],snake[0][1]+dir[1]]
    snake.unshift(next);
    if(next[0] != foodx || next[1] != foody) snake.pop()
    else spawnFood()
    draw();
}

const draw=()=>{
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    console.log(snake.length)
    ctx.fillStyle = "blue";
    for([l,k] of snake){
        ctx.fillRect(l*cellSize, k*cellSize, cellSize, cellSize);
    }

    ctx.fillStyle = "red"
    ctx.fillRect(foodx*cellSize, foody*cellSize, cellSize, cellSize);
}
draw();

const spawnFood = () => {
    foodx = random(width), foody = random(height)
    while(snake.some(a => a[0] == foodx && a[1] == foody)) { 
        foodx = random(width), foody = random(height)
    }
}

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      dir=[0,-1];
      break;
    case "ArrowDown":
      dir=[0,1];
      break;
    case "ArrowLeft":
      dir=[-1,0];
      break;
    case "ArrowRight":
      dir=[1,0];
      break;
  }
});


// setInterval(() => !gameOver && walk(), 300)
spawnFood()