import { getRandomNumber } from '../utils.js';

const description = 'What number is missing in the progression?';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const generateRound = () => {
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const length = 10;
  const progression = generateProgression(start, step, length);
  const hiddenElementIndex = getRandomNumber(0, length - 1);
  const correctAnswer = progression[hiddenElementIndex].toString();
  progression[hiddenElementIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export { description, generateRound };