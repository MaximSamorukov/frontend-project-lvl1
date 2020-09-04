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
  let validVerdict = true;
  const innerFunction = (valid = true) => {
    if (valid === false || stepsNumber < 1) {
      validVerdict = false;
    }
    stepsNumber -= 1;
    return validVerdict;
  };
  return innerFunction;
}

export function isEven(num) {
  const answer = num % 2 === 0 ? 'yes' : 'no';
  return answer;
}

export function answerValidation(correctAnswer, userAnswer, name, step) {
  const ifCorrect = correctAnswer === userAnswer;
  let validationVerdict = step === 3 ? `Correct!\nCongratulations, ${name}` : 'Correct!';

  if (!ifCorrect) {
    validationVerdict = `${userAnswer} is wrong answer ;(. Correct answer was "${correctAnswer}"\nLet's try again, ${name}`;
  }
  console.log(validationVerdict);
  let returnValue = true;
  if (validationVerdict !== 'Correct!') {
    returnValue = false;
  }
  return returnValue;
}