const questions = [
    { question: "What is the minimum age for a learners drivers license?", options: ["A. 16", "B. 17", "C. 18", "D. 19"], answer: "A. 16" },
    { question: "What does a red traffic light mean?", options: ["A. Stop", "B. Go", "C. Slow down", "D. Yield"], answer: "A. Stop" },
    { question: "When can you make a U-turn?", options: ["A. At any time", "B. Only where permitted", "C. On highways", "D. In intersections"], answer: "B. Only where permitted" },
    { question: "What is the speed limit in urban areas?", options: ["A. 50 km/h", "B. 60 km/h", "C. 80 km/h", "D. 100 km/h"], answer: "A. 50 km/h" },
    { question: "What should you do if your brakes fail?", options: ["A. Pump the brakes", "B. Use the handbrake", "C. Shift to neutral", "D. All of the above"], answer: "D. All of the above" },
    { question: "When must you use headlights?", options: ["A. During the day", "B. At night", "C. In poor visibility", "D. B and C"], answer: "D. B and C" },
    { question: "When approaching this sign I am expected to:", options: ["A. Engage lower gears", "B. Drive like Vin Diesel", "C. Nothing be yourself", "D. Shayi'moto wena"], answer: "A. Engage lower gears" },
    { question: "What does a flashing amber light mean?", options: ["A. Stop", "B. Proceed with caution", "C. Go", "D. No entry"], answer: "B. Proceed with caution" },
    { question: "When should you use your horn?", options: ["A. To greet friends", "B. To warn of danger", "C. In traffic jams", "D. At all times"], answer: "B. To warn of danger" },
    { question: "What is the sequence of the traffic lights?", options: ["A. Red-Amber-Green", "B. Green-Amber-Red", "C. Amber-Green-Red", "D. None of the above"], answer: "B. Green-Amber-Red" },
    { question: "When can you overtake on the left?", options: ["A. Never", "B. When the vehicle in front of you is  turning right", "C. On one-way streets", "D. A and C"], answer: "B. When the vehicle in front of you is  turning right" },
    { question: "What must you do at a pedestrian crossing?", options: ["A. Stop if pedestrians are crossing", "B. Speed up", "C. Ignore", "D. Honk"], answer: "A. Stop if pedestrians are crossing" },
    { question: "What is the penalty for driving without a license?", options: ["A. Fine", "B. Warning", "C. License suspension", "D. A and C"], answer: "D. A and C" },
    { question: "When should you wear a seatbelt?", options: ["A. Only in front seats", "B. At all times", "C. When speeding", "D. Never"], answer: "B. At all times" },
    { question: "What does a green traffic light mean?", options: ["A. Stop", "B. Go", "C. Slow down", "D. Yield"], answer: "B. Go" },
    { question: "How should you park on a hill?", options: ["A. Facing uphill", "B. Facing downhill", "C. With wheels turned", "D. A and C"], answer: "D. A and C" },
    { question: "What is the speed limit on highways?", options: ["A. 80 km/h", "B. 100 km/h", "C. 120 km/h", "D. Unlimited"], answer: "C. 120 km/h" },
    { question: "What is the overall stopping distance at 60km/h?", options: ["A. 35m", "B. 25m", "C. 55m", "D. 40m"], answer: "A. 35m" },
    { question: "What should you do in fog?", options: ["A. Use high beams", "B. Use low beams", "C. Speed up", "D. Stop"], answer: "B. Use low beams" },
    { question: "How many types of road signs are there?", options: ["A. 5", "B. 2", "C. 10", "D. 3"], answer: "D. 3" },
    { question: "What is the legal age for a provisional license?", options: ["A. 16", "B. 17", "C. 18", "D. 19"], answer: "A. 16" },
    { question: "What does a broken white line mean?", options: ["A. No overtaking", "B. Overtaking allowed", "C. Parking", "D. Stop"], answer: "B. Overtaking allowed" },
    { question: "When should you check your mirrors?", options: ["A. Before changing lanes", "B. Before stopping", "C. Before overtaking", "D. All of the above"], answer: "D. All of the above" },
    { question: "What do you do when approaching a police roadblock?", options: ["A. Bust through like you're in Need for Speed and watch your bounty skyrocket", "B. Switch to “mission impossible mode” and pretend you're avoiding laser beams", "C. Start practising your most polite voice: “Good evening officer… sir… boss… commander… chief.", "D. Slow down, follow police instructions and expect to be stopped"], answer: "D. Slow down, follow police instructions and expect to be stopped" },
    { question: "When must you use indicators?", options: ["A. Before turning", "B. Before changing lanes", "C. Before stopping", "D. All of the above"], answer: "D. All of the above" }
];

const questionElement = document.getElementById("question");
const nextButton = document.getElementById("next-btn");
const prevButton = document.getElementById("previous-btn");
const subButton = document.getElementById("submit-btn");
const optionButtons = document.querySelectorAll(".btn"); // Assuming these are your radio inputs
const optionSpans = document.querySelectorAll(".ans");    // Assuming these are the text spans

let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length).fill(null);

function startQuiz() {
    currentQuestionIndex = 0;
    userAnswers.fill(null);
    subButton.style.display = "none";
    prevButton.style.display = "none";
    nextButton.style.display = "block";
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = (currentQuestionIndex + 1) + ". " + currentQuestion.question;

    // 1. Reset all radio buttons and labels
    optionButtons.forEach((button, index) => {
        button.checked = false;
        optionSpans[index].textContent = currentQuestion.options[index];
    });

    // 2. IMPORTANT: Restore the previously selected answer
    const savedAnswerIndex = userAnswers[currentQuestionIndex];
    if (savedAnswerIndex !== null) {
        optionButtons[savedAnswerIndex].checked = true;
    }

    // 3. Handle Navigation Button Visibility
    prevButton.style.display = currentQuestionIndex === 0 ? "none" : "block";
    
    if (currentQuestionIndex === questions.length - 1) {
        nextButton.style.display = "none";
        subButton.style.display = "block";
    } else {
        nextButton.style.display = "block";
        subButton.style.display = "none";
    }
}

// Helper to get the currently selected radio button index
function getSelectedOptionIndex() {
    let selectedIdx = null;
    optionButtons.forEach((button, index) => {
        if (button.checked) {
            selectedIdx = index;
        }
    });
    return selectedIdx;
}

function saveCurrentAnswer() {
    userAnswers[currentQuestionIndex] = getSelectedOptionIndex();
}

nextButton.addEventListener("click", () => {
    saveCurrentAnswer();
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    }
});

prevButton.addEventListener("click", () => {
    saveCurrentAnswer(); // Save progress before going back
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
});

subButton.addEventListener("click", () => {
    saveCurrentAnswer();
    if (userAnswers[currentQuestionIndex] === null) {
        alert("Please select an answer before submitting.");
        return;
    }
    showScore();
});

function showScore() {
    let score = 0;
    userAnswers.forEach((answerIndex, qIdx) => {
        if (answerIndex !== null) {
            const selectedText = questions[qIdx].options[answerIndex];
            if (selectedText === questions[qIdx].answer) {
                score++;
            }
        }
    });

    const percentage = ((score / questions.length) * 100).toFixed(2);
    questionElement.innerHTML = `Quiz Complete!<br>You scored ${score} out of ${questions.length} (${percentage}%).`;
    
    // Hide everything else
    document.getElementById("answer-buttons").style.display = "none";
    subButton.style.display = "none";
    prevButton.style.display = "none";
    nextButton.style.display = "block";
    nextButton.innerHTML = "Restart Quiz";
    
    nextButton.onclick = () => { location.reload(); }; 
}

startQuiz();