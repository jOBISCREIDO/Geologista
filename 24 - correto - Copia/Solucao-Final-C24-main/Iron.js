class Iron{
	constructor(x,y, width, heigth)
	{

		var options = {

			'restitution': 0.8,
			'friction': 3,
			'density': 30

		}

		this.x=x;
		this.y=y;
		this.heigth = heigth;
		this.width = width;
		this.body=Bodies.rectangle(this.x, this.y, width, heigth, options)
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
			stroke("lightgray");
			fill("lightgray");
			
			rect(0, 0, this.width, this.heigth);

			pop()
	}

}