const Potion = require('./Potion');
const Character = require('./Character');

// extending the constructor allows us to import parent constructor methods
class Enemy extends Character {
  constructor(name, weapon) {
    // a call to the parent constructor allows extra properties to be added to the child class
    super(name); // passes the name arg to the Character(parent class) to return its defined values

    // current child properties that EXTEND the Enemy type are defined
    this.weapon = weapon;
    this.potion = new Potion();
  }

  getDescription() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
  }
}






module.exports = Enemy;