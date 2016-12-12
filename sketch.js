var cest;
var balls = [];
var nBalls = 1;

var newBall = false;

var score = 0;
var errors = 0;


function setup(){
	createCanvas(600,450);
	cest = new Cest();
	for (var i = nBalls - 1; i >= 0; i--) {
		balls[i] = new Ball();
	}
}
function draw(){
	background(105);
	fill(0,180,50);
	text("Score: "+score,20,20);
	text("Errors: "+errors,20,50);
	for (var i = balls.length - 1; i >= 0; i--) {
		balls[i].show();
		balls[i].update();

		if(newBall){
			balls.push(new Ball());
			newBall = false;
		}

		if(balls[i].collide(cest)){
			balls.splice(i,1);
			score+=100;
		}

	}
	

	cest.show();cest.update();

}