class Game{
    constructor(){
     
    }
    gameState(){
        var state = database.ref("gameState");
        state.on("value",function(data){gameState=data.val()})
    }

    start(){
        console.log(gameState)
        if(gameState===0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display(); 
            console.log(gameState) 
        }
            car1 = createSprite(100,450);
            car1.addImage(car1Img);
            car2 = createSprite(200,450);
            car2.addImage(car2Img);
            car3 = createSprite(300,450);
            car3.addImage(car3Img);
            car4 = createSprite(400,450);
            car4.addImage(car4Img);
            cars = [car1,car2,car3,car4];
            //console.log(cars)
            
    }
    update(state){
     database.ref('/').update({
         gameState:state
     }) 
    }

    play(){
      form.hide();

      Player.playerInfo();

      if(allPlayers!==null){
        var index = 0;
        var x=0;
        var y=0;

        for(var plar in allPlayers){
           x=350+x;
           y=displayHeight-50-allPlayers[plar].distance;
          
           cars[index].x=x;
           cars[index].y=y;
           index++

           if (index === player.index){ 
               cars[index - 1].shapeColor = "red";
                camera.position.x = displayWidth/2; 
                camera.position.y = cars[index-1].y; 
            }

        }

        if(keyDown(UP_ARROW)&&player.index!==null){
          player.distance=player.distance+10;
          player.update();

        }

        console.log(player.index);

        drawSprites();

      }
    }
     
}

