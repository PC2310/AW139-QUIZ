const questions = [
    {
        question: "What is the procedure for a double engine failure during flight?",
        answer: "Autorotation entry and landing procedure",
        category: "Emergency"
    },
    {
        question: "What should the pilot do if the main rotor RPM low warning light illuminates?",
        answer: "Adjust the collective to maintain RPM within the safe operating range.",
        category: "Malfunction"
    },
    {
        question: "What is the maximum allowable gross weight for the AW139?",
        answer: "14,110 lbs.",
        category: "Limitation"
    }
    // Add more questions here
];

let currentQuestionIndex = 0;

function loadNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        document.getElementById('question').textContent = questions[currentQuestionIndex].question;
        document.getElementById('result').textContent = "";
        document.getElementById('answer').value = "";
        document.getElementById('next-button').style.display = "none";
        currentQuestionIndex++;
    } else {
        document.getElementById('question').textContent = "End of Quiz! You've completed all questions.";
        document.getElementById('answer').style.display = "none";
        document.getElementById('next-button').style.display = "none";
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value;
    const correctAnswer = questions[currentQuestionIndex - 1].answer;

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById('result').textContent = "Correct!";
    } else {
        document.getElementById('