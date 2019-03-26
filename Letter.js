var inquirer = require("inquirer")

function letter(letter) {
    this.letter = letter
    this.guessletter = false;

    this.inputletter = function(){
        if (this.letter = true) {
            return "_";
        }
        else if(this.letter = false){
            return this.letter;
        }

        
    }

    this.guess = function(){
        if(this.guessletter = true) {
            return this.guessletter;
        }
    }

}

module.exports = letter;
