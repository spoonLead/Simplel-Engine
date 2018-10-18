class Scene{
  constructor(){
    this.objects = [];
  }

  addObject(objectName, object, x, y, width, height, physicality, layer){
    bufferObject = {
      objectName : objectName,
      object : object,
      x : x,
      y : y,
      ex : x + width,
      ey : y + height,
      width : width,
      height : height,
      physicality : physicality,
      layer : layer,
      modelPath : object.modelPath,
    }
    objects.push(bufferObject);
  }

  rmObject(objectName){
    for(var i = 0; i < this.objects.lenght; i++){
      if(this.objects[i].objectName == objectName){
        this.objects.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  start(){

  }

  stop(){

  }

}
