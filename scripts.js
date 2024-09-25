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
        qrhImages: ["QRH images/AW139-QRH_page (17).jpg"] // Path to the QRH page image
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
        qrhImages: ["QRH images/AW139-QRH_page (37).jpg"]
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
        qrhImages: ["RFM-Images/RFM-S90-1.jpg"]
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
        qrhImages: ["QRH images/AW139-QRH_page (39).jpg"]
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
        qrhImages: ["QRH images/AW139-QRH_page (20).jpg"]
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
        qrhImages: ["QRH images/AW139-QRH_page (32).jpg"]
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
        qrhImages: ["QRH images/AW139-QRH_page (41).jpg"]
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
        qrhImages: ["QRH images/AW139-QRH_page (99).jpg"]
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
        qrhImages: ["QRH images/AW139-QRH_page (35).jpg"]
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
        qrhImages: ["QRH images/AW139-QRH_page (37).jpg"]
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
        qrhImages: ["QRH images/AW139-QRH_page (19).jpg"]
    },
    {
        question: "What is the procedure if the main battery overheats?",
        choices: [
            "Increase power to cool the battery",
            "switch heater OFF",
            "Descend rapidly to cool the system",
            "Switch off the main battery and continue flight"
        ],
        correctAnswer: 3,
        category: "Malfunction",
        qrhImages: ["QRH images/AW139-QRH_page (16).jpg"]
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
        qrhImages: ["QRH images/AW139-QRH_page (43).jpg"]
    },
    {
        question: "What is the maximum MGB oil temperature?",
        choices: [
            "115°C",
            "110°C",
            "105°C",
            "120°C"
        ],
        correctAnswer: 1,
        category: "Emergency",
        qrhImages: ["QRH images/AW139-QRH_page (39).jpg"]
    },
    {
        question: "What is the maximum operating altitude for the AW139 above 6400kg?",
        choices: [
            "20,000 ft Hp or Hd",
            "15,000 ft Hd",
            "8,000 ft Hp or 11,000 ft Hd",
            "15,000 ft Hp or 25 000 ft Hd"
        ],
        correctAnswer: 2,
        category: "Limitation",
        qrhImages: ["QRH images/AW139-QRH_page (213).jpg"]
    },
    {
        question: "What should be done when encountering electrical smoke in flight?",
        choices: [
            "Try to shut down affected electrical systems and land",
            "Continue flight using stass bottle and monitor the situation",
            "Open windows to vent smoke",
            "Increase power to clear the smoke"
        ],
        correctAnswer: 0,
        category: "Emergency",
        qrhImages: ["QRH images/AW139-QRH_page (32).jpg"]
    },
    {
        question: "What is the maximum continuous rotor RPM in flight AEO?",
        choices: [
            "104%",
            "100%",
            "106%",
            "110%"
        ],
        correctAnswer: 2,
        category: "Limitation",
        qrhImages: ["QRH images/AW139-QRH_page (201).jpg"]
    },
    {
        question: "What should a pilot do if the main rotor underspeed warning occurs?",
        choices: [
            "Raise collective to restore NR",
            "Reduce airspeed and increase power",
            "Continue flying at a reduced power setting",
            "Lower collective to recover NR"
        ],
        correctAnswer: 1,
        category: "Emergency",
        qrhImages: ["QRH images/AW139-QRH_page (37).jpg"]
    },
    {
        question: "What is the procedure for engine oil pressure low warning?",
        choices: [
            "Reduce power and land as soon as possible",
            "If confirmed, Shut down the engine and land as soon as practicable",
            "Increase power to regain pressure",
            "Continue flight at reduced power"
        ],
        correctAnswer: 1,
        category: "Emergency",
        qrhImages: ["QRH images/AW139-QRH_page (25).jpg"]
    },
    {
        question: "What is the recommended aircraft ditching configuration?",
        choices: [
            "40 KIAS, wind coming from right",
            "60 KIAS, wind coming from left",
            "30 KIAS maximum, downwind",
            "30 KIAS maximum, into wind"
        ],
        correctAnswer: 3,
        category: "Emergency",
        qrhImages: [
            "QRH images/AW139-QRH_page (21).jpg", 
            "QRH images/AW139-QRH_page (22).jpg",
            "QRH images/AW139-QRH_page (23).jpg",
            "QRH images/AW139-QRH_page (24).jpg"
        ] // Changed from a string to an array
    },
    {
        question: "What action should be taken in case of a baggage bay fire?",
        choices: [
            "Land immediately, Shut down engines in emergency, Evacuate",
            "Open the baggage bay and ventilate",
            "Shut down engines and enter autorotation",
            "Continue flight, land as soon as practicable"
        ],
        correctAnswer: 0,
        category: "Emergency",
        qrhImages: ["QRH images/AW139-QRH_page (31).jpg"]
    },
    {
        question: "What should be done if the EEC (Engine Electronic Control) fails?",
        choices: [
            "Continue flight on remaining engines",
            "Shut down the engine",
            "Restart the engine",
            "Switch to manual engine control"
        ],
        correctAnswer: 3,
        category: "Malfunction",
        qrhImages: ["QRH images/AW139-QRH_page (25).jpg"]
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

    // Clear previous QRH images
    const resultElement = document.getElementById('result');
    resultElement.innerHTML += "<br>"; // Add a line break after the result text

    // Safely handle qrhImages by providing a fallback to an empty array if undefined
    const qrhImages = questions[currentQuestionIndex - 1].qrhImages || [];
    console.log("QRH Images:", qrhImages);

    // Show multiple QRH images if applicable
    if (qrhImages.length > 0) {
        qrhImages.forEach(image => {
            console.log("Displaying image:", image);
            resultElement.innerHTML += `<img src="${image}" alt="QRH Page" style="max-width: 100%; margin-top: 10px;"><br>`;
        });
    }

    document.getElementById('next-button').style.display = "block";
}

window.onload = function() {
    // Shuffle the questions before starting the quiz
    shuffleArray(questions);
    loadNextQuestion();
};

