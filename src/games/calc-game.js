import getRandomNumber from '../utils.js';

const operators = ['+', '-', '*'];

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const description = 'What is the result of the expression?';

const generateRound = () => {
  const a = getRandomNumber(1, 10);
  const b = getRandomNumber(1, 10);
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${a} ${operator} ${b}`;
  const correctAnswer = String(calculate(a, b, operator));
  return [question, correctAnswer];
};

export { description, generateRound };
