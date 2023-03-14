var commandfromInput = "";
var xaxis = 0;
var yaxis = 0;
var directioninput = 'NORTH';
function createRover(x, y, direction) {
  const rover = {
    x,
    y,
    direction,
    moveForward() {
      if (rover.direction === "NORTH") {
        rover.y++;
      } else if (rover.direction === "EAST") {
        rover.x++;
      } else if (rover.direction === "SOUTH") {
        rover.y--;
      } else if (rover.direction === "WEST") {
        rover.x--;
      }
    },
    moveBackward() {
      if (rover.direction === "NORTH") {
        rover.y--;
      } else if (rover.direction === "EAST") {
        rover.x--;
      } else if (rover.direction === "SOUTH") {
        rover.y++;
      } else if (rover.direction === "WEST") {
        rover.x++;
      }
    },
    rotateLeft() {
      if (rover.direction === "NORTH") {
        rover.direction = "WEST";
      } else if (rover.direction === "EAST") {
        rover.direction = "NORTH";
      } else if (rover.direction === "SOUTH") {
        rover.direction = "EAST";
      } else if (rover.direction === "WEST") {
        rover.direction = "SOUTH";
      }
    },
    rotateRight() {
      if (rover.direction === "NORTH") {
        rover.direction = "EAST";
      } else if (rover.direction === "EAST") {
        rover.direction = "SOUTH";
      } else if (rover.direction === "SOUTH") {
        rover.direction = "WEST";
      } else if (rover.direction === "WEST") {
        rover.direction = "NORTH";
      }
    },
  };
  return rover;
}

function moveRover(rover, inputCommand) {
  for (let i = 0; i < inputCommand.length; i++) {
    const command = inputCommand.charAt(i);
    if (command === "F") {
      rover.moveForward();
    } else if (command === "B") {
      rover.moveBackward();
    } else if (command === "L") {
      rover.rotateLeft();
    } else if (command === "R") {
      rover.rotateRight();
    } else {
      console.log(`Invalid command: ${command}`);
    }
  }
  const result = `${rover.x}, ${rover.y}) ${rover.direction}`;
  return result;
}

// Unit test:
// const rover = createRover(0, 0, "NORTH");
// console.log(moveRover(rover, "FLFFFRBLF"));
// output (-4, 0) WEST


//get x
document
  .querySelector(".main_content .options .xaxis")
  .addEventListener("keyup", function (e) {
    xaxis = e.target.value;
  });

//get x
document
  .querySelector(".main_content .options .yaxix")
  .addEventListener("keyup", function (e) {
    yaxis = e.target.value;
  });

//get direcion
document
  .querySelector(".main_content .options .direcioninput")
  .addEventListener("change", function (e) {
    directioninput = e.target.value;
  });

// get command
document
  .querySelector(".main_content .form_control")
  .addEventListener("keyup", function (e) {
    commandfromInput = e.target.value;
  });

// get result from function
document
  .querySelector(".main_content .btn")
  .addEventListener("click", function (e) {
    const rover = createRover(xaxis, yaxis, directioninput);
    const result = moveRover(rover, commandfromInput);
    alert(result);
  });
