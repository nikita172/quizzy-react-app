export const data = [
  {
    totalMarks: 8,
    totalTime: 300, //In seconds
    name: "React Quiz",
    noOfQuestions: 8,
    id: 1,
    type: "MCQ",
    poster: "",
    questions: [
      {
        id: 1,
        questionNo: 1,
        question: "What is ReactJS",
        option: [
          "Server side framework",
          "User Interface framework",
          "Both A and B",
          "None of the above"
        ],
        answer: 2
      },
      {
        id: 2,
        questionNo: 2,
        question: "Which of the following is used in React.js to increase performance?",
        option: [
          "Virtual DOM",
          "Original DOM",
          "Both A and B",
          "None of the above"
        ],
        answer: 1
      },

      {
        id: 3,
        questionNo: 3,
        question: "If a function component should always render the same way given the same props, what is a simple performance optimization available for it ?",
        option: [
          "Wrap it in the React.memo higher- order component.",
          "Implement the useReducer Hook.",
          "Implement the useMemo Hook.",
          "Implement the shouldComponentUpdate lifecycle method."
        ],
        answer: 1
      },

      {
        id: 4,
        questionNo: 4,
        question: "If you want to import just the Component from the React library, what syntax do you use?",
        option: [
          "import React.Component from 'react'",
          "import [ Component ] from 'react'",
          "import Component from 'react'",
          "import { Component } from 'react'"
        ],
        answer: 4
      },
      {
        id: 5,
        questionNo: 5,
        question: "Identify the one which is used to pass data to components from outside",
        option: [
          "Render with arguments",
          "setState",
          "propTypes",
          "props"
        ],
        answer: 4
      },
      {
        id: 6,
        questionNo: 6,
        question: "Who created React.js ? ",
        option: [
          "Jordan Mike",
          "Jordan Wille",
          "Jordan Walke",
          "Tim Lee"
        ],
        answer: 3
      },
      {
        id: 7,
        questionNo: 7,
        question: "In which language is React.js written?",
        option: [
          "JS",
          "Java",
          "Python",
          "Ruby"
        ],
        answer: 1
      },
      {
        id: 8,
        questionNo: 8,
        question: "What is Babel?",
        option: [
          "JS Interpreter",
          "JS compiler",
          "JS Transpiler",
          "Both A and B",
          "All of the above"
        ],
        answer: 2
      },

    ],
  },
  {
    totalMarks: 5,
    totalTime: 180, //In seconds
    name: "JavaScript Quiz",
    noOfQuestions: 5,
    id: 2,
    type: "MCQ",
    poster: "",
    questions: [
      {
        id: 1,
        questionNo: 1,
        question: "If you want to simply loop in JS. which one you would use?",
        option: [
          "find",
          "reduce",
          "map",
          "filter"

        ],
        answer: 3
      },
      {
        id: 2,
        questionNo: 2,
        question: "Which one is not the array methods?",
        option: [
          "length()",
          "pop()",
          "slice()",
          "add()"
        ],
        answer: 4
      },
      {
        id: 3,
        questionNo: 3,
        question: "AJAX stands for?",
        option: [
          "Asynchronous javascript and XML",
          "Anonymous javascript and XML",
          "Async java and XML",
          "Asynchronous java and XML"
        ],
        answer: 1
      },
      {
        id: 4,
        questionNo: 4,
        question: "Javascript is an _______ language?",
        option: [
          "Object-oriented",
          "Object-Based",
          "Procedural",
          "None of the above"
        ],
        answer: 1
      },
      {
        id: 5,
        questionNo: 5,
        question: "Which of the following keywords is used to define a variable in Javascript?",
        option: [
          "var",
          "let",
          "Both A and B",
          "None of the above"
        ],
        answer: 3
      },
    ],
  },
  {
    totalMarks: 7,
    totalTime: 300, //In seconds
    name: "HTML Quiz",
    noOfQuestions: 7,
    id: 3,
    type: "MCQ",
    poster: "",
    questions: [
      {
        id: 1,
        questionNo: 1,
        question: "HTML stands for?",
        option: [
          "Hyper Text Markup Language",
          "Hyper Text Markdown Language",
          "Hyper Title Markup Language",
          "High Text Markup Language"
        ],
        answer: 1
      },
      {
        id: 2,
        questionNo: 2,
        question: "How many sizes of headers are available in HTML by default?",
        option: [
          "5",
          "1",
          "3",
          "6"
        ],
        answer: 4
      },
      {
        id: 3,
        questionNo: 3,
        question: "What is the smallest header in HTML by default?",
        option: [
          "h1",
          "h2",
          "h6",
          "h4"
        ],
        answer: 3
      },
      {
        id: 4,
        questionNo: 4,
        question: "What are the types of lists available in HTML?",
        option: [
          "Ordered, Unordered lists",
          "Bulleted, Numbered lists",
          "Named, Unnamed lists",
          "None of the above"
        ],
        answer: 1
      },
      {
        id: 5,
        questionNo: 5,
        question: "How to create an ordered list in HTML?",
        option: [
          "<ul>",
          "<ol>",
          "<href>",
          "<o>"
        ],
        answer: 2
      },
      {
        id: 6,
        questionNo: 6,
        question: "HTML files are saved by default with the extension?",
        option: [
          ".html",
          ".h",
          ".ht",
          ".htl"
        ],
        answer: 1
      },
      {
        id: 7,
        questionNo: 7,
        question: "We enclose HTML tags within?",
        option: [
          "{}",
          "<>",
          "</>",
          "!!"
        ],
        answer: 2
      },
    ],
  },
  {
    totalMarks: 10,
    totalTime: 480, //In seconds
    name: "CSS Quiz",
    noOfQuestions: 10,
    id: 4,
    type: "MCQ",
    poster: "",
    questions: [
      {
        id: 1,
        questionNo: 1,
        question: "The full form of CSS is:",
        option: [
          "Cascade style sheets",
          "Color and style sheets",
          "Cascading style sheets",
          "None of the above"
        ],
        answer: 3
      },
      {
        id: 2,
        questionNo: 2,
        question: " Which of the following is the correct syntax for referring the external style sheet?",
        option: [
          "<style src= example.css >",
          "<style src='example.css' >",
          "<stylesheet> example.css </stylesheet>",
          "<link rel='stylesheet' type='text/css' href='example.css'>",
        ],
        answer: 4
      },
      {
        id: 3,
        questionNo: 3,
        question: "The property in CSS used to change the background color of an element is -",
        option: [
          "bgcolor",
          "color",
          "background - color",
          "All of the above"
        ],
        answer: 3
      },
      {
        id: 4,
        questionNo: 4,
        question: "The property in CSS used to change the text color of an element is -",
        option: [
          "bgcolor",
          "color",
          "background - color",
          "All of the above",
        ],
        answer: 2
      },
      {
        id: 5,
        questionNo: 5,
        question: " The CSS property used to control the element's font-size is -",
        option: [
          "text - style",
          "text - size",
          "font - size",
          "None of the above",
        ],
        answer: 3
      },
      {
        id: 6,
        questionNo: 6,
        question: "The HTML attribute used to define the inline styles is - ",
        option: [
          "style",
          "styles",
          "class",
          "None of the above",
        ],
        answer: 1
      },
      {
        id: 7,
        questionNo: 7,
        question: " Which of the following CSS property is used to set the background image of an element?",
        option: [
          "background - attachment",
          "background - image",
          "background - color",
          "None of the above",
        ],
        answer: 2
      },
      {
        id: 8,
        questionNo: 8,
        question: "  Which of the following is the correct syntax to make the background-color of all paragraph elements to yellow?",
        option: [
          "p { background- color : yellow;}",
          "p { background- color : #yellow;} ",
          "all { background- color : yellow;}",
          "all p { background - color : #yellow; } ",
        ],
        answer: 1
      },
      {
        id: 9,
        questionNo: 9,
        question: "Which of the following is the correct syntax to display the hyperlinks without any underline?",
        option: [
          "a { text- decoration : underline;} ",
          "a { decoration: no - underline; } ",
          "a { text - decoration : none; } ",
          "None of the above",
        ],
        answer: 3
      },
      {
        id: 10,
        questionNo: 10,
        question: "Which of the following property is used as the shorthand property for the padding properties?",
        option: [
          "padding - left",
          "padding - right",
          "padding",
          "All of the above",
        ],
        answer: 3
      },
    ],

  }
]