// imported libraries 
const prompt = require("prompt-sync")();
// level information that we will give to the main game runner
var leveldata = {}; 
var input = "";
const Sequence1 = () => {
    console.log("What is your name?")
    input = prompt(">>> ");

    console.log(`Oh, so your name is ${input}`);
    leveldata["username"] = input;
    console.log("What did you do to get put in here? \n\t 1:I attempted to kill my bot lane for inting\n\t 2:I got into a bar fight with Kwame because he said my Garen lackin'\n");
    input = prompt(">>> ")
    if (input == 1){
        Sequence1_1();
    }
};
const Sequence1_1 = () => {
    input = prompt("Attempted, what? Are you alright in the head?");

};
Sequence1();