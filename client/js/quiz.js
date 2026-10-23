const selectedCourse = localStorage.getItem("selectedCourse");
const user = JSON.parse(localStorage.getItem("loggedUser"));

if (!user || !user.email) {
  window.location.href = "login.html";
}

if (!selectedCourse) {
  window.location.href = "courses.html";
}

const quizzes = {
  1: [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyper Transfer Machine Language",
        "Hyperlink and Text Markup Language"
      ],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "Which tag is used to create a hyperlink?",
      options: ["<a>", "<img>", "<link>", "<href>"],
      answer: "<a>"
    },
    {
      question: "Which element is used for the main heading of a page?",
      options: ["<h1>", "<head>", "<title>", "<header>"],
      answer: "<h1>"
    },
    {
      question: "Which attribute is used to add an image source?",
      options: ["src", "href", "alt", "link"],
      answer: "src"
    },
    {
      question: "Which element is used to create a form?",
      options: ["<form>", "<input>", "<fieldset>", "<section>"],
      answer: "<form>"
    },
    {
      question: "Which tag defines a row inside a table?",
      options: ["<tr>", "<td>", "<th>", "<table>"],
      answer: "<tr>"
    },
    {
      question: "Which element is best for page navigation links?",
      options: ["<nav>", "<div>", "<menu>", "<section>"],
      answer: "<nav>"
    },
    {
      question: "What is the recommended attribute for meaningful images?",
      options: ["title", "src", "alt", "href"],
      answer: "alt"
    }
  ],
  2: [
    {
      question: "What does CSS stand for?",
      options: [
        "Colorful Style Sheets",
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Computer Style Sheets"
      ],
      answer: "Cascading Style Sheets"
    },
    {
      question: "Which property controls the text color?",
      options: ["font-color", "color", "text-color", "foreground"],
      answer: "color"
    },
    {
      question: "How do you select an element with id 'header'?",
      options: [".header", "#header", "header", "*header"],
      answer: "#header"
    },
    {
      question: "Which CSS property is used to set font size?",
      options: ["font-size", "text-size", "font-style", "size"],
      answer: "font-size"
    },
    {
      question: "What box model property adds space inside an element?",
      options: ["margin", "padding", "border", "width"],
      answer: "padding"
    },
    {
      question: "Which value makes an element a flex container?",
      options: ["display: inline", "display: grid", "display: flex", "display: block"],
      answer: "display: flex"
    },
    {
      question: "Which property adds a subtle animation effect?",
      options: ["animation", "transition", "transform", "opacity"],
      answer: "transition"
    },
    {
      question: "Which selector targets all paragraphs?",
      options: ["p", ".p", "#p", "paragraph"],
      answer: "p"
    }
  ],
  3: [
    {
      question: "Which keyword declares a constant in JavaScript?",
      options: ["let", "var", "const", "constant"],
      answer: "const"
    },
    {
      question: "How do you add a comment in JavaScript?",
      options: ["<!-- comment -->", "// comment", "/* comment */", "Both B and C"],
      answer: "Both B and C"
    },
    {
      question: "Which method selects an element by ID?",
      options: ["getElementById()", "querySelectorAll()", "getElementsByTagName()", "selectById()"],
      answer: "getElementById()"
    },
    {
      question: "What is the correct way to write a function?",
      options: ["function myFunc() {}", "func myFunc() {}", "def myFunc() :", "function = myFunc() {}"],
      answer: "function myFunc() {}"
    },
    {
      question: "Which operator is used to compare values without type conversion?",
      options: ["==", "!=", "===", "!=="],
      answer: "==="
    },
    {
      question: "Which event fires when an element is clicked?",
      options: ["onchange", "onclick", "onsubmit", "onload"],
      answer: "onclick"
    },
    {
      question: "Which array method adds an item to the end?",
      options: ["shift()", "pop()", "push()", "unshift()"],
      answer: "push()"
    },
    {
      question: "What is the correct syntax to change page content?",
      options: ["document.getElementById('demo').innerHTML = 'Hi'", "document.getElementByName('demo') = 'Hi'", "document.querySelector('#demo').text = 'Hi'", "document.write('Hi')"],
      answer: "document.getElementById('demo').innerHTML = 'Hi'"
    }
  ],
  4: [
    {
      question: "Which symbol is used to start a Python comment?",
      options: ["//", "#", "/*", "--"],
      answer: "#"
    },
    {
      question: "How do you create a function in Python?",
      options: ["function myFunc():", "def myFunc():", "fun myFunc():", "create myFunc():"],
      answer: "def myFunc():"
    },
    {
      question: "Which data type is used to store text in Python?",
      options: ["string", "int", "bool", "char"],
      answer: "string"
    },
    {
      question: "How do you start a for loop in Python?",
      options: ["for i in range(5):", "for (i=0; i<5; i++)", "foreach i in range(5)", "loop i from 0 to 5"],
      answer: "for i in range(5):"
    },
    {
      question: "Which Python collection stores key-value pairs?",
      options: ["list", "tuple", "dictionary", "set"],
      answer: "dictionary"
    },
    {
      question: "Which keyword is used to create a block of code?",
      options: ["{ }", "begin end", "indentation", "<>"],
      answer: "indentation"
    },
    {
      question: "What does len([1, 2, 3]) return?",
      options: ["1", "2", "3", "4"],
      answer: "3"
    },
    {
      question: "Which statement checks a condition in Python?",
      options: ["if", "when", "check", "case"],
      answer: "if"
    }
  ],
  5: [
    {
      question: "What does JSX stand for in React?",
      options: ["JavaScript XML", "JavaScript eXtended", "JavaScript Syntax", "JavaScript Export"],
      answer: "JavaScript XML"
    },
    {
      question: "How do you define a component in React?",
      options: ["function MyComponent() {}", "component MyComponent() {}", "def MyComponent() {}", "react MyComponent() {}"],
      answer: "function MyComponent() {}"
    },
    {
      question: "Which hook is used for state management?",
      options: ["useEffect", "useState", "useContext", "useMemo"],
      answer: "useState"
    },
    {
      question: "How do you pass data to a child component?",
      options: ["state", "props", "hooks", "context"],
      answer: "props"
    },
    {
      question: "What is the correct way to return JSX from a component?",
      options: ["return (<div></div>)", "render (<div></div>)", "output (<div></div>)", "show (<div></div>)"],
      answer: "return (<div></div>)"
    },
    {
      question: "Which element should you use for rendering repeated data?",
      options: ["map()", "filter()", "reduce()", "sort()"],
      answer: "map()"
    },
    {
      question: "What is a prop in React?",
      options: ["Component state", "Data passed to a component", "A hook", "CSS style"],
      answer: "Data passed to a component"
    },
    {
      question: "Which hook runs when a component mounts?",
      options: ["useState", "useEffect", "useMemo", "useCallback"],
      answer: "useEffect"
    }
  ],
  6: [
    {
      question: "What is Node.js?",
      options: ["A database", "A JavaScript runtime", "A CSS framework", "A text editor"],
      answer: "A JavaScript runtime"
    },
    {
      question: "Which package is commonly used to build web servers in Node.js?",
      options: ["React", "Express", "Angular", "Vue"],
      answer: "Express"
    },
    {
      question: "Which command installs a package with npm?",
      options: ["npm install package", "node install package", "npm get package", "install package"],
      answer: "npm install package"
    },
    {
      question: "Which file is the default entry point for a Node.js app?",
      options: ["package.json", "index.html", "index.js", "app.css"],
      answer: "index.js"
    },
    {
      question: "How do you import Express in a Node.js file?",
      options: ["const express = require('express');", "import express from 'express';", "require('express');", "const express = 'express';"],
      answer: "const express = require('express');"
    },
    {
      question: "Which file describes your project dependencies?",
      options: ["README.md", "package.json", "index.js", "server.js"],
      answer: "package.json"
    },
    {
      question: "What method sends a JSON response in Express?",
      options: ["res.sendJson()", "res.json()", "res.send()", "res.data()"],
      answer: "res.json()"
    },
    {
      question: "Which Node.js object contains environment variables?",
      options: ["process.env", "env.process", "system.env", "global.env"],
      answer: "process.env"
    }
  ]
};

