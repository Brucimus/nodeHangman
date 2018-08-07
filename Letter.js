function Letter(character) {
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