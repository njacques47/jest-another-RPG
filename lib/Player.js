const Potion = require('../lib/Potion');
const Character = require('./Character');

// extending the constructor allows us to import parent constructor methods
class Player extends Character {
  constructor(name = '') {
    // a call to the parent constructor allows extra properties to be added to the child class
    super(name); // passes the name arg to the Character(parent class) to return its defined values

    // current child properties that EXTEND the Player type are defined
    this.inventory = [new Potion('health'), new Potion()];
  }

  // updated as prototype: returns an object with various player properties
  // updated to ES6
  getStats() {
    return {
      potions: this.inventory.length,
      health: this.health,
      strength: this.strength,
      agility: this.agility
    };
  }

  // update as prototype: returns the inventory array to false if empty
  // updated to ES6
  getInventory() {
    if (this.inventory.length) {
      return this.inventory;
    }
    return false;
  }

  // add item to inventory
  // updated to ES6
  addPotion(potion) {
    this.inventory.push(potion);
  }

  // use item from inventory
  // updated to ES6
  usePotion(index) {
    const potion = this.getInventory().splice(index, 1)[0];

    switch (potion.name) {
      case 'agility':
        this.agility += potion.value;
        break;
      case 'health':
        this.health += potion.value;
        break;
      case 'strength':
        this.strength += potion.value;
        break;
    }
  }
}






module.exports = Player;