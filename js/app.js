// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    
    this.sprite = 'images/enemy-bug.png';
    this.x = Math.floor(Math.random() * 505);  //initializes x-position randomly between 0 and 505
    this.y = Math.floor(Math.random() * 165) + 65;  // initializes y-position randomly between 65 and 230
    dIndex = Math.floor(Math.random() * 2);  //  gives an index used for randomizing direction in the next few lines
    if (dIndex < 1) {
        this.direction = 'left';
    } else {
        this.direction = 'right';
    }
    this.speed = Math.floor(Math.random() * 125) + 45; // randomizes speed between 45 and 170
    this.width = 90;
    this.height = 85;

}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
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

// Player class

var Player = function () {
    //  The following lines randomize the player sprite and initialize position
    this.imagePath = 'images/char-';
    images = [ 'boy.png', 'cat-girl.png', 'horn-girl.png', 'pink-girl.png', 'princess-girl.png'];
    characterIndex = Math.floor(Math.random() * 5);
    this.sprite = this.imagePath + images[characterIndex];
    this.x = 202;
    this.y = 415;
    //  Sets movement sensitivity
    this.dy = 35;  
    this.dx = 35;  
    //  Sets sprite dimensions
    this.width = 110;
    this.height = 110;

}

//  Helper method, resets the player's location
Player.prototype.respawn = function() {
    this.x = 202;
    this.y = 415;
}

Player.prototype.update = function() {
    //sets boundaries on the game screen 
    if ( this.x <= 0 ) { this.x = 0 } 
    if ( this.x >=410 ) { this.x = 410 }
    if ( this.y <= 0 ) { this.y = 0 }
    if ( this.y >= 435 ) { this.y = 435 }
    //resets position if you make it to the river
    if ( this.y <= 10 ) {
        alert("You win!");
        this.respawn(); 
    }
}

//  Draws player

Player.prototype.render = function() { 
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
//  Handles user input
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


//  Instantiates player and enemies

var player = new Player();

var enemy1 = new Enemy();
var enemy2 = new Enemy();
var enemy3 = new Enemy();
var enemy4 = new Enemy();

//  Stores enemies in the allEnemies array for engine.js to access

var allEnemies = [enemy1, enemy2, enemy3, enemy4];

// Event Listener for player.handleInput()
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


