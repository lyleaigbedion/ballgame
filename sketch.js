// player 1 is "it" and drawn as a red circle
// player 2 is trying to escape capture.
// player 2 moves slightly slower but can teleport from
// bottom to top, left to right, etc. if they go off the edge

var player1X;	// create variables to store
var player1Y;	// player coordinates

var player2X;
var player2Y;

// if the game ends, make this true so we can display a message
var gameOver = false;


function setup() {
	createCanvas(windowWidth, windowHeight);

	// set player starting positions
	player1X = 100;
	player1Y = height/2;
	player2X = width - 100;
	player2Y = height/2;
	
	
	
}

function draw() {
	

	
	// instructions
	
	// only do game logic if game isn't over
	if(!gameOver) {

		// check keys one at a time
		// have the two players collided?
		// the dist function returns the distance between two
		// coordinate pairs in pixels
		var playerDistance = dist(player1X, player1Y, player2X, player2Y);
		
		//using playerDist to redraw
		var scaledX = map(playerDistance, 0, width, 0, 255); 
		var scaledY = map(playerDistance, 0, height, 0, 255);
		background(50,scaledX,scaledY );
		
		
		// PLAYER 1
		// will have inverted controls if too close to p2
		if(playerDistance < 500) {
			
			
			
			
			
			fill(255,255,255);
			textAlign(TOP,CENTER);
			textSize(25);
			text("P1 has inverted controls!", windowWidth/2,100 );
			
		if(keyIsDown(40)) {
			// UP
			// can p1 go up?
			if(player1Y > 10) {
			// if so, move up...
			player1Y = player1Y - 10;
			}
		}

		if(keyIsDown(38)) {
			// DOWN
			// can p1 go down?
			if(player1Y < height - 10) {
				player1Y = player1Y + 10;
			}
		}

		if(keyIsDown(39)) {
			// LEFT
			// check that the player isnt too far left
			if(player1X > 10) {
				player1X = player1X - 10;
			}
		}

		if(keyIsDown(37)) {
			// RIGHT
			// can p1 go right??
			if(player1X < width - 10) {
				player1X = player1X + 10;
			}
		}
			
			
			
			
		}else {
			
			if(keyIsDown(38)) {
			// UP
			// can p1 go up?
			if(player1Y > 10) {
				// if so, move up...
				player1Y = player1Y - 10;
			}
		}

		if(keyIsDown(40)) {
			// DOWN
			// can p1 go down?
			if(player1Y < height - 10) {
				player1Y = player1Y + 10;
			}
		}

		if(keyIsDown(37)) {
			// LEFT
			// check that the player isnt too far left
			if(player1X > 10) {
				player1X = player1X - 10;
			}
		}

		if(keyIsDown(39)) {
			// RIGHT
			// can p1 go right??
			if(player1X < width - 10) {
				player1X = player1X + 10;
			}
		}

	}
		// PLAYER 2
		if(keyIsDown(87)) {
			// UP
			player2Y = player2Y - 5;
		}

		if(keyIsDown(83)) {
			// DOWN
			player2Y = player2Y + 5;
		}
		if(keyIsDown(65)) {
			// LEFT
			player2X = player2X - 5;
		}
		if(keyIsDown(68)) {
			// RIGHT
			player2X = player2X + 5;
		}
		// wrap player 2 rather than constraining, to mix things up
		// has player 2 gone off the right side of the screen?
		if(player2X > width) {
			player2X = 0;
		}
		// has player 2 gone off the left side of the screen?
		if(player2X < 0) {
			player2X = width;
		}
		// has player 2 gone off the bottom of the screen?
		if(player2Y > height) {
			player2Y = 0;
		}

		// has player 2 gone off the top of the screen?
		if(player2Y < 0) {
			player2Y = height;
		}

		fill(255,0,0);	// red for PLAYER 1
		ellipse(player1X, player1Y, 50, 50);
		
		
		//invincible input for p1
		if(keyIsDown(39) && keyIsDown(40) && keyIsDown(38) && keyIsDown(37)){
			playerDistance = 10000000000000;
			fill(20);	// dark grey for PLAYER 1
			ellipse(player1X, player1Y, 50, 50);
			
				
		}
		
		
		
		
		
		fill(0,0,255);	// blue for PLAYER 2
		ellipse(player2X, player2Y, 50, 50);
		
		//Super state for p2, fills the screen with red circles as a cover.
		// also creates another blue ball to trick p1.
		if(keyIsDown(87) && keyIsDown(83) && keyIsDown(65) && keyIsDown(68)){
			
			fill(0,0,255);	// dummy blue ball
			ellipse(player1X+150, player1Y+150, 50, 50);
			
			fill(255,0,0)	// red for PLAYER 1
			ellipse(player2X, player2Y, 50, 50);
			
			
			for(i=0; i<windowHeight; i++){
				fill(255,0,0);;	// red
				ellipse(random(windowWidth), random(windowHeight), 45,45 );
				
			}
			
			
			
			
		}

		
		
		if(playerDistance < 65) {
			// THEYVE COLLIDED! RED WINS!
			gameOver = true;
		}
	} else {

		// if game IS over...
		fill(255,255,255);
		textAlign(CENTER,CENTER);
		textSize(50);
		text("Game Over!", width/2, height/2);

	}
	// instructions
	fill(255,255,255);
	textAlign(LEFT,TOP);
	textSize(20);
	text("P1 uses the arrow keys\n Hold all arrow keys to be invincible.", 50,50);
	
	fill(255,255,255);
	textAlign(RIGHT,TOP);
	textSize(20);
	text("P2 uses WASD \n Hold WASD down to confuse p1.", windowWidth-50,50);
	
}