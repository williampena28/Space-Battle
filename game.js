class Spaceship
{
    constructor(hull, firepower, accuracy)
    {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }


};

//Helper functions
// log game over
const printGameOver = () =>
{
    return "GAME OVER! refresh the page to start over";
}

const printWin = () =>
{
    return "YOU WIN!";
}

// returns a number between 3 and 6 using Math.floor() and Math.random()
const giveHull = () =>
{
    return Math.floor(Math.random() * (7 - 3) + 3);
}

// returns a number between 2 and 4 using aforementioned functions
const giveFirePower = () =>
{
    return Math.floor(Math.random() * (5 - 2) + 2);
}

// returns a float between .6 and .8
const giveAccuracy = () =>
{
    return Math.round((Math.random() * (.81 - .6) + .6) * 10) / 10;
}

// our main spaceship
let USS_HelloWorld = new Spaceship(20, 5, .7);

// 6 alien ships 
// hull, firepower, and accuracy values are all in random using the respective helper functions.
let alien = 
[
    new Spaceship(giveHull(), giveFirePower(), giveAccuracy()),
    new Spaceship(giveHull(), giveFirePower(), giveAccuracy()),
    new Spaceship(giveHull(), giveFirePower(), giveAccuracy()),
    new Spaceship(giveHull(), giveFirePower(), giveAccuracy()),
    new Spaceship(giveHull(), giveFirePower(), giveAccuracy()),
    new Spaceship(giveHull(), giveFirePower(), giveAccuracy())
]

// flag variable for the main while loop that runs our game
let terminate = false;

// this is where the main game will run. When the game is over, stop the while loop until the page is refreshed
while(!terminate)
{
    console.log("test");
    terminate = true;
}