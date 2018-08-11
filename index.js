var Word = require("./Word");
var inquirer = require('inquirer');
var guessesLeft = 10;
var potentialWords = ["hoverboard","biff","marty","doc","delorean","flux capacitor"];
var randomGuess;
var pickedWord;

//get random word from word array and make object function
function makeWordObject() {
    randomGuess = potentialWords[Math.floor(Math.random() * potentialWords.length)];
    pickedWord = new Word(randomGuess);
    console.log(pickedWord.word);
    pickedWord.makeObjectArray();
}

//get word
makeWordObject();

//function to ask questions
function question() {

    //print guesses left
    console.log("-------------------------\nNumber of guesses left: " + guessesLeft);
    
    //print word with guessed letters
    pickedWord.printWord();

    if (pickedWord.word.indexOf("_") > -1) {
        console.log("You've Guessed all of the Letters!");
        makeWordObject();
        question();
    } else {
        //prompt question
        inquirer.prompt([
            {
                type: "input",
                message: "What Letter do you guess?",
                name: "letter"
            }
        ]).then(function(inquirerResponse) {
            
            if (pickedWord.word.indexOf(inquirerResponse.letter) > -1) {
                console.log("Letter " + inquirerResponse.letter + " is in the word.")
                pickedWord.updateCheck(inquirerResponse.letter);
            } else {
                console.log("Letter " + inquirerResponse.letter + " is not in the word.")
                guessesLeft--;
            }
            if (guessesLeft !== 0) {
                question();
            } else {
                console.log("-------------------------\nYou've run out of guesses.");
                guessesLeft = 10;
                makeWordObject();
                question();
            }
            
        });
    }

}
question();
// var happy = new Word("happy birthday");
// happy.makeObjectArray();
// happy.updateCheck("a");
// happy.printWord();
// happy.updateCheck("p");
// happy.printWord();