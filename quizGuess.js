
// Define a map of questions with corresponding options and answers
const quizData = {
   1: {
       options: [
           "A. It is a markup language",
           "B. It is used for web development",
           "C. It contains lots of tags",
           "D. It is easy to learn",
       ],
       correctAnswer: "HTML",
   },
   2: {
       options: [
           "A. Stands for Relational Database Management System.",
           "B. Manages data in tables with rows and columns.",
           "C. Examples: MySQL, Oracle, and SQL Server.",
           "D. Uses SQL for database operations.",
       ],
       correctAnswer: "RDBMS",
   },
   3: {
       options: [
           "A. Simple and powerful programming language.",
           "B. Used to write system software like operating systems.",
           "C. Supports functions, loops, and structures.",
           "D. Example: printf('Hello, World!');",
       ],
       correctAnswer: "C",
   },
   4: {
       options: [
           "A. Extension of C with object-oriented features.",
           "B. Supports classes and objects.",
           "C. Used for games and large software systems.",
           "D. Example: cout << 'Hello, World!';",
       ],
       correctAnswer: "C++",
   },
   5: {
       options: [
           "A. Object-oriented and platform-independent language.",
           "B. Used for web, mobile, and desktop applications.",
           "C. Runs on the JVM (Java Virtual Machine).",
           "D. Example: System.out.println('Hello, World!');",
       ],
       correctAnswer: "Java",
   },
   6: {
       options: [
           "A. Language for web development.",
           "B. Runs in the browser to make websites interactive.",
           "C. Works with HTML and CSS.",
           "D. Example: console.log('Hello, World!');",
       ],
       correctAnswer: "JavaScript",
   },
   7: {
       options: [
           "A. Microsoft’s language for .NET framework.",
           "B. Used for web, mobile, and desktop applications.",
           "C. Supports object-oriented programming.",
           "D. Example: Console.WriteLine('Hello, World!');",
       ],
       correctAnswer: "C#",
   },
   8: {
       options: [
           "A. Easy-to-learn and versatile language.",
           "B. Used in web development, data science, AI, and automation.",
           "C. Dynamically typed with simple syntax.",
           "D. Example: print('Hello, World!');",
       ],
       correctAnswer: "Python",
   },
   9: {
       options: [
           "A. Microsoft’s language for Windows applications.",
           "B. Focuses on graphical user interfaces (GUIs).",
           "C. Runs on the .NET framework.",
           "D. Example: Console.WriteLine('Hello, World!');",
       ],
       correctAnswer: "VB.NET",
   },
   10: {
options: [
   "A. Server-side scripting language for web development.",
   "B. Generates dynamic web pages.",
   "C. Works with databases like MySQL.",
   "D. Example: echo 'Hello, World!';",
],
correctAnswer: "PHP",
}, 11: {
options: [
   "A. Named reusable blocks of code.",
   "B. Can accept parameters and return values.",
   "C. Used to break down tasks into smaller parts.",
   "D. Promotes code reusability and readability.",
],
correctAnswer: "Functions",
},
12: {
options: [
   "A. Reserved words with special meaning in programming.",
   "B. Cannot be used as identifiers or variable names.",
   "C. Examples include 'if', 'else', 'return', 'for'.",
   "D. Are case-sensitive in most programming languages.",
],
correctAnswer: "Keywords",
},
13: {
options: [
   "A. Represent different types of data in programs.",
   "B. Examples include int, float, string, and boolean.",
   "C. Define the kind of operations allowed on the data.",
   "D. Help organize and optimize memory usage.",
],
correctAnswer: "Data Types",
},
14: {
options: [
   "A. Temporary storage locations for values in a program.",
   "B. Must be declared with a type in statically-typed languages.",
   "C. Can change values during program execution.",
   "D. Examples include 'x', 'counter', and 'total'.",
],
correctAnswer: "Variables",
},
15: {
options: [
   "A. Represents true or false values in logic.",
   "B. Used in conditional statements and loops.",
   "C. Often produced as the result of comparison operations.",
   "D. Examples include true, false, and logical expressions.",
],
correctAnswer: "Boolean",
},
16: {
options: [
   "A. Describes how a program's code executes.",
   "B. Includes sequential, conditional, and iterative flows.",
   "C. Controlled using statements like 'if', 'else', 'while', 'for'.",
   "D. Helps organize program logic efficiently.",
],
correctAnswer: "Control Flow",
},
17: {
options: [
   "A. Special functions automatically invoked when objects are created.",
   "B. Share the same name as the class in object-oriented programming.",
   "C. Initialize object properties or execute startup logic.",
   "D. Can be parameterized to accept input values.",
],
correctAnswer: "Constructors",
},
18: {
options: [
   "A. Define how operators behave with specific data types.",
   "B. Include arithmetic, relational, and logical categories.",
   "C. Examples include '+', '==', '&&', and '*'.",
   "D. Can be overloaded in some programming languages.",
],
correctAnswer: "Operators",
},
19: {
options: [
   "A. A special type of loop that iterates over sequences.",
   "B. Automatically retrieves elements from arrays or collections.",
   "C. Commonly used in languages like Python and JavaScript.",
   "D. Reduces the need for manual index tracking.",
],
correctAnswer: "For Each Loop",
},
20: {
options: [
   "A. A block of code designed to handle exceptions.",
   "B. Used to manage runtime errors gracefully.",
   "C. Includes keywords like 'try', 'catch', and 'finally'.",
   "D. Helps prevent program crashes during unexpected situations.",
],
correctAnswer: "Exception Handling",
}
};

// Get question number from the URL query string
const urlParams = new URLSearchParams(window.location.search);
const questionNumber = parseInt(urlParams.get('question'), 10) || 1;

// Retrieve the question data based on the number
const currentQuiz = quizData[questionNumber];

// Check if the question exists, otherwise show a fallback
if (!currentQuiz) {
   document.body.innerHTML = `<div style="color:white; text-align:center; margin-top:50px;">
       <h1>Question not found!</h1>
       <p>Please return to the main menu and select a valid question.</p>
   </div>`;
} else {
   let currentOptionIndex = 0;
   const options = currentQuiz.options;
   const correctAnswer = currentQuiz.correctAnswer;

   // Function to show the current option
   function showOption() {
       const optionsContainer = document.getElementById('optionsContainer');
       const optionButton = document.createElement('button');
       optionButton.classList.add('option');
       optionButton.innerText = options[currentOptionIndex];
       optionsContainer.appendChild(optionButton);
       optionButton.style.display = 'block'; // Show the current option
   }

   // Function to display the next option
   function nextOption() {
       if (currentOptionIndex < options.length) {
           showOption();
           currentOptionIndex++; // Increment the index for the next call
       } else {
           alert("No more options available.");
           document.getElementById('nextButton').disabled = true; // Disable button when done
       }
   }

   // Function to display the correct answer
   function displayAnswer() {
       const answerElement = document.getElementById('answer');
       answerElement.innerText = `Answer: ${correctAnswer}`;
       answerElement.style.opacity = 1; // Show the answer with a fade-in effect
   }
}

