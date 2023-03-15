This is a JavaScript program that simulates a Mars rover that can be controlled with a set of commands. The rover can move forward and backward and rotate left and right.

How to use
1. Clone the repository or download the source code files.

2. Open index.html in a web browser to access the user interface.

3. Enter the starting coordinates and direction of the rover.

4. Enter a set of commands to control the rover. The commands can include the following:

    . `F`: move forward
    . `B`: move backward
    . `L`: rotate left
    . `R`: rotate right
5. Click the Result button to execute the commands and see the final position and direction of the rover.

How it works
The program defines a createRover() function that creates a rover object with an initial position and direction. The rover object has several methods that can be called to move and rotate the rover. The program also defines a moveRover() function that takes a rover object and a set of commands and executes the commands on the rover.

In the user interface, the program listens for input from the user and creates a new rover object with the entered coordinates and direction. The program then calls the moveRover() function with the entered commands and displays the final position and direction of the rover.

License
This program is licensed under the MIT License.