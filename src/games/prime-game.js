import {
  greeting, question, answerValidation, createNumber, isGameAllowed, game, isPrime,
} from '../index.js';

const theQuestion = (name, stepNumber) => {
  const number = createNumber(10000);
  const correctAnswer = isPrime(number);
  const questionPhrase = `${number}`;
  const userAnswer = question(questionPhrase);
  const validation = answerValidation(correctAnswer, userAnswer, name, stepNumber);
  return validation;
};

export default function primeGame() {
  const firstPhrase = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  game(isGameAllowed, greeting, firstPhrase, theQuestion);
}
