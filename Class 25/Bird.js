//This is a child class /sub class created using a base class/ parent class
//the key word extends is used to create a child class
//A child class inherits all the properties and functions from the parent class

class Bird extends BaseClass{
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    super.display();
  }
}