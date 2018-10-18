class Scene{
  constructor(){
    this.objects = [];
  }

  //Add new object based on flatObject to the scene  
  addObject(objectName, object, x, y, width, height, physicality, layer){
    //temp dictionary for push to buffer
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
    //find object with atribute objectName in scene buffer
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
