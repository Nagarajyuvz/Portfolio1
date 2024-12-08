// Elements for the start page and quiz
const startBtn = document.getElementById('start-btn');
const quizContainer = document.getElementById('quiz');
const startContainer = document.getElementById('start-container');

// Start quiz button click event
startBtn.addEventListener('click', () => {
    // Hide the start page and show the quiz
    startContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    
    // Load the first question
    loadQuiz();
});

// Sample quiz questions
const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Rome",
        correct: "c"
    },
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },
    {
        question: "Who is the Prime Minister of the UK?",
        a: "Joe Biden",
        b: "Rishi Sunak",
        c: "Boris Johnson",
        d: "Angela Merkel",
        correct: "b"
    },
];

// Initial variables
let currentQuiz = 0;
let score = 0;

// DOM Elements
const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

// Load the quiz question
function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

// Deselect all answers
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

// Get selected answer
function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

// Submit answer and move to the next question
submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quizContainer.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly!</h2>
            <button onclick="location.reload()">Restart Quiz</button>`;
        }
    }
});
window.onload = function() {
    window.location.href = "#home";
};

// Add an alert message on form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    alert(" The form submitted successfully !!");
});