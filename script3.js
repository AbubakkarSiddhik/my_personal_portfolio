
 
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
        { question: "Who is the CEO of Yahoo?", answers: ["Marissa Mayer", "Jim Lanzone", "Jerry Yang", "David Filo"], correct: 1 },
        { question: "What is the full form of PHP?", answers: ["Personal Home Page", "Preprocessor Hypertext", "Hypertext Preprocessor", "Pre Hypertext Processor"], correct: 2 },
        { question: "Who founded Yahoo?", answers: ["Jerry Yang & David Filo", "Larry Page & Sergey Brin", "Bill Gates & Paul Allen", "Steve Jobs & Steve Wozniak"], correct: 0 },
        { question: "Who founded Google?", answers: ["Larry Page & Sergey Brin", "Jerry Yang & David Filo", "Bill Gates & Paul Allen", "Steve Jobs & Steve Wozniak"], correct: 0 },
        { question: "Who founded YouTube?", answers: ["Larry Page & Sergey Brin", "Steve Chen, Chad Hurley, & Jawed Karim", "Bill Gates & Paul Allen", "Steve Jobs & Steve Wozniak"], correct: 1 },
        { question: "Who founded Twitter?", answers: ["Jack Dorsey, Noah Glass, Biz Stone, & Evan Williams", "Larry Page & Sergey Brin", "Bill Gates & Paul Allen", "Steve Jobs & Steve Wozniak"], correct: 0 },
        { question: "Who founded WhatsApp?", answers: ["Jan Koum & Brian Acton", "Larry Page & Sergey Brin", "Bill Gates & Paul Allen", "Steve Jobs & Steve Wozniak"], correct: 0 },
        { question: "Who founded Instagram?", answers: ["Kevin Systrom & Mike Krieger", "Larry Page & Sergey Brin", "Bill Gates & Paul Allen", "Steve Jobs & Steve Wozniak"], correct: 0 },
        { question: "Who is the CEO of Instagram?", answers: ["Kevin Systrom", "Mike Krieger", "Adam Mosseri", "Mark Zuckerberg"], correct: 2 },
        { question: "Who founded Snapchat?", answers: ["Evan Spiegel, Bobby Murphy, & Reggie Brown", "Larry Page & Sergey Brin", "Bill Gates & Paul Allen", "Steve Jobs & Steve Wozniak"], correct: 0 },
        { question: "Who is the CEO of Snapchat?", answers: ["Evan Spiegel", "Bobby Murphy", "Reggie Brown", "Mark Zuckerberg"], correct: 0 },
        { question: "Who is the CEO of LinkedIn?", answers: ["Reid Hoffman", "Jeff Weiner", "Ryan Roslansky", "Satya Nadella"], correct: 2 },
        { question: "Who founded LinkedIn?", answers: ["Reid Hoffman", "Jeff Weiner", "Ryan Roslansky", "Satya Nadella"], correct: 0 },
        { question: "Who is the CEO of Microsoft?", answers: ["Bill Gates", "Steve Ballmer", "Satya Nadella", "Paul Allen"], correct: 2 },
        { question: "What is the full form of 'ChatGPT'?", answers: ["Chat Generative Pre-trained Transformer", "Chat General Purpose Transformer", "Chat General Pre-trained Transformer", "Chat Generative Processing Transformer"], correct: 0 }
    ];


    let currentQuestionIndex = 0;
    let score = 0;

    const questionElement = document.getElementById("question");
    const answerButtonsElement = document.getElementById("answer-buttons");
    const feedbackElement = document.getElementById("feedback");
    const nextButton = document.getElementById("next-btn");
    const currentQuestionNumber = document.getElementById("current-question-number");
    const totalQuestions = document.getElementById("total-questions");

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        showQuestion();
    }

    function showQuestion() {
        resetState();
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        for (let i = 0; i < currentQuestion.answers.length; i++) {
            const button = document.createElement("button");
            button.textContent = currentQuestion.answers[i];
            button.className = "btn";
            if (i === currentQuestion.correct) {
                button.dataset.correct = true;
            }
            button.onclick = selectAnswer;
            answerButtonsElement.appendChild(button);
        }
        updateQuestionNumber();
    }

    function resetState() {
        nextButton.style.display = "none";
        answerButtonsElement.innerHTML = '';
        feedbackElement.textContent = '';
    }

    function selectAnswer(event) {
        const selectedButton = event.target;
        const correct = selectedButton.dataset.correct === "true";
        if (correct) {
            score++;
            feedbackElement.textContent = "Correct!";
            feedbackElement.style.color = "darkgreen";
        } else {
            feedbackElement.textContent = "Incorrect!";
            feedbackElement.style.color = "darkred";
        }
        for (let i = 0; i < answerButtonsElement.children.length; i++) {
            const button = answerButtonsElement.children[i];
            if (button.dataset.correct) {
                button.classList.add("correct");
            } else {
                button.classList.add("incorrect");
            }
            button.disabled = true;
        }
        nextButton.style.display = "block";
    }

    function showScore() {
        resetState();
        questionElement.textContent = ` Your score is ${score} out of ${questions.length}!`;
        nextButton.textContent = "Play Again";
        nextButton.style.display = "block";
        // Add "Completed" after the current question number
        const currentQuestion = document.querySelector(".current-question");
        currentQuestion.innerHTML = " Completed";
    }

    function handleNextButton() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showScore();
        }
    }

    function updateQuestionNumber() {
        currentQuestionNumber.textContent = currentQuestionIndex + 1;
        totalQuestions.textContent = questions.length;
    }

    nextButton.onclick = function() {
        if (currentQuestionIndex < questions.length) {
            handleNextButton();
        } else {
            startQuiz();
        }
    };

    startQuiz();
