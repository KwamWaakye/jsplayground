// imported libraries 
import gradient from "gradient-string";
import prompt from "prompt-sync";
import chalk from 'chalk';
import select, { Separator } from '@inquirer/select'; 
// INITIALIZING PROMPT 
const userInput = prompt();

//CREATING EASIER CONSOLE.LOG AS LOG
const log = console.log;
// level information that we will give to the main game runner
var leveldata = {}; 
var input = "";
export const Sequence1 = async () => {
    log(chalk.bold.blue("What is your name?"))
    input = userInput(">>> ");

    log(`Oh, so your name is ${input}`);
    leveldata["username"] = input;
    const answer = await select({
        message: "What did you do to get put in here?",
        choices: [
          {
            value: 1,
            name: "I attempted to kill my bot lane for inting",
            description: 'attempted murder was the case they gave me',
          },
          {
            value: 2,
            name: 'I got into a bar fight with Kwame because he said my Garen SUCKS',
            description: 'ackshually my Garen goated',
          },
        ],
      });
// log("What did you do to get put in here? \n\t 1:I attempted to kill my bot lane for inting\n\t 2:I got into a bar fight with Kwame because he said my Garen lackin'\n");
// input = userInput(">>> ")
    if (answer == 1){
        Sequence1_1();
    }
};
const Sequence1_1 = () => {
    log("Attempted, what? Are you alright in the head?");
    log(gradient("red", "yellow")("You have received MIDLANERS ANGUISH"))
};
const Sequence1_2 = () => {
    log("You fought him over what? Perhaps you need some grass to touch!");
    log
};