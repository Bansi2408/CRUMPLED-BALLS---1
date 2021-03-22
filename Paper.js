class Paper {
  constructor(x, y, radius) {
    var options = {
        'restitution':0,
        'friction':0,
        'density':1
    }
    this.radius = this.radius
    this.body = Bodies.circle(x, y,radius, options);
    World.add(world, this.body);
  }
  display(){
    fill("red");
    ellipseMode(RADIUS);
    rect(this.body.position.x,this.body.posotion.y,this.radius);
  }
};