const courseNames = {
  1: "HTML Basics",
  2: "CSS Basics",
  3: "JavaScript Fundamentals",
  4: "Python Programming",
  5: "React Basics",
  6: "Node.js Introduction"
};

let currentQuestionIndex = 0;
let score = 0;
const questions = quizzes[selectedCourse] || quizzes[1];

const courseTitleElement = document.getElementById("quizCourseTitle");
const questionCount = document.getElementById("questionCount");
const questionElement = document.getElementById("question");
const optionsDiv = document.getElementById("options");

if (courseTitleElement) {
  courseTitleElement.innerText = `Quiz: ${courseNames[selectedCourse] || "Course"}`;
}

function renderQuestion() {
  if (!questionElement || !optionsDiv) return;

  const current = questions[currentQuestionIndex];
  questionElement.innerText = current.question;
  if (questionCount) {
    questionCount.innerText = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  }
  optionsDiv.innerHTML = "";

  current.options.forEach((option, index) => {
    const optionId = `option-${currentQuestionIndex}-${index}`;
    optionsDiv.innerHTML += `
      <div class="form-check mb-2">
        <input class="form-check-input" type="radio" name="quizOption" value="${option}" id="${optionId}">
        <label class="form-check-label" for="${optionId}">${option}</label>
      </div>
    `;
  });
}

function submitQuiz() {
  const selected = document.querySelector('input[name="quizOption"]:checked');

  if (!selected) {
    alert("Please select an answer");
    return;
  }

  const current = questions[currentQuestionIndex];
  if (selected.value === current.answer) {
    score += 1;
  }

  currentQuestionIndex += 1;

  if (currentQuestionIndex < questions.length) {
    renderQuestion();
    return;
  }

  const percentScore = Math.round((score / questions.length) * 100);

  window.dbPromise
    .then(() => {
      const tx = db.transaction(["quiz"], "readwrite");
      const store = tx.objectStore("quiz");

      store.add({
        userEmail: user.email,
        courseId: parseInt(selectedCourse, 10),
        score: percentScore,
        total: questions.length,
        correct: score,
        date: new Date()
      });

      tx.oncomplete = () => {
        alert(`Quiz Completed. Score: ${percentScore}% (${score} of ${questions.length})`);
        localStorage.setItem("quizScore", percentScore);
        window.location.href = "certificate.html";
      };

      tx.onerror = () => {
        alert("Could not save quiz results. Please try again.");
      };
    })
    .catch((error) => {
      console.error("Quiz save error:", error);
      alert("Unable to save quiz results right now.");
    });
}

renderQuestion();
