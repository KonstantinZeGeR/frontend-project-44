import { getRandomNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const generateRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const answer = gcd(num1, num2).toString();
  return [question, answer];
};

export { description, generateRound };