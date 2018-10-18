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

  rmObject(){
    
  }

  start(){

  }

  stop(){

  }

}
