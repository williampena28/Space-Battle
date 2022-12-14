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

let USS_HelloWorld = new Spaceship(20, 5, .7); // our main spaceship

// 6 alien ships 
// hull, firepower, and accuracy values are all in random using the respective helper functions.
let alien_ship1 = new Spaceship(giveHull(), giveFirePower(), giveAccuracy());
let alien_ship2 = new Spaceship(giveHull(), giveFirePower(), giveAccuracy());
let alien_ship3 = new Spaceship(giveHull(), giveFirePower(), giveAccuracy());
let alien_ship4 = new Spaceship(giveHull(), giveFirePower(), giveAccuracy());
let alien_ship5 = new Spaceship(giveHull(), giveFirePower(), giveAccuracy());
let alien_ship6 = new Spaceship(giveHull(), giveFirePower(), giveAccuracy());