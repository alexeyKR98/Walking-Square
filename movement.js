var square = document.getElementById("square");
var movementRight = 0;
var movementJump = 0;
var idMovement = setInterval(voidFunction, 20000);
var idJump;
var jumpMove = false;
var ticks = 0;
var stopMovement;
var rightMove = false;
var leftMove = false;
var button;

function voidFunction(){}

document.body.addEventListener("keydown", movement);
document.body.addEventListener("keyup", stopMovementFunction);

function movement(e){
    if(e.key == "ArrowRight" || e.key == "ArrowLeft") // Related with the control of the player input
        button = e.key //Better control of the stop or continue movement of the square
    if(e.key == "ArrowRight" && !rightMove){
        console.log("right");
        clearInterval(idMovement);
        leftMove = false;
        rightMove = true;
        stopMovement = false;
        idMovement = setInterval(movementRightAnimation, 20);
    }
    if(e.key == "ArrowLeft" && !leftMove){
        clearInterval(idMovement);
        rightMove = false;
        leftMove = true;
        stopMovement = false;
        idMovement = setInterval(movementLeftAnimation, 20);
    }
    if(e.key == " " && !jumpMove){
        jumpMove = true;
        idJump = setInterval(jump, 20);
    }
}

function movementLeftAnimation(){
    switch(ticks){
        case 0:
            ticks++;
            movementRight -= 10;
            square.style.left = movementRight + "px";
            square.style.bottom = movementJump + 8 + "px";
            square.style.transform = "rotate(-10deg)";
            break;
        case 1:
            ticks++;
            movementRight -= 15;
            square.style.left = movementRight + "px";
            square.style.bottom = movementJump + 15 + "px";
            square.style.transform = "rotate(-20deg)";
            break;
        case 2:
            movementRight -= 20;
            ticks++;
            square.style.left = movementRight + "px";
            square.style.bottom = movementJump + 23 + "px";
            square.style.transform = "rotate(-45deg)";
            break;
        case 3:
            ticks++;
            movementRight -= 20;
            square.style.left = movementRight + "px";
            square.style.bottom = movementJump + 15+"px";
            square.style.transform = "rotate(-70deg)";
            break;
        case 4:
            ticks++;
            movementRight -= 15;
            square.style.left = movementRight + "px";
            square.style.bottom = movementJump + 8 + "px";
            square.style.transform = "rotate(-80deg)";
            break;
        case 5:
            movementRight -= 10;
            ticks = 0;
            square.style.left = movementRight + "px";
            square.style.bottom = movementJump + "px";
            square.style.transform = "none";
            if(stopMovement){
                leftMove = false;
                clearInterval(idMovement);
            }
            break;
    }
}

function movementRightAnimation(){
    switch(ticks){
        case 0:
            ticks++;
            movementRight += 10;
            square.style.left = movementRight + "px";
            square.style.bottom = movementJump + 8 + "px";
            square.style.transform = "rotate(10deg)";
            break;
        case 1:
            ticks++;
            movementRight += 15;
            square.style.left = movementRight + "px";
            square.style.bottom = movementJump + 15 + "px";
            square.style.transform = "rotate(20deg)";
            break;
        case 2:
            movementRight += 20;
            ticks++;
            square.style.left = movementRight + "px";
            square.style.bottom = movementJump + 23+ "px";
            square.style.transform = "rotate(45deg)";
            break;
        case 3:
            ticks++;
            movementRight += 20;
            square.style.left = movementRight + "px";
            square.style.bottom = movementJump + 15+ "px";
            square.style.transform = "rotate(70deg)";
            break;
        case 4:
            ticks++;
            movementRight += 15;
            square.style.left = movementRight + "px";
            square.style.bottom = movementJump + 8 + "px";
            square.style.transform = "rotate(80deg)";
            break;
        case 5:
            movementRight += 10;
            ticks = 0;
            square.style.bottom = movementJump + "px";
            square.style.transform = "none";
            square.style.left = movementRight + "px";
            if(stopMovement){
                rightMove = false;
                clearInterval(idMovement);
            }
            break;
    }
}

function stopMovementFunction(e){
    if(button == e.key)
        stopMovement = true;
}