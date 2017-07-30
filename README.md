# Bulls and Cows Utility

Bulls and Cows game solver utility. Guesses a 4 digit number randomly for now.

## Getting Started

To install and this library make sure you have NodeJS and run:

1. `npm install bulls and cows`
2. Then you can require the library: `var GameSolver = require('bulls-and-cows').GameSolver;`
3. GameSolver is a class and each instance holds 1 game history, so you need to create an instance of the class `var gs = new GameSolver();`
4. To get a guess from the library call the method `makeRandomGuess()`
5. You can update the number of Bulls and Cows, but the library actually does not use these values

### Prerequisites

1. NodeJS

### Installing

To get a development copy clone this repo and run `npm install / yarn` inside the folder

## Running the tests

The test are written using Jest.

To test the code run `npm test`

## Contributing

I would love to discuss how to add new solution methods to this package.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details