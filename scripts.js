const questions = [
    {
        question: "What is the procedure for a double engine failure during flight?",
        choices: [
            "Autorotation entry and landing procedure",
            "Shut down engines and glide",
            "Maintain altitude until engines restart",
            "Climb to a safe height and restart"
        ],
        correctAnswer: 0,
        category: "Emergency",
        qrhImage: "qrh_images/qrh_page_17.jpg" // Path to the QRH page image
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
        category: "Malfunction",
        qrhImage: "qrh_images/qrh_page_29.jpg"
    },
    {
        question: "What is the maximum allowable gross weight for the AW139?",
        choices: [
            "7000 Kg.",
            "6800 Kg.",
            "6400 Kg.",
            "7400 Kg."
        ],
        correctAnswer: 1,
        category: "Limitation",
        qrhImage: "qrh_images/qrh_page_45.jpg"
    }
    // Add more questions as needed
];

let currentQuestionIndex = 0;

function loadNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        const questionData = questions[currentQuestionIndex];
        document.getElementById('question').textContent = questionData.question;

        // Clear previous choices
        const choicesContainer = document.getElementById('choices');
        choicesContainer.innerHTML = '';

        // Dynamically create radio buttons for the choices
        questionData.choices.forEach((choice, index) => {
            const choiceElement = document.createElement('div');
            choiceElement.innerHTML = `
                <input type="radio" name="quiz-choice" id="choice${index}" value="${index}">
                <label for="choice${index}">${choice}</label>
            `;
            choicesContainer.appendChild(choiceElement);
        });

        document.getElementById('result').textContent = "";
        document.getElementById('next-button').style.display = "none";
        currentQuestionIndex++;
    } else {
        document.getElementById('question').textContent = "End of Quiz! You've completed all questions.";
        document.getElementById('choices').style.display = "none";
        document.getElementById('next-button').style.display = "none";
    }
}

function checkAnswer() {
    const selectedChoice = document.querySelector('input[name="quiz-choice"]:checked');
    if (!selectedChoice) {
        document.getElementById('result').textContent = "Please select an answer.";
        return;
    }

    const userAnswer = parseInt(selectedChoice.value);
    const correctAnswer = questions[currentQuestionIndex - 1].correctAnswer;

    if (userAnswer === correctAnswer) {
        document.getElementById('result').textContent = "Correct!";
    } else {
        document.getElementById('result').textContent = `Incorrect! The correct answer was: ${questions[currentQuestionIndex - 1].choices[correctAnswer]}`;
    }

    // Show QRH image
    const qrhImage = questions[currentQuestionIndex - 1].qrhImage;
    if (qrhImage) {
        document.getElementById('result').innerHTML += `<br><img src="${qrhImage}" alt="QRH Page" style="max-width: 100%;">`;
    }

    document.getElementById('next-button').style.display = "block";
}

window.onload = function() {
    loadNextQuestion();
};

