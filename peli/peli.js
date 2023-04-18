const canvas =document.getElementById("gameArea");
const ctx = canvas.getContext("2d");

let x = 100
let y = 100;
let radius = 50;
let speed = 10;

let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;

function drawGame() {
    requestAnimationFrame(drawGame);
    clearScreen();
    inputs();
    drawGreenBlob();
    boundryCheck();
}

function boundryCheck() {
    if (y< radius){
        y = radius;
    }
    if (y>radius){
        y=canvas.height - radius;
    }
    if (x<radius){
        x=radius;
    }
    if (x>canvas.width-radius){
        x=canvas.width - radius;
    }
}

function inputs(){
    if(upPressed){
        y = y - speed;
    }
    if(downPressed){
        y = y + speed;

    }
    if(leftPressed){
        x = x - speed;

    }
    if(rightPressed){
        x = x + speed;

    }
}
//requestAnimationFrame(func)
//setInterval(drawGame, 1000)

function drawGreenBlob(){
    ctx.fillStyle="green";
    if (upPressed){
        ctx.fillStyle = "grey";
    }
    if (downPressed){
        ctx.fillStyle = "lightblue";
    }    
    if (leftPressed){
        ctx.fillStyle = "yellow";
    }
    if (rightPressed){
        ctx.fillStyle = "white";
    }
    ctx.beginPath();
    ctx.arc(x,y, radius, 0, Math.PI *2);
    ctx.fill();
}

function clearScreen(){
ctx.fillStyle="pink";
ctx.fillRect(0,0, canvas.width, canvas.height);
}

document.body.addEventListener('keydown', keyDown);
document.body.addEventListener('keyup', keyUp);

function keyDown(event){
    //down
    if(event.keyCode == 40){
        downPressed = true;
    }
    //up
    if(event.keyCode==38){
        upPressed=true;
    }
    //left
    if(event.keyCode==37){
        leftPressed=true;
    }
    //right
    if(event.keyCode==39){
        rightPressed=true;
    }
}

function keyUp(event){
    //down
    if(event.keyCode == 40){
        downPressed = true;
    }
    //up
    if(event.keyCode==38){
        upPressed=true;
    }
    //left
    if(event.keyCode==37){
        leftPressed=true;
    }
    //right
    if(event.keyCode==39){
        rightPressed=true;
    }
}


drawGame();
