var door1 = document.getElementById('door1');
var door2 = document.getElementById('door2');
var door3 = document.getElementById("door3");
var startButton = document.getElementById('start');
var botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
var beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
var spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
var numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
const closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
let currentlyPlaying = true;

// Start Round Function
const startRound = () => {
  door1.src = closedDoorPath;
  door2.src = closedDoorPath;
  door3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good Luck!';
  currentlyPlaying = true;
  randomDoorGenerator();
};
// Start Round Function FINISHED

// Game Over Function
const gameOver = status => {
  if (status === 'win'){
    startButton.innerHTML = "You've Won! Play Again?";
  } else {
    startButton.innerHTML = "You've Lost! Play Again?";
  }
  currentlyPlaying = false;
};
// Game Over Function FINISHED

// isBot Function
const isBot = door => {
  if (door.src === botDoorPath){
    return true;
  } else {
    return false;
  }
}
// isBot Function Finished

// isClicked Function
const isClicked = door => {
  if (door.src === closedDoorPath){
    return false;
  } else {
    return true;
  }
};
// isClicked Function FINISHED

// Play Door Function
const playDoor = door => {
  numClosedDoors--;
  if (numClosedDoors === 0){
    gameOver('win')
  }
  if (isBot(door) && numClosedDoors != 0) {
    gameOver();
  }
};
// Play Door Function FINISHED

// Random Door Picker Function
const randomDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
      openDoor1 = botDoorPath;
      openDoor2 = beachDoorPath;
      openDoor3 = spaceDoorPath;
    } if (choreDoor === 1){
      openDoor1 = spaceDoorPath;
      openDoor2 = botDoorPath;
      openDoor3 = beachDoorPath;
    } if (choreDoor == 2) {
      openDoor1 = spaceDoorPath;
      openDoor2 = beachDoorPath;
      openDoor3 = botDoorPath;
    };
};
// Random Door Picker Function FINISHED

// Door Onclick Functions
door1.onclick = function () {
  if (!isClicked(door1) && currentlyPlaying){
  door1.src = openDoor1;
  playDoor(door1);}
};
door2.onclick = function (){
  if(!isClicked(door2) && currentlyPlaying){
  door2.src = openDoor2;
  playDoor(door2);}
};
door3.onclick = function(){
  if(!isClicked(door3) && currentlyPlaying){
  door3.src = openDoor3;
  playDoor(door3);}
};
// Door Onclick Functions FINISHED

// Start Button Onclick Function
startButton.onclick = () => {
  if (!currentlyPlaying){
  startRound();}
}

randomDoorGenerator();
