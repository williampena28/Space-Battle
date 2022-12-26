//DOM
// game text element
let gameText = document.getElementById('text');

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
            gameText.innerHTML = `${target.constructor.name} has taken a hit for ${this.firepower} damage.`;
            target.hull -= this.firepower;
        } else 
        {
            gameText.innerHTML = `${target.constructor.name} missed ${this.constructor.name}`;
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

// alien fleet created and new ships have been put into the array object.shipList
let enemyFleet = new enemyShips();

enemyFleet.addShip();
enemyFleet.addShip();
enemyFleet.addShip();
enemyFleet.addShip();
enemyFleet.addShip();
enemyFleet.addShip();

// our main spaceship
let USS_HelloWorld = new Spaceship(20, 5, .7);

// show hull for respective ships on the page
myShipHull.innerHTML = `Hull: ${USS_HelloWorld.hull}`;
enemyShipHull[0].innerHTML = `Hull: ${enemyFleet.shipList[0].hull}`;

// index set to go to our enemy ship list
let index = 0;

// show hulls of each enemy ship
for(let i = 0; i < enemyFleet.shipList.length; i++)
{
    enemyShipHull[i].innerHTML = `Hull: ${enemyFleet.shipList[i].hull}`;
}

// helper function that resets
const reset = () =>
{
    // reset main ship hull, index, and clearing out the enemy ship array then adding new ones
    USS_HelloWorld.hull = 20;
    index = 0;
    enemyFleet.shipList.length = 0;

    enemyFleet.addShip();
    enemyFleet.addShip();
    enemyFleet.addShip();
    enemyFleet.addShip();
    enemyFleet.addShip();
    enemyFleet.addShip();

    // update new hulls
    myShipHull.innerHTML = `Hull: ${USS_HelloWorld.hull}`;
    enemyShipHull[0].innerHTML = `Hull: ${enemyFleet.shipList[0].hull}`;

    // remove x's on each enemy ship
    for(let i = 0; i < enemyFleet.shipList.length; i++)
    {
        // update enemy ship image and hull data
        enemyShipImg[i].src = "./enemy_ship.png";
        enemyShipHull[i].innerHTML = `Hull: ${enemyFleet.shipList[i].hull}`;
    }

}

// event listener so a round is to be complete when our ship is clicked
myShip.addEventListener('click', () => 
{
    USS_HelloWorld.hit(enemyFleet.shipList[index]);

    if(enemyFleet.shipList[index].hull <= 0)
    {
        // to avoid seeing a negative representation of hull
        enemyFleet.shipList[index].hull = 0;

        // change the png when hull = 0 and update hull html
        enemyShipImg[index].src = "./enemy_ship_dead.png";
        enemyShipHull[index].innerHTML = `Hull: ${enemyFleet.shipList[index].hull}`;
        console.log(`Enemy ship ${index + 1} has been eliminated`);
        //go to the next enemy ship
        index++;

    } else
    {
        // enemy ship attacks our main ship
        enemyFleet.shipList[index].hit(USS_HelloWorld);
    }

        // check if main ship's hull is <= 0
    if(USS_HelloWorld.hull <= 0)
    {
        USS_HelloWorld.hull = 0;
        alert("Your ship has been destroyed. GAME OVER!");
        gameText.innerHTML = `You lost! D:`;
        reset();
    }

    myShipHull.innerHTML = `Hull: ${USS_HelloWorld.hull}`;

    //show new enemy health
    if(enemyFleet.shipList[enemyFleet.shipList.length - 1].hull != 0)
    {
        enemyShipHull[index].innerHTML = `Hull: ${enemyFleet.shipList[index].hull}`;
    } else 
    {
        // check if all enemy ships have been destroyed
        alert('All alien ships have been destroyed. YOU WIN!');
        gameText.innerHTML = `You won! :D`;
        reset();
    }

})