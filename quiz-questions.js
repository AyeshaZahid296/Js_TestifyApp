const quizQuestions = [
  {
    question: "What does HTML stand for?",
    options: [
      "HyperText Markup Language",
      "HighText Machine Language",
      "Hyperloop Machine Language",
      "None of the above",
    ],
    correct: 0,
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Colorful Style Sheets",
      "Creative Style Sheets",
      "Computer Style Sheets",
    ],
    correct: 0,
  },
  {
    question: "What does JS stand for?",
    options: [
      "Java Source",
      "JavaScript",
      "Just Script",
      "None of the above",
    ],
    correct: 1,
  },
  {
    question: "What is the correct HTML element for the largest heading?",
    options: ["h1", "h6", "heading", "head"],
    correct: 0,
  },
  {
    question: "Which HTML attribute specifies an alternate text for an image?",
    options: ["alt", "src", "title", "href"],
    correct: 0,
  },
  {
    question: "What is the correct HTML element to insert a line break?",
    options: ["break", "lb", "br", "line"],
    correct: 2,
  },
  {
    question: "Which CSS property controls the text size?",
    options: ["font-style", "text-size", "font-size", "text-style"],
    correct: 2,
  },
  {
    question: "How do you make a list that lists items with bullets?",
    options: ["ul", "ol", "list", "dl"],
    correct: 0,
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["styles", "style", "class", "font"],
    correct: 1,
  },
  {
    question: "Which CSS property is used to change the background color?",
    options: ["background-color", "color", "bgcolor", "bg-color"],
    correct: 0,
  },
  {
    question: "What does the 'this' keyword in JavaScript refer to?",
    options: [
      "The current object",
      "The parent object",
      "The global object",
      "None of the above",
    ],
    correct: 0,
  },
  {
    question: "How do you create a function in JavaScript?",
    options: [
      "function:myFunction()",
      "function myFunction()",
      "create function myFunction()",
      "def myFunction()",
    ],
    correct: 1,
  },
  {
    question: "How do you call a function named 'myFunction'?",
    options: [
      "call myFunction()",
      "call function myFunction()",
      "myFunction()",
      "run myFunction()",
    ],
    correct: 2,
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    options: ["=", "==", "===", "->"],
    correct: 0,
  },
  {
    question: "Which property is used to change the font of an element?",
    options: ["font-family", "font-style", "font-size", "text-font"],
    correct: 0,
  },
  {
    question: "What is the default value of the position property in CSS?",
    options: ["static", "relative", "absolute", "fixed"],
    correct: 0,
  },
  {
    question: "What is the correct JavaScript syntax to print 'Hello World'?",
    options: [
      "print('Hello World')",
      "console.log('Hello World')",
      "echo('Hello World')",
      "document.write('Hello World')",
    ],
    correct: 1,
  },
  {
    question: "What does the DOM stand for in JavaScript?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Document Observation Model",
      "None of the above",
    ],
    correct: 0,
  },
  {
    question: "Which of the following is not a valid JavaScript data type?",
    options: ["Number", "Boolean", "Float", "Object"],
    correct: 2,
  },
  {
    question: "What is the correct way to declare a JavaScript variable?",
    options: ["v myVariable;", "variable myVariable;", "var myVariable;", "None"],
    correct: 2,
  },
  {
    question: "Which tag is used to define an interactive field in HTML?",
    options: ["<input>", "<textarea>", "<form>", "<interactive>"],
    correct: 0,
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Color Style Sheets",
      "Creative Style Sheets",
      "None of the above",
    ],
    correct: 0,
  },
  {
    question: "Which method is used to add an element to an array?",
    options: ["push()", "add()", "append()", "insert()"],
    correct: 0,
  },
];
function checkAnswer(questionIndex, selectedOption) {
    if (quizQuestions[questionIndex].answer === selectedOption) {
        alert("Correct!");
    } else {
        alert("Incorrect.");
    }
}

