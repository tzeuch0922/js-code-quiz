// Initialize Buttons for adding eventlisteners
var highscoreButtonEl = document.querySelector("#hs-button");
var startButtonEl = document.querySelector("#start-button");
var answer1ButtonEl = document.querySelector("#answer1-button");
var answer2ButtonEl = document.querySelector("#answer2-button");
var answer3ButtonEl = document.querySelector("#answer3-button");
var answer4ButtonEl = document.querySelector("#answer4-button");
var submitButtonEl = document.querySelector("#submit-button");
var skipButtonEl = document.querySelector("#skip-button");
var backButtonEl = document.querySelector("#back-button");
var clearButtonEl = document.querySelector("#clear-button");

// Initialize Textfields for changing text and hiding elements.
var questionEl = document.querySelector(".question h1");
var introEl = document.querySelector(".intro");
var timerEl = document.querySelector(".timer");
var timerTimeEl = document.querySelector("#timer");
var footerEl = document.querySelector("#footer");
var userLabelEl = document.querySelector("#userId-label");
var userIdEl = document.querySelector("#userId");

// Initialize generic fields for changing alignment
var mainEl = document.querySelector("main");

// Initialize timer variable and setup timing
var counter;
var end;
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

// Update timer and variables.
function updateTimer()
{
    if(Date.now() > end)
    {
        clearInterval(counter);
        submitHighscoreScreen(0);
    }
    else
    {
        timer = Math.floor((end - Date.now())/1000);
        timerTimeEl.textContent = timer;
    }
}

// Reset to starting screen
function resetScreen()
{
    // Remove unnecessary elements
    footerEl.classList.add("hidden");
    userLabelEl.classList.add("hidden");
    userIdEl.classList.add("hidden");
    submitButtonEl.classList.add("hidden");
    skipButtonEl.classList.add("hidden");

    // Add necessary elements
    highscoreButtonEl.classList.remove("hidden");
    startButtonEl.classList.remove("hidden");

    // Change textcontent to intro
    timerTimeEl.textContent = "75";
    questionEl.textContent = "Coding Quiz Challenge";
    introEl.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
    
    // Change styles on page
    questionEl.setAttribute("style", "text-align: center");
    introEl.setAttribute("style", "text-align: center");
    mainEl.setAttribute("style", "text-align: center");
}

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
    introEl.classList.remove("hidden");
    userLabelEl.classList.remove("hidden");
    userIdEl.classList.remove("hidden");
    submitButtonEl.classList.remove("hidden");
    skipButtonEl.classList.remove("hidden");

    // Change textContent on page.
    questionEl.textContent = "All done!";
    introEl.textContent = "Your final score is " + timeLeft + ".";
    
    // Change styles on page.
    introEl.setAttribute("style", "text-align: left")
    mainEl.setAttribute("style", "text-align: left");
}

// Function for sending answer choice.
function sendAnswer(choice)
{
    var correct = questionSet[questionNumber].correctAnswer;
    // If answer is correct, add proper footer.
    if(choice === correct)
    {
        footerEl.textContent = "Correct!";       
    }
    // If answer is incorrect, remove 10 from timer and add proper footer.
    else
    {
        footerEl.textContent = "Wrong!";
        // Used to prevent a potential bug where last 10 score gets counted off twice.
        if(questionNumber < questionSet.length)
        {
            end -= 10000;
        }
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
        if(choice === correct)
        {
            // Move to submit highscore screen
            submitHighscoreScreen(timer);
        }
        // Used to fix a bug, since timer would not update fast enough to subtract 10 points.
        else
        {
            // Move to submit highscore screen with 10 less score
            submitHighscoreScreen(timer - 10);
        }
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

    // Remove elements unnecessary for quiz
    introEl.classList.add("hidden");
    highscoreButtonEl.classList.add("hidden");
    startButtonEl.classList.add("hidden");

    // Add element necessary for quiz function
    timerEl.classList.remove("hidden");
    answer1ButtonEl.classList.remove("hidden");
    answer2ButtonEl.classList.remove("hidden");
    answer3ButtonEl.classList.remove("hidden");
    answer4ButtonEl.classList.remove("hidden");

    // Change textfields
    questionEl.textContent = questionSet[questionNumber].question;
    answer1ButtonEl.textContent = questionSet[questionNumber].answer1;
    answer2ButtonEl.textContent = questionSet[questionNumber].answer2;
    answer3ButtonEl.textContent = questionSet[questionNumber].answer3;
    answer4ButtonEl.textContent = questionSet[questionNumber].answer4;
    
    // Change styling
    questionEl.setAttribute("style", "text-align: left");

    // Start timer
    end = Date.now() + 75000;
    counter = setInterval(updateTimer, 100);
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
submitButtonEl.addEventListener("click", function()
{
    resetScreen;
});
skipButtonEl.addEventListener("click", resetScreen);