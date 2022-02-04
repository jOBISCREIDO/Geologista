class Stone{
	constructor(x,y, width, heigth)
	{

		var options = {

			'restitution': 0.8,
			'friction': 0.9,
			'density': 12

		}

		this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(this.x, this.y, width, heigth, options)
		
		this.width = width;
		this.heigth = heigth;
		World.add(world, this.body);
	}
	display()
	{
			var pos=this.body.position;
			var angle = this.body.angle;		
			push()
			translate(pos.x, pos.y);
			rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			
			rect(0, 0, this.width, this.heigth);

			pop()
	}

}