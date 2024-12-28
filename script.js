
const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 1
    },
    {
        question: "what is my name?",
        options: ["james", "peter", "john", "obinna"],
        answer: 1
    }
];

let currentQuestion = 0;

function renderQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    questionElement.textContent = quizData[currentQuestion].question;

    quizData[currentQuestion].options.forEach((option, index) => {
        const li = document.createElement("li");
        const radio = document.createElement("input");
        const label = document.createElement("label");

        radio.type = "radio";
        radio.name = "option";
        radio.value = index;

        label.textContent = option;

        li.appendChild(radio);
        li.appendChild(label);
        optionsElement.appendChild(li);
    });
}

function checkAnswer() {
    const optionsElement = document.getElementById("options");
    const resultElement = document.getElementById("result");


    const selectedOption = optionsElement.querySelector("input:checked");

    if (selectedOption) {
        const answerIndex = parseInt(selectedOption.value);
        const correctAnswer = quizData[currentQuestion].answer;

        if (answerIndex === correctAnswer) {
            resultElement.textContent = "Correct!";
        } else {
            resultElement.textContent = `Incorrect. The correct answer is ${quizData[currentQuestion].options[correctAnswer]}.`;
        }

        
        currentQuestion++;

        if (currentQuestion >= quizData.length) {
            resultElement.textContent = "Quiz completed!";
            document.getElementById("submit").disabled = true;
        } else {
            renderQuestion();
        }
    } else {
        resultElement.textContent = "Please select an option.";
    }
}


renderQuestion();


document.getElementById("submit").addEventListener("click", checkAnswer);


