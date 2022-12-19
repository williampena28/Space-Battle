// main class for the space ship since they all have the same propertie
class Spaceship
{
    constructor(hull, firepower, accuracy)
    {
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    hit(target)
    {
        // if random float between 0 and 1 is less than our accuracy
        if(Math.random() < this.accuracy) //
        {
            // take this.firepower amount health from the target
            console.log(`${target.constructor.name} has taken a hit for ${this.firepower} damage.`)
            target.hull -= this.firepower;
        } else 
        {
            console.log(`${target.constructor.name} missed ${this.constructor.name}`)
        }
    }
    
};

// enemy ship class for the a list of alien ships
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

// our main spaceship
let USS_HelloWorld = new Spaceship(20, 5, .7);

//DOM
// dom elements that grab the containers of both ships
let myShip = document.getElementById('my-ship');

// main ship element
let myShipHull = document.getElementById('my-ship-hull');

// enemy ship elements

// selecting the images and hull of the enemy ships
let enemyShipImg = document.querySelectorAll('#enemy');
let enemyShipHullNodeList = document.querySelectorAll('#enemy-hull');

//enemyShipHull into an array for the use of a for loop
let enemyShipHull = Array.prototype.slice.call(enemyShipHullNodeList);



const startGame = () =>
{
    // looping through the enemy space ships
    for (let i = 0; i < enemyFleet.shipList.length; i++)
    {
        // break from the loopo and log that you lost when main ship health is 0 or you win when all ships are destroyed
        if(USS_HelloWorld.hull <= 0)
        {
            console.log("YOU LOSE");
            break;
        }

        // flag for our while loop
        let terminate = false;
        while(!terminate)
        {
            // main ship attacks first
            USS_HelloWorld.hit(enemyFleet.shipList[i]);
            
            //check if ship hull is destroyed (hull <= 0)
            if(enemyFleet.shipList[i].hull <= 0)
            {
                // to avoid seeing a negative representation of hull
                enemyFleet.shipList[i].hull = 0;

                // change the png when hull = 0;
                enemyShipImg[i].src = "./enemy_ship_dead.png";
                console.log(`Enemy ship ${i + 1} has been eliminated`);

                // break from the while loop and onto the next index
                terminate = true;
            } else
            {
                // enemy ship attacks our main ship
                enemyFleet.shipList[i].hit(USS_HelloWorld);
            }

            // check if main ship's hull is <= 0
            if(USS_HelloWorld.hull <= 0)
            {
                USS_HelloWorld.hull = 0;
                console.log("Your ship has been destroyed. GAME OVER");
                terminate = true;
            }

        }

        // check if all enemy ships have been destroyed
        if(enemyFleet.shipList[enemyFleet.shipList.length - 1].hull <= 0)
        {
            console.log("All alien ships have been destroyed. YOU WIN!");
        }
    }
}

startGame();

// hull display updates for the respective ships

myShipHull.innerHTML = `Hull: ${USS_HelloWorld.hull}`

for(let i = 0; i < enemyFleet.shipList.length; i++)
{
    enemyShipHull[i].innerHTML = `Hull: ${enemyFleet.shipList[i].hull}`;
}