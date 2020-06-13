

const questionText = document.querySelector(".question-text");
const optionBox = document.querySelector(".option-box");
const currentQuestionNum = document.querySelector(".current-question-num");
const answerDescription = document.querySelector(".answer-description");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const correctAnswers = document.querySelector(".correct-answers");
const seeResultBtn = document.querySelector(".see-result-btn");
const remainingTime = document.querySelector(".remaining-time");
const timeUpText = document.querySelector(".time-up-text");
const quizHomeBox = document.querySelector(".quiz-home-box");
const quizBox = document.querySelector(".quiz-box");
const quizOverBox = document.querySelector(".quiz-over-box");
const startAgainQuizBtn = document.querySelector(".start-again-quiz-btn");
const goHomeBtn = document.querySelector(".go-home-btn");
const startQuizBtn =document.querySelector(".start-quiz-btn");
let attempt = 0;
let questionIndex = 0;
let score = 0;
let number = 0;
let myArray=[];
let interval;

//These are the questions, answers , and their descriptions

myApp = [

  {
    question:" What man is the Acts of the Apostles addressed to?",
    options:["Theophilus" , "Timothy" , "Titus" , " Barnabas"],
    answer: 0,
    description: "Reference: Acts 1:1  ",
  },

  {
    question:"On what day did the apostles receive the Holy Spirit in Jerusalem? ",
    options:["Passover" , "Pentecost" , "Feast of tabernacles" , " Ascension"],
    answer: 1,
    description: "Reference: Acts 2:1",
  },

  {
    question:"What two apostles went to the temple at the ninth hour? ",
    options:["Peter and John" , "James and John" , "Paul and Silas" , " Ananias and Sapphira"],
    answer: 0,
    description: "Reference: At the hour of prayer, the ninth hour Acts 3:1",
  },
  {
    question:"The angel first appear to Moses as a flame of fire in a bush.",
    options:["True"  , " False"],
    answer: 0,
    description: "",
  },

  {
    question:" How many men heard and believed the word Peter and John taught?",
    options:["About 3,000" , "About 10,000" , "About 5,000" , " 2,000"],
    answer: 2,
    description: "Reference: Acts 4:4",
  },
  {
    question:"To whom did Ananias lie? ",
    options:["Paul" , "John" , "Holy Spirit and God" , " Peter"],
    answer: 2,
    description: "Reference: Acts 5:9",
  },

  {
    question:"Who was sold into Egypt as a slave by his brothers? ",
    options:["Benjamin" , "Joseph" , "Jacob" , " Jesus"],
    answer: 1,
    description: "Reference: Acts 7:9",
  },

  {
    question:" What man in Samaria used sorcery, astonished the people, and claimed he was someone great? ",
    options:["Simon" , "Judas" , "Agabus" , " Cornelius"],
    answer: 0,
    description: "Reference: Acts 8:9",
  },

  {
    question:"Where did Cornelius live? ",
    options:["Caesarea" , "Joppa" , "Jerusalem" , " Samaria"],
    answer: 0,
    description: "Reference: Acts 10:1",
  },
  {
    question:"The betrayer of Jesus bought a field with his reward",
    options:["True"  , " False"],
    answer: 0,
    description: " Reference: Acts 1:18",
  },
  {
    question:"With what did John baptize? ",
    options:["The blood" , "Wine" , "The Holy Spirit" , " Water"],
    answer: 3,
    description: "Reference: Acts 11:16",
  },

  {
    question:"Who came to get Peter out of prison one night? ",
    options:["John" , "The Jews" , "An Angel of the Lord" , " The disciples"],
    answer: 2,
    description: "Reference: Acts 12:7",
  },
  {
    question:"About 5,000 people were baptized on the day of Pentecost after the first Gospel sermon",
    options:["True"  , " False"],
    answer: 1,
    description: " Reference: About 3,000 believed and were baptized. Acts 2:41",
  },

  {
    question:"Who was the sorcerer, false prophet, and Jew on the isle of Paphos? ",
    options:["Judas Iscariot" , "Bar-Jesus" , "Simon" , " Stephen"],
    answer: 1,
    description: "Reference: Acts 13:6",
  },

  {
    question:"Who took Judas' place as one of the twelve apostles?",
    options:["Cornelius" , "Saul" , "Agabus" , " Matthias"],
    answer: 3,
    description: "Reference: Acts 1:26",
  },
  {
    question:"Who told the crippled man in Lystra to stand on his feet? ",
    options:["Paul" , "Peter" , "John" , " Silas"],
    answer: 0,
    description: "Reference: Acts 14:9-10",
  },
  {
    question:"The name of the gate by which the man was laid every day was called Beautiful ",
    options:["True"  , " False"],
    answer: 0,
    description: "Reference: Acts 3:2",
  },

  {
    question:" Who did Paul choose to preach the gospel with through Syria and cilicia strengthening the churches ",
    options:["Silas" , "Cornelius" , "Bar-Jesus" , " Matthias"],
    answer: 0,
    description: "Reference: Acts 15:22",
  },

  {
    question:"How many disciples were in Jerusalem after the ascension? ",
    options:["5,000" , "150" , "120" , " 3,000"],
    answer: 2,
    description: "Reference: Acts 1:15",
  },
  {
    question:"Barnabas' other name was Joshua",
    options:["True"  , " False"],
    answer: 1,
    description: "Reference: Joseph was his other name. Acts 4:36",
  },


]

