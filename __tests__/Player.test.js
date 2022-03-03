const Player = require('../lib/Player');
const Potion = require('../lib/Potion'); // imports Potion() contructor to the test

jest.mock('../lib/Potion'); //replaces constructor's implementation with mock data

//console.log(new Potion());

test('creates a player object', ()=> {
  const player = new Player('Dave');

  expect(player.name).toBe('Dave');
  expect(player.health).toEqual(expect.any(Number));
  expect(player.strength).toEqual(expect.any(Number));
  expect(player.agility).toEqual(expect.any(Number));
  expect(player.inventory).toEqual(
    expect.arrayContaining([expect.any(Object)])
  );
});

// test for getStats() 
test("get's player stats as an object", () => {
  const player = new Player('Dave');

  expect(player.getStats()).toHaveProperty('potions');
  expect(player.getStats()).toHaveProperty('health');
  expect(player.getStats()).toHaveProperty('strength');
  expect(player.getStats()).toHaveProperty('agility');
});

// test getInventory()
test('gets inventory from player or returns false', () => {
  const player = new Player('Dave');

  expect(player.inventory()).toEqual(expect.any(Array));
  player.inventory = [];
  expect(player.getInventory()).toEqual(false);

})