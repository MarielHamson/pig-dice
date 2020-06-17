function Player(currentRoll, turnScore, totalScore) {
  this.currentRoll = currentRoll;
  this.turnScore = turnScore
  this.totalScore = totalScore
}
let player1 = new Player();

Player.prototype.rollDice = function() {
  randomNumber = Math.floor((Math.random() * 6) + 1);
  this.currentRoll = randomNumber
  if (randomNumber === 1) {
    this.turnScore = 0
    this.currentRoll = 1
  } else {this.turnScore += randomNumber}
  return this.currentRoll;
}

Player.prototype.turnScore = function(){
  
}
