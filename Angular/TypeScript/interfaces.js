var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.draw2DImage = function () {
        console.log("draw 2 d image");
    };
    Circle.prototype.drawPaint = function () {
        console.log("draw paint");
    };
    return Circle;
}());
var cir = new Circle();
cir.drawPaint();
cir.draw2DImage();
