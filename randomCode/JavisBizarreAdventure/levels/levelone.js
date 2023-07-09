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
var Player;
var input = "";
export const Sequence1 = async () => {
  log(
    chalk.bold(
      "..You wake up in a dusty dungeon, water drips on your head as you grogily awake..." +
        "\n \n A chum fellow in your cell comes over to you..."
    )
  );

  log(chalk.bold.blue("Chum: What is your name?"));
  input = userInput(">>> ");

  log(`Chum: Oh, so your name is ${input}`);
  Player = new MainPlayer(input);
  const answer = await select({
    message: chalk.bold.blue("Chum: What did you do to get put in here?"),
    choices: [
      {
        value: 1,
        name: "I attempted to cast a spell to kill (in game) my bot lane for inting",
        description: "attempted murder was the case they gave me",
      },
      {
        value: 2,
        name: "I got into a fist fight with Kwame because he said my Garen SUCKS",
        description: "ackshually my Garen goated",
      },
    ],
  });
  if (answer == 1) {
    await Sequence1_1();
  } else if (answer == 2) {
    await Sequence1_2();
  }
  return Player;
};
const Sequence1_1 = async () => {
  const ans = await select({
    message: chalk.bold.blue(
      "Chum: Attempted, what? Are you alright in the head? \n"
    ),
    choices: [
      {
        value: 1,
        name: "TRUST ME YOU AINT SEEN THIS BOT LANE",
      },
      {
        value: 1,
        name: "Yeah I guess ur not wrong, should've focused on my own gameplay",
      },
      {
        value: 2,
        name: "You wanna go old man??",
      },
    ],
  });
  //second statement
  if (ans == 1) {
    log(
      chalk.bold.blue(
        "Chum: ... Well either way, not too safe a place we'in me boy, you might need this... \n"
      )
    );
  } else {
    log(
      chalk.bold.blue(
        "Chum: Settle down lad, don't get your panties in a bundle...  \n" +
          "You might need this by the way..."
      )
    );
  }
  //get ur item!
  log(gradient("red", "yellow")("You have received MIDLANERS ANGUISH!"));
  Player.addItem(
    new StarterItem({
      name: "MIDLANERS ANGUISH",
      description:
        "A brownish pendant with a line through the middle... looks quite sad actually",
      HPMod: 10,
      ADMod: 0,
      APMod: 5,
    })
  );
  //loggin the description!
  log(
    chalk.italic(
      "A pretty pendant with a line through the middle... looks quite sad actually"
    )
  );
};

const Sequence1_2 = async () => {
  const ans = await select({
    message: chalk.bold.blue(
      "Chum: You fought him over what? Perhaps you need some grass to touch! \n"
    ),
    choices: [
      {
        value: 1,
        name: "Proc Sheen",
      },
      {
        value: 1,
        name: "What's Grass?",
      },
      {
        value: 2,
        name: "You wanna go old man??",
      },
    ],
  });
  //response from chum
  if (ans == 1) {
    log(
      chalk.bold.blue(
        "Chum: ... Well either way, not too safe a place we'in me boy, you might need this... \n"
      )
    );
  } else {
    log(
      chalk.bold.blue(
        "Chum: Settle down lad, don't get your panties in a bundle...  \n" +
          "You might need this by the way..."
      )
    );
  }
  log(gradient("white", "green")("You have received OLD WEEDING GLOVES!"));
  Player.addItem(
    new StarterItem({
      name: "OLD WEEDING GLOVES",
      description:
        "An old pair of weeding gloves, quite itchy to wear in fact.",
      HPMod: 10,
      ADMod: 7,
      APMod: 0,
    })
  );
  log(
    chalk.italic("An old pair of weeding gloves, quite itchy to wear in fact.")
  );
};
