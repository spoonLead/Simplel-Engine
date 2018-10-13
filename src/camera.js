
class Camera{
  constructor( safetyMode = true, x = canvas.width/2, y = canvas.height/2){
    this.x = x
    this.y = y
    this.safetyMode = safetyMode;

    console.log("Camera set up")
    console.log("*Camera* x: " + this.x + ", y: " + this.y + ", speed: " + this.speed + ", safetyMode: " + this.safetyMode)
  }


  goToCoord(x, y){
    if(this.focus) objectsScrolling.push(this.focus);
    this.focus = undefined;
    this.mode = "goToCoord";
    var deltaX = this.x - x; this.x = deltaX;
    var deltaY = this.y - y; this.y = deltaY;
    mapScrolling(objectsScrolling, 'x', deltaX, this.safetyMode);
    mapScrolling(objectsScrolling, 'y', deltaY, this.safetyMode);
  }
}
