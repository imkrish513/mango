class Tree extends BaseClass {
    constructor(x, y, width, height){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2
        }
        super(x,y,width,height);
      this.image = loadImage("tree.png");
    }
  
  };
  