class Player {
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.maxHealth = 90 + this.level * 10;
    this.currentHealth = 100;
    this.AP = -3 + this.level * 3;
    this.AD = 7 + this.level * 5;
    this.items = {};
    this.spells = {};
  }

  characterInfo() {
    const info = `Character Info:
      Name: ${this.name}
      Health: ${this.calculateHP()}
      Ability Power: ${this.calculateAbilityPower()}
      Attack Power: ${this.calculateAttackPower()}
      Items: ${JSON.stringify(this.items)}
      Spells: ${JSON.stringify(this.spells)}`;

    return info;
  }

  calculateAttackPower() {
    let totalAttackPower = this.AD;
    for (const itemName in this.items) {
      if (this.items.hasOwnProperty(itemName)) {
        const item = this.items[itemName];
        if (item.ADMod) {
          totalAttackPower += item.ADMod;
        }
      }
    }
    return totalAttackPower;
  }

  calculateAbilityPower() {
    let totalAbilityPower = this.AP;
    for (const itemName in this.items) {
      if (this.items.hasOwnProperty(itemName)) {
        const item = this.items[itemName];
        if (item.APMod) {
          totalAbilityPower += item.APMod;
        }
      }
    }
    return totalAbilityPower;
  }

  calculateHP() {
    let totalHP = this.maxHealth;
    for (const itemName in this.items) {
      if (this.items.hasOwnProperty(itemName)) {
        const item = this.items[itemName];
        if (item.HPMod) {
          totalHP += item.HPMod;
        }
      }
    }
    return totalHP;
  }

  modifyHealth(modifier) {
    this.currentHealth += modifier;
  }

  listSpells() {
    const spellNames = Object.keys(this.spells);
    console.log("Spells:");
    spellNames.forEach((spellName) => {
      console.log(spellName);
    });
  }

  modifyAbilityPower(modifier) {
    this.abilityPower += modifier;
  }

  addItem(item) {
    this.items[item.name] = item;
  }
}

export default Player;
