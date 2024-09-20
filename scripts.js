function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
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
        qrhImage: "QRH images/AW139-QRH_page (17).jpg" // Path to the QRH page image
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
        qrhImage: "QRH images/AW139-QRH_page (37).jpg"
    },
    {
        question: "What is the maximum allowable gross weight for the AW139?",
        choices: [
            "7000 Kg.",
            "6800 Kg.",
            "6400 Kg.",
            "7400 Kg."
        ],
        correctAnswer: 0,
        category: "Limitation",
        qrhImage: "RFM-Images/RFM-S90-1.jpg"
    },
    {
        question: "What is the correct response when a main gearbox oil temperature high warning occurs?",
        choices: [
            "Reduce airspeed and land as soon as possible",
            "Increase collective pitch to reduce temperature",
            "Continue flight and monitor the temperature",
            "Shut down the engines immediately"
        ],
        correctAnswer: 0,
        category: "Emergency",
        qrhImage: "QRH images/AW139-QRH_page (39).jpg"
    },
    {
        question: "What action should be taken in case of a single engine failure in hover with PI over 85% and height 80ft with a calculated dropdown of 60ft?",
        choices: [
            "Perform a flyaway procedure",
            "Descend vertically to the ground",
            "Hold NR above 80% and continue flight",
            "Record time of event and file a safety report"
        ],
        correctAnswer: 0,
        category: "Emergency",
        qrhImage: "QRH images/AW139-QRH_page (20).jpg"
    },
    {
        question: "What is the procedure when a fire is detected in the cockpit during flight?",
        choices: [
            "Perform a controlled descent and emergency landing",
            "Shut down all electrical systems",
            "Extinguish the fire and continue flying",
            "Immediately initiate a rapid climb"
        ],
        correctAnswer: 0,
        category: "Emergency",
        qrhImage: "QRH images/AW139-QRH_page (32).jpg"
    },
    {
        question: "What should the pilot do when the tail rotor drive fails in cruise flight?",
        choices: [
            "Enter autorotation and switch engines off when autorotation stable",
            "Continue the flight and monitor yaw control",
            "Increase airspeed to regain tail rotor function",
            "Reduce airspeed and attempt to hover"
        ],
        correctAnswer: 0,
        category: "Emergency",
        qrhImage: "QRH images/AW139-QRH_page (41).jpg"
    },
    {
        question: "What action should be taken if a hydraulic pressure 1 low occurs in flight?",
        choices: [
            "Lower landing gear and Land as soon as practicable",
            "Increase collective to compensate",
            "Reduce airspeed and fly manually",
            "Shut down all other systems"
        ],
        correctAnswer: 0,
        category: "Malfunction",
        qrhImage: "QRH images/AW139-QRH_page (99).jpg"
    },
    {
        question: "What is the procedure for landing gear failure to lock down?",
        choices: [
            "Use manual landing gear extension procedure",
            "Reduce airspeed below 120 kts, display hydraulic synoptic page and apply QRH procedure",
            "Enter autorotation",
            "Perform an high speed gear-up landing"
        ],
        correctAnswer: 1,
        category: "Malfunction",
        qrhImage: "QRH images/AW139-QRH_page (35).jpg"
    },
    {
        question: "What should be done if the rotor overspeed warning activates?",
        choices: [
            "Reduce collective pitch to lower rotor RPM",
            "Raise collective to stabilize RPM",
            "Shut down engines to prevent damage",
            "Continue flight and monitor rotor speed"
        ],
        correctAnswer: 1,
        category: "Malfunction",
        qrhImage: "QRH images/AW139-QRH_page (37).jpg"
    },
    {
        question: "What is the maximum recommended speed for autorotation?",
        choices: [
            "80 KIAS",
            "90 KIAS",
            "70 KIAS",
            "100 KIAS"
        ],
        correctAnswer: 0,
        category: "Limitation",
        qrhImage: "QRH images/AW139-QRH_page (19).jpg"
    },
    {
        question: "What is the procedure if the main battery overheats?",
        choices: [
            "Increase power to cool the battery",
            "switch heater ON",
            "Descend rapidly to cool the system"
            "Shut down the main battery and continue flight",
        ],
        correctAnswer: 3,
        category: "Malfunction",
        qrhImage: "QRH images/AW139-QRH_page (16).jpg"
    },
    {
        question: "What action should be taken if there is a tail rotor control binding?",
        choices: [
            "Reduce airspeed and prepare for landing",
            "Increase airspeed and perform instrument approach",
            "Assess Power setting using Collective and apply QRH procedure accordingly",
            "Shut down engines and enter Autorotation"
        ],
        correctAnswer: 2,
        category: "Malfunction",
        qrhImage: "QRH images/AW139-QRH_page (43).jpg"
    },
    {
        question: "What is the maximum continuous power transmission oil temperature?",
        choices: [
            "115°C",
            "120°C",
            "105°C",
            "110°C"
        ],
        correctAnswer: 0,
        category: "Limitation",
        qrhImage: "qrh_images/qrh_page_30A.jpg"
    },
    {
        question: "What is the maximum operating altitude for the AW139?",
        choices: [
            "20,000 ft",
            "15,000 ft",
            "10,000 ft",
            "25,000 ft"
        ],
        correctAnswer: 1,
        category: "Limitation",
        qrhImage: "qrh_images/qrh_page_45.jpg"
    },
    {
        question: "What should be done when encountering electrical smoke in flight?",
        choices: [
            "Shut down affected electrical systems and land",
            "Continue flight and monitor the situation",
            "Open windows to vent smoke",
            "Increase power to clear the smoke"
        ],
        correctAnswer: 0,
        category: "Emergency",
        qrhImage: "qrh_images/qrh_page_24.jpg"
    },
    {
        question: "What is the maximum continuous rotor RPM in flight?",
        choices: [
            "106%",
            "100%",
            "104%",
            "110%"
        ],
        correctAnswer: 0,
        category: "Limitation",
        qrhImage: "qrh_images/qrh_page_29.jpg"
    },
    {
        question: "What should a pilot do if the main rotor underspeed warning occurs?",
        choices: [
            "Increase collective to restore RPM",
            "Reduce airspeed and increase power",
            "Continue flying at a reduced power setting",
            "Land immediately and shut down"
        ],
        correctAnswer: 1,
        category: "Emergency",
        qrhImage: "qrh_images/qrh_page_29.jpg"
    },
    {
        question: "What is the procedure for engine oil pressure low warning?",
        choices: [
            "Reduce power and land as soon as possible",
            "Shut down the engine immediately",
            "Increase power to regain pressure",
            "Continue flight at reduced power"
        ],
        correctAnswer: 0,
        category: "Emergency",
        qrhImage: "qrh_images/qrh_page_18E.jpg"
    },
    {
        question: "What is the recommended airspeed for ditching procedures?",
        choices: [
            "40 KIAS",
            "50 KIAS",
            "60 KIAS",
            "30 KIAS"
        ],
        correctAnswer: 1,
        category: "Emergency",
        qrhImage: "qrh_images/qrh_page_18B.jpg"
    },
    {
        question: "What action should be taken in case of a baggage bay fire?",
        choices: [
            "Land immediately and extinguish the fire",
            "Open the baggage bay and ventilate",
            "Shut down engines and land immediately",
            "Continue flight and monitor the fire"
        ],
        correctAnswer: 0,
        category: "Emergency",
        qrhImage: "qrh_images/qrh_page_23.jpg"
    },
    {
        question: "What should be done if the EEC (Engine Electronic Control) fails?",
        choices: [
            "Switch to manual engine control",
            "Shut down the engine",
            "Restart the engine",
            "Continue flight on remaining engines"
        ],
        correctAnswer: 0,
        category: "Malfunction",
        qrhImage: "qrh_images/qrh_page_18E.jpg"
    }
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
    // Shuffle the questions before starting the quiz
    shuffleArray(questions);
    loadNextQuestion();
};

