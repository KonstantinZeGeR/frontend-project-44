import readlineSync from "readline-sync";
import { greetUser } from "../src/cli.js";

const isEven = (number) => number % 2 === 0;

const askQuestion = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  console.log(`Question: ${number}`);
  return number;
};

export const playEvenGame = () => {
  const userName = greetUser();
  console.log('Answer "yes if the number is even, otherwise answer "no".');

  const neededCorrectAnswers = 3;
  let correctAnswersCount = 0;

  while (correctAnswersCount < neededCorrectAnswers) {
    const number = askQuestion();
    const correctAnswer = isEven(number) ? "yes" : "no";
    const userAnswer = readlineSync.question("Your answer: ");

    if (userAnswer === correctAnswer) {
      console.log("Correct!");
      correctAnswersCount += 1;
    } else {
      console.log(
        `${userName} is wrong answer. Correct answer was ${correctAnswer}.`
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations ${userName}!`);
};
