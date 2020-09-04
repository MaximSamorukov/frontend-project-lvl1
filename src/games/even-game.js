import readlineSync from 'readline-sync';

const createNumber = () => Math.ceil(Math.random() * 100);
function isEven(num) {
  const answer = num % 2 === 0 ? 'yes' : 'no';
  return answer;
}
function reaction(number, userAnswer, userName, length) {
  let returnAnswer = 'Correct!';
  const isUserCorrect = isEven(number) === userAnswer;
  if (!isUserCorrect) {
    returnAnswer = `${userAnswer} is wrong answer ;(. Correct answer was "${isEven(number)}".\nLet's try again, ${userName}!`;
  }
  if (isUserCorrect && length === 0) {
    returnAnswer = `${returnAnswer}\nCongratulations, ${userName}!`;
  }
  return returnAnswer;
}
export default function evenGame() {
  let gameLength = 3;
  let name = '';

  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (gameLength > 0) {
    gameLength -= 1;
    const number = createNumber();
    const answer = readlineSync.question(`Question: ${number} `);
    const answerToUser = reaction(number, answer, name, gameLength);
    if (answerToUser.slice(0, 8) !== 'Correct!') {
      gameLength = 0;
    }
    console.log(answerToUser);
  }
}
