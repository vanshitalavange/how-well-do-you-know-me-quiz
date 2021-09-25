var chalk = require("chalk");
var readlineSync = require("readline-sync");

var playerName = readlineSync.keyInYN("What is your name? ");
console.log("------------------------------------------------------");
console.log(
  chalk.yellow(
    "Welcome ",
    playerName + "!",
    "Let's see how well do you know VANSHITA"
  )
);
console.log("------------------------------------------------------");

var qNa = [
  {
    question: "Which is my birthday month? ",
    answer: "December",
  },
  {
    question: "Which is my favorite cuisine? ",
    answer: "Chinese",
  },
  {
    question: "Who is my childhood bestfriend? ",
    answer: "Bhavika",
  },
  {
    question: "Do I have a brother or sister? ",
    answer: "brother",
  },
  {
    question: "Which messaging app I use the most? ",
    answer: "Whatsapp",
  },
  {
    question: "What do I prefer doing in free time? ",
    answer: "Sleeping",
  },
  {
    question: "Who do I love more? Dogs or Cats ",
    answer: "Cats",
  },
  {
    question: "Which is my favourite movie? ",
    answer: "Stuart little",
  },
  {
    question: "Which is my favourite sport? ",
    answer: "Badminton",
  },
  {
    question: "What is my zodiac sign? ",
    answer: "Capricorn",
  },
];

var score = 0;

function validateAnswer(quizQues) {
  var playerAnswer = readlineSync.keyInYN(quizQues.question);
  if (playerAnswer.toUpperCase() === quizQues.answer.toUpperCase()) {
    console.log(chalk.green("Yippe!! Your answer is CORRECT."));
    score = score + 1;
    console.log("Your Current Score :", score);
  } else {
    console.log(chalk.red("Oops!! Your answer is WRONG."));
    console.log("The correct answer is", chalk.green(quizQues.answer));
    console.log("Your Current Score :", score);
  }
}

for (var i = 0; i < QnA.length; i = i + 1) {
  var quizQuestion = QnA[i];
  validateAnswer(quizQuestion);
  console.log("------------------------------------------------------");
}

console.log(chalk.yellow("THANK YOU FOR TAKING THE QUIZ!"));
