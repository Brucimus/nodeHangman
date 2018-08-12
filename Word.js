//Imports Letter Constructor Function
var Letter = require("./Letter");

//Word Constructor Function
var Word = function(word) {
    this.word = word;
    this.wordArray = word.split("");
    this.objectArray = [];
    this.displayedWord = "";
    this.makeObjectArray = function() {
        for (var i = 0; i < this.wordArray.length; i++) {
            var tempLetter = new Letter(this.wordArray[i]);
            this.objectArray.push(tempLetter);
            this.objectArray[i].show();
        }
    };
    this.updateCheck = function(guessedLetter) {
        for (var i = 0; i < this.objectArray.length; i++) {
            // console.log(this.objectArray[i]);
            if (guessedLetter === this.objectArray[i].character) {
                this.objectArray[i].guessed = true;
                // console.log(this.objectArray[i].character)
                this.objectArray[i].show();
            }
        }
    };
    this.printWord = function(){
        this.wordArray = [];
        for (var i = 0; i < this.objectArray.length; i++) {
            this.wordArray.push(this.objectArray[i].shownLetter);
        } 
        console.log(this.wordArray.join(" "));
        this.displayedWord = this.wordArray.join(" ");
    }
}

//Export Word Constructor Function
module.exports = Word;