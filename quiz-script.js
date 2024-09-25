const questions = [
    { question: "Who is known as the father of computers?", answers: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"], correct: 1 },
    { question: "Who is the CEO of Google?", answers: ["Sundar Pichai", "Larry Page", "Sergey Brin", "Tim Cook"], correct: 0 },
    { question: "Who is the CEO of WhatsApp?", answers: ["Jan Koum", "Mark Zuckerberg", "Sundar Pichai", "Sheryl Sandberg"], correct: 0 },
    { question: "Who is the CEO of Twitter?", answers: ["Jack Dorsey", "Parag Agrawal", "Linda Yaccarino", "Elon Musk"], correct: 2 },
    { question: "Who is the CEO of YouTube?", answers: ["Susan Wojcicki", "Neal Mohan", "Larry Page", "Sundar Pichai"], correct: 1 },
    { question: "Who created the C programming language?", answers: ["Bjarne Stroustrup", "James Gosling", "Dennis Ritchie", "Guido van Rossum"], correct: 2 },
    { question: "Who created C++?", answers: ["Dennis Ritchie", "James Gosling", "Bjarne Stroustrup", "Guido van Rossum"], correct: 2 },
    { question: "Who created Java?", answers: ["Dennis Ritchie", "James Gosling", "Bjarne Stroustrup", "Guido van Rossum"], correct: 1 },
    { question: "Who created JavaScript?", answers: ["Brendan Eich", "James Gosling", "Bjarne Stroustrup", "Guido van Rossum"], correct: 0 },
    { question: "Who created C#?", answers: ["Brendan Eich", "Anders Hejlsberg", "Bjarne Stroustrup", "Guido van Rossum"], correct: 1 },
    { question: "Who created Python?", answers: ["Brendan Eich", "James Gosling", "Guido van Rossum", "Bjarne Stroustrup"], correct: 2 },
    { question: "Who created the first version of HTML?", answers: ["Tim Berners-Lee", "James Gosling", "Bjarne Stroustrup", "Guido van Rossum"], correct: 0 },
    { question: "Who is known as the father of AI?", answers: ["Alan Turing", "John McCarthy", "Charles Babbage", "Steve Jobs"], correct: 1 },
    { question: "Who founded Microsoft?", answers: ["Steve Jobs", "Larry Page", "Bill Gates & Paul Allen", "Sundar Pichai"], correct: 2 },
    { question: "Who is known as the father of PHP?", answers: ["Rasmus Lerdorf", "James Gosling", "Bjarne Stroustrup", "Guido van Rossum"], correct: 0 },
    { question: "Who created FORTRAN?", answers: ["John Backus", "Grace Hopper", "Bjarne Stroustrup", "Guido van Rossum"], correct: 0 },
    { question: "Who created COBOL?", answers: ["John Backus", "Grace Hopper", "Bjarne Stroustrup", "Guido van Rossum"], correct: 1 },
    { question: "When was Microsoft founded?", answers: ["1985", "1975", "1990", "2000"], correct: 1 },
    { question: "When was YouTube founded?", answers: ["2005", "2010", "2015", "2020"], correct: 0 },
    { question: "When was Google founded?", answers: ["2000", "1998", "1995", "1990"], correct: 1 },

];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const feedbackElement = document.getElementById("feedback");

function showQuestion(questionIndex) {
    resetState();
    const currentQuestion = questions[questionIndex];
    questionElement.textContent = currentQuestion.question;
    
    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.className = "btn";
        if (index === currentQuestion.correct) {
            button.dataset.correct = true;
        }
        button.onclick = selectAnswer;
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    answerButtonsElement.innerHTML = '';
    feedbackElement.textContent = '';
}

function selectAnswer(event) {
    const selectedButton = event.target;
    const correct = selectedButton.dataset.correct === "true";
    if (correct) {
        feedbackElement.textContent = "Correct!";
        feedbackElement.style.color = "darkgreen";
        score++;
    } else {
        feedbackElement.textContent = "Incorrect!";
        feedbackElement.style.color = "darkred";
    }

    Array.from(answerButtonsElement.children).forEach(button => {
        if (button.dataset.correct) {
            button.classList.add("correct");
        } else {
            button.classList.add("incorrect");
        }
        button.disabled = true;
    });
}

// When you load the page, fetch the question number from the URL
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const questionIndex = parseInt(urlParams.get('question')) - 1;
    
    if (questionIndex >= 0 && questionIndex < questions.length) {
        showQuestion(questionIndex);
    } else {
        questionElement.textContent = "Invalid question number.";
    }
};
