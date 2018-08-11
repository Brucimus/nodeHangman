var Letter = require("./Letter");

var Word = function(word) {
    this.word = word;
    this.wordArray = word.split("");
    this.objectArray = [];
    this.makeObjectArray = function() {
        for (var i = 0; i < this.wordArray.length; i++) {
            var tempLetter = new Letter(this.wordArray[i]);
            this.objectArray.push(tempLetter);
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
    }
}

module.exports = Word;