class Rectangle {
    constructor(height, width) {
      this.name = "Rectangle";
      this.height = height;
      this.width = width;
    }}
    class Area extends Rectangle{
        constructor(){
            super();
            var area1=height*this.width;
        }
    }
    let area=new Area(5,4);
console.log(area.area1);