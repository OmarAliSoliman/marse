const rover = createRover(0, 0, "NORTH");

// Test moveRover function
console.assert(
  moveRover(rover, "FLFFFRBLF") === "(-4, 0) WEST",
  "Test Case 1 Failed"
);

console.assert(
  moveRover(rover, "LBBRRRRLLFFFF") === "(1, -4) SOUTH",
  "Test Case 2 Failed"
);

console.assert(
  moveRover(rover, "BBLFFLFRFF") === "(3, -3) NORTH",
  "Test Case 3 Failed"
);

console.assert(
  moveRover(rover, "FFRBLBRFLB") === "(-3, 0) EAST",
  "Test Case 4 Failed"
);