function load(){
  number ++ ;
  questionText.innerHTML = myApp[questionIndex].question;
  createOptions();
  scoreBoard();
  currentQuestionNum.innerHTML = number + " / " + myApp.length ;
}

function createOptions(){
  optionBox.innerHTML = " " ;
  let animationDelay = 0.2;
  for (let i=0 ; i< myApp[questionIndex].options.length; i++){
    const option = document.createElement("div");
      option.innerHTML = myApp[questionIndex].options[i];
    option.classList.add("option");
    option.id = i ;
    option.style.animationDelay = animationDelay + "s" ;
    animationDelay = animationDelay + 0.2;
    option.setAttribute("onclick","check(this)");
    optionBox.appendChild(option);
  }
}

function generateRandomQuestion(){
  const randomNumber = Math.floor(Math.random() * myApp.length);
  let hitDuplicate = 0;
  if (myArray.length == 0){
    questionIndex = randomNumber;
  }
  else{
    for (let i = 0; i <myArray.length; i++){
      if (randomNumber == myArray[i]){
        hitDuplicate = 1 ;
      }
    }
    if (hitDuplicate == 1){
      generateRandomQuestion();
      return;
    }
    else{
      questionIndex = randomNumber;
    }
  }
  myArray.push(randomNumber);
  console.log(myArray);
  load();
  }

function check(ele){
  const id = ele.id;
  if(id==myApp[questionIndex].answer){
    ele.classList.add("correct");
    score++ ;
    scoreBoard();
  }
  else{
    ele.classList.add("wrong");
    for(let i=0; i<optionBox.children.length; i++){
      if(optionBox.children[i].id==myApp[questionIndex].answer){
        optionBox.children[i].classList.add("show-correct");
      }
    }
  }
  attempt++;
  disableOptions();
  showAnswerDescription();
  showNextQuestionBtn();
  stopTimer();

  if(number == myApp.length){
    quizOver();
  }
}

function timeIsUp(){
  showTimeUpText();
  for(let i=0; i<optionBox.children.length; i++){
    if(optionBox.children[i].id==myApp[questionIndex].answer){
      optionBox.children[i].classList.add("show-correct");
    }
  }

  disableOptions();
  showAnswerDescription();
  showNextQuestionBtn();
}


function startTimer(){
  let timeLimit = 30;
  remainingTime.innerHTML=timeLimit;
  remainingTime.classList.remove("less-time");
  interval = setInterval(()=>{
    timeLimit--;
    if(timeLimit<10){
      timeLimit="0"+timeLimit;
    }
    if(timeLimit<6){
      remainingTime.classList.add("less-time");
    }
    remainingTime.innerHTML=timeLimit;
    if(timeLimit == 0){
      clearInterval(interval);
      timeIsUp();
    }
  },1000)
}

function stopTimer(){
  clearInterval(interval);
}


function disableOptions(){
  for(let i=0; i<optionBox.children.length; i++){
    optionBox.children[i].classList.add("already-answered");
  }
}

function showAnswerDescription(){
  if (typeof myApp[questionIndex].description !== 'undefined'){
    answerDescription.classList.add("show");
    answerDescription.innerHTML = myApp[questionIndex].description;
  }
}
function hideAnswerDescription(){
    answerDescription.classList.remove("show");
    answerDescription.innerHTML = " ";
  }
function showNextQuestionBtn(){
  nextQuestionBtn.classList.add("show");
}
function hideNextQuestionBtn(){
  nextQuestionBtn.classList.remove("show");
}
function showTimeUpText(){
  timeUpText.classList.add("show");
}
function hideTimeUpText(){
  timeUpText.classList.remove("show");
}
function scoreBoard(){
  correctAnswers.innerHTML = score;
}

nextQuestionBtn.addEventListener("click",nextQuestion);

function nextQuestion(){

  generateRandomQuestion();
  hideNextQuestionBtn();
  hideAnswerDescription();
  hideTimeUpText();
  startTimer();
}

function quizResult(){
  document.querySelector(".total-questions").innerHTML = myApp.length;
  document.querySelector(".total-attempts").innerHTML = attempt;
  document.querySelector(".total-correct").innerHTML = score;
  document.querySelector(".total-wrong").innerHTML = attempt - score;
  const percentage = (score / myApp.length) * 100;
  document.querySelector(".percentage").innerHTML = percentage.toFixed(2) + "%";
}

function resetQuiz(){
  attempt = 0;
  questionIndex = 0;
  score = 0;
  number = 0;
  myArray = [];
}

function quizOver(){
  nextQuestionBtn.classList.remove("show");
  seeResultBtn.classList.add("show");
}

seeResultBtn.addEventListener("click",()=>{
  quizBox.classList.remove("show");
  seeResultBtn.classList.remove("show");
  quizOverBox.classList.add("show");
  quizResult();
})

startAgainQuizBtn.addEventListener("click",()=>{
  quizBox.classList.add("show");
  quizOverBox.classList.remove("show");
  resetQuiz();
  nextQuestion();
})

goHomeBtn.addEventListener("click",()=>{
  quizOverBox.classList.remove("show");
  quizHomeBox.classList.add("show");
  resetQuiz();
})

startQuizBtn.addEventListener("click",()=>{
  quizHomeBox.classList.remove("show");
  quizBox.classList.add("show");
  nextQuestion();
})
//window.onload=()=>{
//  load();
//}
