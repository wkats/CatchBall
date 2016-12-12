function Ball(){
	this.x = random(10,width);
	this.y = random(-20,-100);
	this.r = 30;
	this.velocity = random(3,6);

	this.show = function(){
		fill(100,180,0);
		ellipse(this.x,this.y,this.r/2,this.r/2);
	}
	this.collide = function(_cest){
		var dis = dist(this.x,this.y,_cest.x,_cest.y);
		if(dis<30){
			return true;
		}
		return false;

	}
	this.update = function(){
		this.y += this.velocity;
		if(this.y>=height){
			this.velocity=random(3,6);
			this.y = random(-20,-100);
			this.x = random(10,width-10);
			errors+=1;
			newBall = true;
		}
	}
}