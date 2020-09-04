import {
  greeting, question, answerValidation, createNumber, isGameAllowed, game,
} from '../index.js';

const theQuestion = (name, stepNumber) => {
  const firstNumber = createNumber(30);
  const secondNumber = createNumber(30);
  const operation = createNumber(2);
  const operations = [
    (a, b) => a + b,
    (a, b) => a - b,
    (a, b) => a * b,
  ];
  const operationSigns = ['+', '-', '*'];
  const correctAnswer = operations[operation](firstNumber, secondNumber);
  const questionPhrase = `${firstNumber} ${operationSigns[operation]} ${secondNumber}`;
  const userAnswer = parseInt(question(questionPhrase), 10);
  const validation = answerValidation(correctAnswer, userAnswer, name, stepNumber);
  return validation;
};

export default function calcGame() {
  const firstPhrase = 'What is the result of the expression?';
  game(isGameAllowed, greeting, firstPhrase, theQuestion);
}
