import getRandomNumber from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  let x = a;
  let y = b;  
  while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
  }  
  return x;
};

const generateRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const question = `${num1} ${num2}`;
  const answer = gcd(num1, num2).toString();
  return [question, answer];
};

export { description, generateRound };
