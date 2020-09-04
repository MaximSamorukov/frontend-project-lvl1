import readlineSync from 'readline-sync';
import {
  greeting, question, answerValidation, createNumber, isGameAllowed, gcd,
} from '../index.js';

const theQuestion = (name, stepNumber) => {
  const firstNumber = createNumber(30);
  const secondNumber = createNumber(30);
  const correctAnswer = gcd(firstNumber, secondNumber);
  const questionPhrase = `${firstNumber} ${secondNumber}`;
  const userAnswer = parseInt(question(questionPhrase, correctAnswer), 10);
  const validation = answerValidation(correctAnswer, userAnswer, name, stepNumber);
  return validation;
};

export default function gcdGame() {
  // const game = readlineSync.question('May I have your name?: ');
  // console.log(game);
  let step = 1;
  const gameAllowance = isGameAllowed();
  const userName = greeting() ?? 'Mr';
  const firstPhrase = 'Find the greatest common divisor of given numbers.';
  console.log(firstPhrase);
  while (gameAllowance()) {
    if (!theQuestion(userName, step)) {
      gameAllowance(false);
    }
    step += 1;
  }
}
