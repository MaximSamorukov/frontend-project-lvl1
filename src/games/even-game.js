import readlineSync from 'readline-sync';
import {
  greeting, question, answerValidation, createNumber, isGameAllowed, isEven, game
} from '../index.js';

const theQuestion = (name, stepNumber) => {
  const theNumber = createNumber(30);
  const correctAnswer = isEven(theNumber);
  const questionPhrase = `${theNumber}`;
  const userAnswer = question(questionPhrase, correctAnswer);
  const validation = answerValidation(correctAnswer, userAnswer, name, stepNumber);
  return validation;
};

// export default function evenGame() {
//   // const game = readlineSync.question('May I have your name?: ');
//   // console.log(game);
//   let step = 1;
//   const gameAllowance = isGameAllowed();
//   const userName = greeting() ?? 'Mr';
//   const firstPhrase = 'Answer "yes" if the number is even, otherwise answer "no".';
//   console.log(firstPhrase);
//   while (gameAllowance()) {
//     if (!theQuestion(userName, step)) {
//       gameAllowance(false);
//     }
//     step += 1;
//   }
// }

export default function evenGame() {
  const firstPhrase = 'Answer "yes" if the number is even, otherwise answer "no".';
  game(isGameAllowed, greeting, firstPhrase, theQuestion);
}