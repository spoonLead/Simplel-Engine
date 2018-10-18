
//---------BASIC COLLISION SYSTEM-----------
function collision(obj1, obj2) {
  this.verticalCollision = false;
  this.horizontalCollision = false;
  if((typeof obj2) == "array"){
    for(var i = 0; i < obj2.length; i++){
      if(obj2[i].x < obj1.x < obj2[i].ex) || (obj2[i].x < obj1.ex < obj2[i].ex){verticalCollision = true}     //Vertical Collision
      if(obj2[i].y < obj1.y < obj2[i].ey) || (obj2[i].y < obj1.ey < obj2[i].ey){horizontalCollision = true}   //Horizontal Collision
    }
  }
  else{
    if(obj2.x < obj1.x < obj2.ex) || (obj2.x < obj1.ex < obj2.ex){verticalCollision = true}     //Vertical Collision
    if(obj2.y < obj1.y < obj2.ey) || (obj2.y < obj1.ey < obj2.ey){horizontalCollision = true}   //Horizontal Collision
  }

  if(verticalCollision & horizontalCollision) return true;
  else return false;
}
