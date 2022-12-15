// main class for the space ship since they all have the same propertie
class Spaceship
{
    constructor(hull, firepower, accuracy)
    {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
};

class enemyShips
{
    constructor(shipList) 
    {
        this.shipList = []; // enemy ship list to iterate through
    }
    addShip()
    {
        // hull value is 3 to 6, accuracy value is 2 to 4, and accuracy value is .6 to .8
        let hull = Math.floor(Math.random() * (7 - 3) + 3);
        let firepower = Math.floor(Math.random() * (7 - 3) + 3);
        let accuracy = Math.round((Math.random() * (.81 - .6) + .6) * 10) / 10;
        this.shipList.push(new Spaceship(hull, firepower, accuracy));
    }
}

// alien fleet created and new ships have been put into the array
let enemyFleet = new enemyShips();

enemyFleet.addShip();
enemyFleet.addShip();
enemyFleet.addShip();
enemyFleet.addShip();
enemyFleet.addShip();
enemyFleet.addShip();

//Helper functions
// ship destroyed
const destroyShip = (enemyList) =>
{
    console.log(`Ship has been destroyed. Only ${enemyList.length} to go!`);
    enemyList.shift();
}

// log game over
const printGameOver = () =>
{
    return "GAME OVER! refresh the page to start over";
}

const printWin = () =>
{
    return "YOU WIN!";
}

// our main spaceship
let USS_HelloWorld = new Spaceship(20, 5, .7);

//DOM
// dom elements that grab the containers of both ships
let myShip = document.getElementById('my-ship');
let enemyShip = document.getElementById('enemy-ship');


myShip.addEventListener('click', () =>
{
    let myShipHull = document.getElementById('my-ship-hull');
    myShipHull.innerHTML = `Hull: ${USS_HelloWorld.hull}`;
})

// main ship elements
let myShipHull = document.getElementById('my-ship-hull');
let myShipPower = document.getElementById('my-ship-firepower');
let myShipAccuracy = document.getElementById('my-ship-accuracy');
myShipHull.innerHTML = `Hull: ${USS_HelloWorld.hull}`

// enemy ship elements
let enemyShipHull = document.getElementById('enemy-ship-hull');
let enemyShipPower = document.getElementById('enemy-ship-firewpower');
let enemyShipAccuracy = document.getElementById('enemy-ship-accuracy');