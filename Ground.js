class Ground {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      rectMOde(CENTER);

      fill(white);

      rect(this.body.position.x,this.body.posotion.y,this.width,this.height);
    }
  };