import {
  greeting, question, answerValidation, createNumber, isGameAllowed, isEven, game,
} from '../index.js';

const theQuestion = (name, stepNumber) => {
  const theNumber = createNumber(30);
  const correctAnswer = isEven(theNumber);
  const questionPhrase = `${theNumber}`;
  const userAnswer = question(questionPhrase);
  const validation = answerValidation(correctAnswer, userAnswer, name, stepNumber);
  return validation;
};

export default function evenGame() {
  const firstPhrase = 'Answer "yes" if the number is even, otherwise answer "no".';
  game(isGameAllowed, greeting, firstPhrase, theQuestion);
}
