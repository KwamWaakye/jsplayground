import { Sequence1, Sequence2 } from "./levels/index.js";
const runGame = async () => {
  const MyPlayer = await Sequence1();
  Sequence2(MyPlayer);
  console.log("\n\n\n", MyPlayer.characterInfo());
  //console.log(MyPlayer.calculateAttackPower());
};

runGame();
