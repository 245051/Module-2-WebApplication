interface Paint{
    drawPaint():void;
}
interface Paint2D{
    draw2DImage():void;
   
}
class Circle implements
Paint,Paint2D{
draw2DImage(): void {
    console.log("draw 2 d image");
}
drawPaint(): void {
    console.log("draw paint");
}
}

var cir = new Circle();
cir.drawPaint();
cir.draw2DImage();