function Cest(){
	this.w = 60;
	this.h = 30;
	this.x=width/2;
	this.y=height-25;

	this.show = function(){
		fill(200,0,100);
		rect(this.x-this.w/2,this.y,this.w,this.h);
	}
	this.update = function(){
		this.x = mouseX;

	}
}