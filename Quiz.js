class Quiz {
    constructor(){}
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once('value');
        if (contestantCountRef.exists()){
          contestantCount = contestantCountRef.val();
          contestant.getCount();
        }
        question = new Question()
        question.display();
      }
    }
    play(){
      question.hide();
      textSize(30);
      text("The Quiz Has Started!",120,100);
      Contestant.getPlayerInfo();
      if (allContestants !== undefined){
        for(var plr in allContestants){
        if(plr === "contestant" + contestant.index)
        fill("red");
        else
        fill("black")
        text("Hello",400,400);
      }
    }
  
  }
  }