class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visiblity=255;
  }
display()
{
  console.log(this.body.speed)
  if(this.body.speed<5){
    super.display();
  }
  else{
    World.remove(world,this.body);
    push();
    tint(255,this.visiblity);
    image(this.image,this.body.position.x,this.body.position.y,200,200);
    this.visiblity=this.visiblity-5;
    pop();
  }


}};
