// imported libraries 
const prompt = require("prompt-sync")();

// level information that we will give to the main game runner
var leveldata = {}; 
var input = "";
const Sequence1 = () => {
    input = prompt("What is your name? ");

    console.log(`Oh, so your name is ${input}`);
    leveldata["username"] = input;
    input = prompt("What did you do to get put in here?\n\t 1:I attempted to kill the prince on Demacia\n\t 2:I got into a bar fight with a Vastaya from Ionia\n");
    if (input = 1){
        Sequence1_1();
    }
};
const Sequence1_1 = () => {
    input = prompt("Attempted, you say? What are you, some kind of mage?");

};
Sequence1();