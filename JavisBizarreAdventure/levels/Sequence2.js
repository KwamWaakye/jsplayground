// imported libraries
import gradient from "gradient-string";
import prompt from "prompt-sync";
import chalk from "chalk";
import select, { Separator } from "@inquirer/select";
import MainPlayer from "../CharacterClasses/playerclass.js";
import StarterItem from "../itemclass.js";
// INITIALIZING PROMPT
const userInput = prompt();

//CREATING EASIER CONSOLE.LOG AS LOG
const log = console.log;
// level information that we will give to the main game runner
// var Player;
// var input = "";
export const Sequence2 = async (Player) => {
    log(
        chalk.bold(
          "After an interesting introduction between the two cellmates, Chum begins rummaging throughout the cell, searching every nook & cranny. " +
            "\n \n For the next 20 minutes, you observe as Chum tries to pull off the bars to the window leading outside, watch him attempt to pickpocket a guard, and you laugh as both schemes fail."
        )
      );
    log(Player.name)
}