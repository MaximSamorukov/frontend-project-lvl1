import readlineSync from 'readline-sync';

export function greeting() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}`);
  return name;
}

export function question(phrase) {
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

export function gcd(num1, num2) {
  let innerNum1 = num1;
  let innerNum2 = num2;
  innerNum1 = Math.abs(innerNum1);
  innerNum2 = Math.abs(innerNum2);
  while (innerNum2) {
    const t = innerNum2;
    innerNum2 = innerNum1 % innerNum2;
    innerNum1 = t;
  }
  return innerNum1;
}

export function game(isGameAllowedFunc, greetingFunc, firstPhrase, theQuestion) {
  // const game = readlineSync.question('May I have your name?: ');
  // console.log(game);
  let step = 1;
  const gameAllowance = isGameAllowedFunc();
  const userName = greetingFunc() ?? 'Mr';
  console.log(firstPhrase);
  while (gameAllowance()) {
    if (!theQuestion(userName, step)) {
      gameAllowance(false);
    }
    step += 1;
  }
}
