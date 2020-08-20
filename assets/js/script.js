// Initialize Buttons for adding eventlisteners
var highscoreButtonEl = document.querySelector("#hs-button");
var startButtonEl = document.querySelector("#start-button");
var answer1ButtonEl = document.querySelector("#answer1-button");
var answer2ButtonEl = document.querySelector("#answer2-button");
var answer3ButtonEl = document.querySelector("#answer3-button");
var answer4ButtonEl = document.querySelector("#answer4-button");
var submitButtonEl = document.querySelector("#submit-button");
var backButtonEl = document.querySelector("#back-button");
var clearButtonEl = document.querySelector("#clear-button");

// Initialize Textfields for changing text and hiding elements.
var questionEl = document.querySelector(".question h1");
var introEl = document.querySelector(".intro");
var timerEl = document.querySelector(".timer");
var timerTimeEl = document.querySelector("#timer");
var footerEl = document.querySelector("#footer");

// Initialize timer variable and setup timing
var timer = 0;

// Initialize question set and add them to an array.
var questionNumber = 0;
var questionSet = [];
var question1 = 
{
    question: "Commonly used data types DO Not Include:",
    answer1: "1. strings",
    answer2: "2. booleans",
    answer3: "3. alerts",
    answer4: "4. numbers",
    correctAnswer: "3"
}
var question2 = 
{
    question: "The condition in an if / else statement is enclosed with ________.",
    answer1: "1. quotes",
    answer2: "2. curly brackets",
    answer3: "3. parenthesis",
    answer4: "4. square brackets",
    correctAnswer: "3"
}
var question3 = 
{
    question: "Arrays in JavaScript can be used to store ________.",
    answer1: "1. numbers and strings",
    answer2: "2. other arrays",
    answer3: "3. booleans",
    answer4: "4. all of the above",
    correctAnswer: "4"
}
var question4 =
{
    question: "String values must be enclosed within ______ when being assigned to variables.",
    answer1: "1. commas",
    answer2: "2. curly brackets",
    answer3: "3. quotes",
    answer4: "4. parenthesis",
    correctAnswer: "3"
}
var question5 =
{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answer1: "1. JavaScript",
    answer2: "2. terminal/bash",
    answer3: "3. for loops",
    answer4: "4. console.log",
    correctAnswer: "4"
}
questionSet.push(question1);
questionSet.push(question2);
questionSet.push(question3);
questionSet.push(question4);
questionSet.push(question5);

// Move to submit highscore screen with current time remaining
function submitHighscoreScreen(timeLeft)
{
    // Remove unnecessary elements
    answer1ButtonEl.classList.add("hidden");
    answer2ButtonEl.classList.add("hidden");
    answer3ButtonEl.classList.add("hidden");
    answer4ButtonEl.classList.add("hidden");
    timerEl.classList.add("hidden");

    // Add necessary elements for screen
    questionEl.textContent = "All done!"
}

// Function for sending answer choice.
function sendAnswer(choice)
{
    // If answer is correct, add proper footer.
    if(choice === questionSet[questionNumber].correctAnswer)
    {
        footerEl.textContent = "Correct!";       
    }
    // If answer is incorrect, remove 10 from timer and add proper footer.
    else
    {
        footerEl.textContent = "Wrong!";
        timer -=10;
    }

    // Make footer visible if currently hidden
    if(footerEl.classList.contains("hidden"))
    {
        footerEl.classList.remove("hidden");
    }

    // Increment Question Number
    questionNumber++;

    // If no more questions are available
    if(questionNumber >= questionSet.length)
    {
        // Move to submit highscore screen
        submitHighscoreScreen(timer);
    }
    // if more questions are available
    else
    {
        // Set textcontent for new question
        questionEl.textContent = questionSet[questionNumber].question;
        answer1ButtonEl.textContent = questionSet[questionNumber].answer1;
        answer2ButtonEl.textContent = questionSet[questionNumber].answer2;
        answer3ButtonEl.textContent = questionSet[questionNumber].answer3;
        answer4ButtonEl.textContent = questionSet[questionNumber].answer4;
    }
}

// Event listeners
startButtonEl.addEventListener("click", function()
{
    // Initialize question number for new sets.
    questionNumber = 0;

    // Remove elements unnecessary for quiz.
    introEl.classList.add("hidden");
    highscoreButtonEl.classList.add("hidden");
    startButtonEl.classList.add("hidden");

    // Add element necessary for quiz function
    timerEl.classList.remove("hidden");
    answer1ButtonEl.classList.remove("hidden");
    answer2ButtonEl.classList.remove("hidden");
    answer3ButtonEl.classList.remove("hidden");
    answer4ButtonEl.classList.remove("hidden");

    // Change textfields.
    questionEl.textContent = questionSet[questionNumber].question;
    answer1ButtonEl.textContent = questionSet[questionNumber].answer1;
    answer2ButtonEl.textContent = questionSet[questionNumber].answer2;
    answer3ButtonEl.textContent = questionSet[questionNumber].answer3;
    answer4ButtonEl.textContent = questionSet[questionNumber].answer4;
    
    // Change styling.
    questionEl.setAttribute("style", "text-align: left");
});
answer1ButtonEl.addEventListener("click", function()
{
    sendAnswer("1");
});
answer2ButtonEl.addEventListener("click", function()
{
    sendAnswer("2");
});
answer3ButtonEl.addEventListener("click", function()
{
    sendAnswer("3");
});
answer4ButtonEl.addEventListener("click", function()
{
    sendAnswer("4");
});