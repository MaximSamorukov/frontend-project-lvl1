import readlineSync from 'readline-sync';
import {
  greeting, question, answerValidation, createNumber, isGameAllowed, gcd, game,
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
  const firstPhrase = 'Find the greatest common divisor of given numbers.';
  game(isGameAllowed, greeting, firstPhrase, theQuestion);
}
