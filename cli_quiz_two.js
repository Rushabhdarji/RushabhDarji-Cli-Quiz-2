//Quiz app with options

//initializing the npm
var readlineSync = require('readline-sync');
const chalk = require('chalk');
//Global variable score
var score = 0;
//user input and welcoming user
var welcomeUser = readlineSync.question("What's your name? ");
console.log(chalk`Welcome! {cyanBright ${welcomeUser}} to the game`);
//Welcome to the Quiz on cricket
console.log("-------------------------------------------");
console.log(chalk.bgBlueBright("Welcome to the Quiz on Cricket"));
var questionsAndAnswers = [
  {
    question: "1. Fastest To Score 12000 ODI Runs? \n a: Sachin Tendulkar\n b: Rahul Dravid\n c: MS Dhoni\n d: Virat Kohli ",
    answer: "d",
    
  },
  {
    question: "2. First Indian to Score a hundred in all 3 formats? \n a: Suresh Raina\n b: Rohit Sharma\n c: MS Dhoni\n d: Virat Kohli ",
    answer: "a",
    
  },
  {
    question: "3. Only indian opener to score 5 hundreds in WC'19? \n a: Shikar Dhawan\n b: Rohit Sharma\n c: MS Dhoni\n d: Virat Kohli ",
    answer: "b",
    
  },
  {
    question: "4. Fastest to 1000 ODI Runs for India? \n a: Hardik Pandya\n b: Kedar Jadhav\n c: MS Dhoni\n d: Virat Kohli ",
    answer: "a",
    
  },
  {
    question: "5. Only player to average 50+ in all 3 formats?\n a: Sachin Tendulkar\n b: Rohit Sharma\n c: MS Dhoni\n d: Virat Kohli ",
    answer: "d",
    
  }
];


function play(question, answer){
  var userAnswer = readlineSync.question(question);

  //branching
  if(userAnswer === answer){
    console.log(chalk.greenBright("You're right! :)"));
    score = score + 1;
  }else{
    console.log(chalk.redBright("You're wrong! :("));
  }
}

 for(var i = 0; i<questionsAndAnswers.length; i=i+1){
    play(questionsAndAnswers[i].question, questionsAndAnswers[i].answer);
 }
 console.log(chalk`{cyanBright ${welcomeUser} } {yellowBright your score is:} {cyanBright ${score}} `);