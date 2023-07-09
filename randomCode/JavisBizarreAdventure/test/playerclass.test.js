import Player from "../CharacterClasses/playerclass.js";

describe("Player", () => {
  test("characterInfo returns the correct string", () => {
    const player = new Player("John");
    player.modifyHealth(10);
    const info = player.characterInfo();
    expect(info).toContain("Name: John");
    expect(info).toContain("Health: 110");
  });

  test("addItem correctly adds an item to the player", () => {
    const player = new Player("John");
    const item = { name: "Sword", attackDamage: 10 };
    player.addItem(item);
    expect(player.items["Sword"]).toEqual(item);
  });
});
