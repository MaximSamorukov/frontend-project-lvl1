import {
  greeting, question, answerValidation, createNumber, isGameAllowed, game, makeProgression,
  progressionAsString,
} from '../index.js';

const theQuestion = (name, stepNumber) => {
  const progression = makeProgression(10);
  const arrayItem = createNumber(9);
  const correctAnswer = progression[arrayItem];
  const questionPhrase = progressionAsString(progression, arrayItem);
  const userAnswer = parseInt(question(questionPhrase), 10);
  const validation = answerValidation(correctAnswer, userAnswer, name, stepNumber);
  return validation;
};

export default function progressionGame() {
  const firstPhrase = 'What number is missing in the progression?';
  game(isGameAllowed, greeting, firstPhrase, theQuestion);
}
