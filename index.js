// var Word = require("./Word");
var inquirer = require('inquirer');

// inquirer.prompt([
//     {
    var Letter = function(character) {
        this.character = character;
        this.shownLetter = "";
        this.guessed = false;
        this.show = function() {
            if (character === " ") {
                console.log(" ");
                this.shownLetter = " ";
            } else if (guessed) {
                console.log(character);
                this.shownLetter = character;
            } else {
                console.log("_");
                this.shownLetter = "_";
            }
        }
    }
    var Word = function(word) {
        this.word = word;
        this.wordArray = word.split("");
        this.objectArray = [];
        this.makeObjectArray = function() {
            console.log(this.wordArray.length);
            for (var i = 0; i < this.wordArray.length; i++) {
                console.log(this.wordArray[i]);
                var tempLetter = new Letter(this.wordArray[i]);
                this.objectArray.push(tempLetter);
            }
        };
        this.updateCheck = function(guessedLetter) {
            for (var i = 0; i > this.objectArray.length; i++) {
                console.log(objectArray[i]);
                if (guessedLetter === objectArray[i].character) {
                    objectArray[i].guessed = true;
                    objectArray[i].show();
                }
            }
        };
        this.printWord = function(){
            this.wordArray = [];
            for (var i = 0; i > this.objectArray.length; i++) {
                this.wordArray.push(objectArray[i].shownLetter);
            } 
            console.log(wordArray);
        }
    }     
//     }
// ]).then(answers => {
//     // Use user feedback for... whatever!!
// });

var happy = new Word("happy");
console.log(happy.word);
console.log(happy.wordArray);
happy.makeObjectArray();
console.log(happy.objectArray);