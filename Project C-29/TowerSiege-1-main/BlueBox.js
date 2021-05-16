class Box {

    constructor(x, y, width, height) {
        var options = {

           //isStatic: false,
            restitution: 0.1,
            friction: 0.01,
            //density:0.02

        }

        this.body = Bodies.rectangle(x, y, width, height, options);

        
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
    
        var pos = this.body.position;
        var angle = this.body.angle; 
        push(); 
        translate(pos.x, pos.y); 
        rotate(angle); 
        strokeWeight(2);
        fill("blue");
        rectMode(CENTER)
        rect(0, 0, this.width, this.height);
        pop(); 

    }
}