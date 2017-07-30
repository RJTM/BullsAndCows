const _ = require('lodash');

class GameSolver {

    constructor() {
        this.cows = 0;
        this.bulls = 0;
        this.guesses = [];
    }

    allUniqueDigits(number) {
        let numberAsAString = number.toString();
        let numberAsASet = new Set(numberAsAString.split(""));
        return numberAsASet.size === numberAsAString.length;
    }

    getRandomNumber(digits) {
        let min = "", max = "";
        for(let i=1, j=9;i<=digits;i++,j--) {
            min += i;
            max += j;
        }
        return _.random(min, max);
    }

    makeRandomGuess() {
        let guess;
        do {
            guess = this.getRandomNumber(4);
        } while(!this.allUniqueDigits(guess) || this.guesses.indexOf(guess) != -1);
        this.guesses.push(guess);
        return guess;
    }

    updateCowsAndBulls(cows, bulls) {
        this.cows = cows;
        this.bulls = bulls;
    }
};

module.exports = { GameSolver };