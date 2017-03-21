function Game(){
    this._Frame = [];
    this._gameSize = 10;
};

Game.prototype.addFrame = function(){
    this._frames.push(frame);
}

Game.prototype.score = function(){
    var gameScore = 0;

    for(var i=0; i<this._frames.length; i++){
        gameScore += this.frameScore(i);
    }
    return gameScore;
}

Game.prototype.frameScore = function(index){
    return this._frames[index].sum();
}



module.exports = Game;