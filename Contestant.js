class Contestant {
    constructor(){
      this.index = null;
      this.answer = 0;
      this.name = null;
    }
  
    getCount(){
      var contestantCountRef = database.ref('ContestantCount');
      contestantCountRef.on("value",function(data){
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(name){
      var contestantIndex = "contestants/contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        answer:this.answer
      })
    }
  static getPlayerInfo(){
    var contestantInfoRef = database.ref('Contestant');
    contestantInfoRef.on("value",(data)=>{allContestants = data.val()});
    allContestant = data.val;
  }
  }
  