function Player(currentRoll, turnScore, totalScore) {
  this.currentRoll = currentRoll;
  this.turnScore = turnScore
  this.totalScore = totalScore
}
let player1 = new Player;

Player.prototype.rollDice = function() {
  let randomNumber = Math.floor((Math.random() * 6) + 1);
  this.currentRoll = randomNumber;
  return this.currentRoll;
}

Player.prototype.rollDice = function() {
  this.currentRoll = Math.floor((Math.random() * 6) + 1);
  return this.currentRoll;
}
