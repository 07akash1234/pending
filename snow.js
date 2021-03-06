class Snow{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("snow5.webp");
        World.add(world, this.body);
      }
      display(){
        //var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
    
        imageMode(CENTER);
        image(this.image, 0, 0,20, 20);
        pop();
      }
      update(){
        if (this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,700),y:random(0,400)})
        }
    }
}