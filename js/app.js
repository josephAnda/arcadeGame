// Enemies our player must avoid
var Enemy = function(x, y, direction, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.speed = speed;
    this.width = 90;
    this.height = 85;

}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // Moves enemies left and right
    if (this.direction == 'right') { this.x += this.speed * dt }  
    if (this.direction == 'left') { this.x -= this.speed * dt }  
    //respawns enemies
    if (this.x >= 505 && this.direction == 'right') { this.x = 0 }  
    if (this.x <= 0 && this.direction == 'left') { this.x = 505 }
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function () {
    //  Declares character image and position
    this.sprite = 'images/char-boy.png';
    this.x = 202;
    this.y = 415;
    this.dy = 25;
    this.dx = 25;
    this.width = 110;
    this.height = 110;

}

Player.prototype.update = function() {
    //sets boundaries on the game screen 
    if ( this.x <= 0 ) { this.x = 0 } 
    if ( this.x >=410 ) { this.x = 410 }
    if ( this.y <= 0 ) { this.y = 0 }
    if ( this.y >= 435 ) { this.y = 435 }
    //resets position if you make it to the river
    if ( this.y <= 10 ) {
        this.respawn();
        /*
        this.x = 202;
        this.y = 415;
        */
    }
}

Player.prototype.respawn = function() {
    this.x = 202;
    this.y = 415;
}

Player.prototype.render = function() { 
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
//This function should use the user input to update the canvas . . . . 
Player.prototype.handleInput = function(keys) {
    if ('up' === keys) {
        this.y -= this.dy;
    }
    if ('down' === keys) {
        this.y += this.dy;
    }
    if ('left' === keys) {
        this.x -= this.dx;
    }
    if ('right' === keys) {
        this.x += this.dx;
    }
};


//Instantiates player
var player = new Player();
//Instantiates enemies with initial position, direction, and speed
var enemy1 = new Enemy(0, 65, 'right', 45);
var enemy2 = new Enemy(0, 150, 'right', 65);
var enemy3 = new Enemy(505, 230, 'left', 55);
//Stores enemies in the allEnemies array for engine.js to access

var allEnemies = [enemy1, enemy2, enemy3];



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


//collision detection?
