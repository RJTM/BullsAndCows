const GameSolver = require('./index.js').GameSolver;
const gs = new GameSolver();

test('getRandomNumber should return a number with x digits', () => {
    expect(gs.getRandomNumber(2).toString()).toHaveLength(2);
    expect(gs.getRandomNumber(4).toString()).toHaveLength(4);
    expect(gs.getRandomNumber(9).toString()).toHaveLength(9);
});

test('allUniqueDigits should return true for number with unique digits and false otherwise', () => {
    expect(gs.allUniqueDigits(1234)).toBeTruthy();
    expect(gs.allUniqueDigits(9876)).toBeTruthy();
    expect(gs.allUniqueDigits(1)).toBeTruthy();
    expect(gs.allUniqueDigits(1111)).toBeFalsy();
});

test('makeRandomGuess should return 4 digit numbers with unique digits', () => {
    const guessOne = gs.makeRandomGuess();
    const guessTwo = gs.makeRandomGuess();
    expect(guessOne.toString()).toHaveLength(4);
    expect(gs.allUniqueDigits(guessTwo)).toBeTruthy();
    expect(gs.guesses).toEqual([guessOne, guessTwo]);
});

test('updateCowsAndBulls should update', () => {
    gs.updateCowsAndBulls(0,0);
    expect(gs.cows).toEqual(0);
    expect(gs.bulls).toEqual(0);
    gs.updateCowsAndBulls(2,1);
    expect(gs.cows).toEqual(2);
    expect(gs.bulls).toEqual(1);
    gs.updateCowsAndBulls(0,0);
});

test('makeRandomGuess should eventually guess the value', () => {
    const secretNumber = 4789;
    const secretNumberAsString = secretNumber.toString();
    let guess;
    do {
        guess = gs.makeRandomGuess();
        let cows = 0, bulls = 0;
        const guessAsString = guess.toString();
        for(let i=0; i<4; i++) {
            const index = guessAsString.indexOf(secretNumberAsString[i]);

            if (index == i) {
                bulls++;
            } else if(index != -1) {
                cows++;
            }
        }
        gs.updateCowsAndBulls(cows, bulls);
    } while(guess != secretNumber);

    expect(guess).toEqual(secretNumber);
    console.log(gs.guesses.length);
});