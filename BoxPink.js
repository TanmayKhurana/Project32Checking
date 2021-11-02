class BoxPink{
    constructor(x,y,w,h){
        var r_options={
            isStatic:false
        }

        this.r = Bodies.rectangle(x,y,w,h, r_options);
        this.w = w
        this.h = h

        this.visibility = 255

 	    World.add(world, this.r);


    }
    display(){
        console.log(this.r.speed)
        if(this.r.speed<10){
            var pos = this.r.position
            push()
            translate(pos.x, pos.y)
            rectMode(CENTER)
        fill("pink");rect(0, 0, this.w, this.h)
        pop()
        }else{
            World.remove(world, this.r)
            push()
            this.visibility = this.visibility-10
            tint(255, this.visibility)
            rect(0, 0, this.w, this.h)
            pop()
        }
    }

    score(){
        if (this.Visiblity<0&&this.Visiblity>-105)
          score++
        
      }
}