class Scene{
  constructor(){
    this.objectsBuffer = []; //buffer with all objects in scene
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
      states : object.states
    };
    objectsBuffer.push(bufferObject);
  }

  rmObject(objectName){
    //find object with atribute objectName in scene buffer
    for(var i = 0; i < this.objectsBuffer.lenght; i++){
      if(this.objectsBuffer[i].objectName == objectName){
        this.objectsBuffer.splice(i, 1);
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
