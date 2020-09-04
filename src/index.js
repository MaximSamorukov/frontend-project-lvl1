import readlineSync from 'readline-sync';

export function index(message) {
  const game = readlineSync.question('May I have your name?: ');
  console.log(game);
  console.log(`message: ${message}`);
}

export function greeting() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);
  return name;
}

export function question(phrase, answer) {
  console.log(phrase);
  console.log(answer);
  console.log(`Question: ${phrase}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
}

export const createNumber = (num) => Math.ceil(Math.random() * num);

export function isGameAllowed() {
  let stepsNumber = 3;
  const innerFunction = (valid = true) => {
    let validVerdict = true;
    if (valid === false || stepsNumber < 1) {
      validVerdict = false;
    }
    stepsNumber -= 1;
    return validVerdict;
  };
  return innerFunction;
}

export function answerValidation(correctAnswer, userAnswer, name) {
  const ifCorrect = correctAnswer === userAnswer;
  let validationVerdict = 'Correct';
  if (!ifCorrect) {
    validationVerdict = `${userAnswer} is wrong answer ;(. Correct answer was "${correctAnswer}"\nLet's try again, ${name}`;
    isGameAllowed()(false);
  }
  console.log(validationVerdict);
  return validationVerdict;
}
