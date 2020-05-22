class Player {
    constructor(){
this.index = null;
this.distance = 0;
this.name = null;




    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",function(data){
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "player" + playerCount;
      database.ref(playerIndex).set({
        Name:this.name,
        Distance: this.distance
      });
    }
    static datafetch(){
var datastoreref = database.ref('allplayers')
datastoreref.on("value", (data)=>{
 datastore =   data.val()
}

)


    }
  }
  