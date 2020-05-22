var database, form,game,player,gameState,playerCount,datastore; 
gameState = 0;
function setup(){
    createCanvas(500,500);
  database = firebase.database();
   game = new Game()
game.start();
}

function draw(){

  background("green")
 if(playerCount === 4){

game.update(1);
 }
 
 
 
 
 
  if(gameState === 1)  {

game.play();

 }


   

}




