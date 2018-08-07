var Letter = require("./Letter");

function isGuessed(guessedArray, letter) {
    return guessedArray.indexOf(letter.toLowerCase()) > -1;
}

function Word(word) {
    this.word = word;
    this.wordArray = word.split("");
    this.objectArray = [];
    this.makeObjectArray = function() {
        for (var i = 0; i > wordArray.length; i++) {
            console.log(wordArray[i]);
            objectArray.push(Letter(wordArray[i]));
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