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

export function makeProgression() {
  let array = Array(10);
  const firstNumber = createNumber(10);
  const step = createNumber(10);
  for (let i = 0; i <= 9; i += 1) {
    array[i] = firstNumber;
  }
  array = array.map((item, i) => (item + i * step));
  return array;
}

export function progressionAsString(array, item) {
  const [...newArray] = [...array];
  newArray[item] = '..';
  const string = newArray.join(' ');
  return string;
}

export function isPrime(num) {
  let returnAnswer = 'yes';
  if (num < 2) {
    returnAnswer = 'no';
  }
  const m = Math.sqrt(num);
  for (let i = 2; i <= m; i += 1) {
    if (num % i === 0) {
      returnAnswer = 'no';
    }
  }
  return returnAnswer;
}
