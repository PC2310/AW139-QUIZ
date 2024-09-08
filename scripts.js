const questions = [
    {
        question: "What is the procedure for a double engine failure during flight?",
        choices: [
            "Autorotation entry and landing procedure",
            "Shut down engines and glide",
            "Maintain altitude until engines restart",
            "Climb to a safe height and restart"
        ],
        correctAnswer: 0, // index of the correct answer in the choices array
        category: "Emergency"
    },
    {
        question: "What should the pilot do if the main rotor RPM low warning light illuminates?",
        choices: [
            "Increase power",
            "Reduce speed",
            "Adjust the collective to maintain RPM",
            "Land immediately"
        ],
        correctAnswer: 2,
        category: "Malfunction"
    },
    {
        question: "What is the maximum allowable gross weight for the AW139?",
        choices: [
            "6400 Kg.",
            "7400 Kg.",
            "6800 Kg.",
            "7000 kg."
        ],
        correctAnswer: 1,
        category: "Limitation"
    }
    // Add more questions as needed
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
