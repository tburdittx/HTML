//These are the three location variables
var location1 = 3;
var location2 = 6;
var location3 = 2;

//The variable guess won't have a value until guesses are made
//The initial value for boths hits and guesses is 0.
var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

//This is taking the guesses the user inputs, checks if they are valid, then counts them.  
while (isSunk == false) {
    guess = prompt("Ready, Aim Fire! (Enter a number from 1-6):");

    if (guess < 1 || guess > 6) {
        alert("Please enter a valid cell number!");
    } else {
        guesses = guesses + 1;

        //This is where the hit detection is going to take place.
        //If none of these become true, then the hit variable is never incremated. 
        if (guess == location1 || guess == location2 || guess == location3) {
            alert("HIT!");
            hits = hits + 1;
            //If all 3 ships are sunk, then the player wins. It then lets the player know too.
            if (hits == 3) {
                isSunk == true;
                alert("You sank my battleship!");
                var stats = "You took " + guesses + " guesses to sink the battleship." +
                    " Your shooting accuracy was " + 3 / guesses;
                alert(stats);
            }
        } else {
            alert("MISS!");
        }
    }
}
