//Letter Constructor Function
var Letter = function(character) {
    this.character = character;
    this.shownLetter = "_";
    this.guessed = false;
    this.show = function() {
        if (this.character === " ") {
            // console.log(" ");
            this.shownLetter = " ";
        } else if (this.guessed) {
            // console.log(this.character);
            this.shownLetter = this.character;
        } else {
            // console.log("_");
            this.shownLetter = "_";
        }
    }
}

//Exports Letter Constructor Function
module.exports = Letter;