// Rover Object Goes Here
// ======================
var rover = {
  direction : "N",
  x:0,
  y:0,
  travelLog:[[0,0]]
}
// ======================
window.onload = function() { document.onkeypress = detectKeyPress}
function detectKeyPress(evObject){
  switch (evObject.keyCode){
    case 115:
      moveRover('r');
      break;
    case 97:
      moveRover('l');
      break;
    case 119:
      moveRover('f');
      break;
    case 122:
      moveRover('b');
      break;
  }
}
function turnLeft(rover){
  switch (rover.direction){
    case "N":
      rover.direction="W";
      break;
    case "W":
      rover.direction="S";
      break;
    case "S":
      rover.direction="E";
      break;
    case "E":
      rover.direction="N";
      break;
  }
  console.log(rover.direction);
}

function turnRight(rover){
  switch (rover.direction){
    case "N":
      rover.direction="E";
      break;
    case "E":
      rover.direction="S";
      break;
    case "S":
      rover.direction="W";
      break;
    case "W":
      rover.direction="N";
      break;
  }
  console.log(rover.direction);
}

function moveForward(rover){
  switch (rover.direction){
    case "N":
      rover.x--;
      break;
    case "E":
        rover.y++;
      break;
    case "S":
        rover.x++;
      break;
    case "W":
        rover.y--;
      break;
  };
  if(rover.x>9 || rover.x<0){
    rover.x=0;
    console.log(rover.travelLog);
    console.log('You can\'t move there');
    return;
  }
  if(rover.y>9 || rover.y<0){
    rover.y=0;
    console.log(rover.travelLog);
    console.log('You can\'t move there');
    return;
  }
  rover.travelLog.push([rover.x,rover.y]);
}
function moveBackward(rover){
  switch (rover.direction){
    case "N":
      rover.x++;
      break;
    case "E":
        rover.y--;
      break;
    case "S":
        rover.x--;
      break;
    case "W":
        rover.y++;
      break;
  };
  if(rover.x < 0){
    rover.x=0;
    console.log(rover.travelLog);
    console.log('You can\'t move there');
    return;
  }
  if(rover.y < 0){
    rover.y=0;
    console.log(rover.travelLog);
    console.log('You can\'t move there');
    return;
  }
  rover.travelLog.push([rover.x,rover.y]);
}
function moveRover(trail){
  for (var i=0; i < trail.length; i++){
      switch (trail[i]){
        case "f":
          moveForward(rover);
          break;
        case "b":
          i
          moveBackward(rover);
          break;
        case "l":
          turnLeft(rover);
          break;
        case "r":
          turnRight(rover);
          break
      }
  }
  console.log(rover.travelLog)

}
