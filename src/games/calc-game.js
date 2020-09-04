import readlineSync from 'readline-sync';
import {
  greeting, question, answerValidation, createNumber, isGameAllowed,
} from '../index.js';

const theQuestion = (name) => {
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
  const userAnswer = parseInt(question(questionPhrase, correctAnswer), 10);
  const validation = answerValidation(correctAnswer, userAnswer, name);
};

export default function calcGame() {
  // const game = readlineSync.question('May I have your name?: ');
  // console.log(game);
  const gameAllowance = isGameAllowed();
  const userName = greeting() ?? 'Mr';
  const firstPhrase = 'What is the result of the expression?';
  console.log(firstPhrase);
  while (gameAllowance()) {
    theQuestion(userName);
  }
}
