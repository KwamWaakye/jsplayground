import { Sequence1 } from "./levels/levelone.js";
const runGame = async () => {
  const MyPlayer = await Sequence1();
  console.log("\n\n\n", MyPlayer.characterInfo());
  //console.log(MyPlayer.calculateAttackPower());
};

runGame();
