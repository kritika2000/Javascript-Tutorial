/** 1. Player Game Challenge */
function Player(name) {
  this.name = name;
  this.lvl = 1;
  this.points = 0;
}

Player.prototype.gainXp = function (n) {
  this.points += n;
  if (this.points >= 10) {
    this.lvl += 1;
    this.points -= 10;
  }
};

Player.prototype.describe = function () {
  console.log(this.name, this.lvl, this.points);
};

const player1 = new Player('Bob');
const player2 = new Player('Alice');

player1.gainXp(5);
player2.gainXp(7);
player1.gainXp(3);
player2.gainXp(2);
player1.gainXp(8);
player2.gainXp(4);

player1.describe();
player2.describe();
