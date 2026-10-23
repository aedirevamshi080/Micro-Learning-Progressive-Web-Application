const courseId = localStorage.getItem("selectedCourse");
const urlParams = new URLSearchParams(window.location.search);
let currentPage = parseInt(urlParams.get("page") || localStorage.getItem(`lessonPage_${courseId}`) || "1", 10);

const lessons = {
  1: {
    title: "HTML Basics",
    pages: [
      {
        header: "Introduction to HTML",
        content: `
          <img src="https://via.placeholder.com/800x250?text=HTML+Intro" alt="HTML Intro" class="img-fluid mb-4" />
          <p>HTML is the foundation of every web page. It defines the structure of content using tags and semantic elements.</p>
          <ul>
            <li>The browser reads HTML to render pages</li>
            <li>Elements like &lt;html&gt;, &lt;head&gt;, and &lt;body&gt; define page structure</li>
            <li>Metadata and title tags help search engines understand your page</li>
          </ul>
        `
      },
      {
        header: "Headings, Paragraphs, and Text",
        content: `
          <img src="https://via.placeholder.com/800x250?text=HTML+Text" alt="HTML Text" class="img-fluid mb-4" />
          <p>Learn how to use headings, paragraphs, and text formatting to organize content.</p>
          <ul>
            <li>&lt;h1&gt; to &lt;h6&gt; for headings</li>
            <li>&lt;p&gt; for paragraphs and &lt;strong&gt;/&lt;em&gt; for emphasis</li>
            <li>Line breaks with &lt;br&gt; and grouping with &lt;div&gt;</li>
          </ul>
        `
      },
      {
        header: "Links and Navigation",
        content: `
          <img src="https://via.placeholder.com/800x250?text=HTML+Links" alt="HTML Links" class="img-fluid mb-4" />
          <p>Links connect pages and create navigation across websites.</p>
          <ul>
            <li>The &lt;a href="..."&gt; tag creates hyperlinks</li>
            <li>Use relative and absolute URLs</li>
            <li>Open links in a new tab with target="_blank"</li>
          </ul>
        `
      },
      {
        header: "Images and Media",
        content: `
          <img src="https://via.placeholder.com/800x250?text=HTML+Images" alt="HTML Images" class="img-fluid mb-4" />
          <p>Images make pages visual and engaging.</p>
          <ul>
            <li>Use &lt;img src="..." alt="..."&gt; for images</li>
            <li>The alt attribute improves accessibility</li>
            <li>Use correct file formats like JPG, PNG, and SVG</li>
          </ul>
        `
      },
      {
        header: "Lists and Tables",
        content: `
          <img src="https://via.placeholder.com/800x250?text=HTML+Tables" alt="HTML Tables" class="img-fluid mb-4" />
          <p>Lists and tables structure grouped and tabular content.</p>
          <div class="table-responsive mb-3">
            <table class="table table-bordered">
              <thead>
                <tr><th>List Type</th><th>Usage</th></tr>
              </thead>
              <tbody>
                <tr><td>&lt;ul&gt;</td><td>Unordered list</td></tr>
                <tr><td>&lt;ol&gt;</td><td>Ordered list</td></tr>
                <tr><td>&lt;table&gt;</td><td>Tabular data</td></tr>
              </tbody>
            </table>
          </div>
          <p>Use &lt;li&gt; for list items and &lt;tr&gt;, &lt;td&gt; for table rows and cells.</p>
        `
      },
      {
        header: "Forms and Inputs",
        content: `
          <img src="https://via.placeholder.com/800x250?text=HTML+Forms" alt="HTML Forms" class="img-fluid mb-4" />
          <p>Forms let users submit information to your website.</p>
          <ul>
            <li>Use &lt;form&gt; to group input fields</li>
            <li>&lt;input&gt; types include text, email, password, and submit</li>
            <li>Labels and placeholders improve usability</li>
          </ul>
        `
      },
      {
        header: "Semantic HTML",
        content: `
          <img src="https://via.placeholder.com/800x250?text=HTML+Semantic" alt="HTML Semantic" class="img-fluid mb-4" />
          <p>Semantic tags improve accessibility and SEO.</p>
          <ul>
            <li>&lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;footer&gt;</li>
            <li>&lt;article&gt; and &lt;section&gt; for content areas</li>
            <li>&lt;aside&gt; for related information</li>
          </ul>
        `
      },
      {
        header: "HTML Best Practices",
        content: `
          <img src="https://via.placeholder.com/800x250?text=HTML+Best+Practices" alt="HTML Best Practices" class="img-fluid mb-4" />
          <p>Build reliable pages using good HTML habits.</p>
          <ul>
            <li>Write clean, readable markup</li>
            <li>Use semantic tags for structure</li>
            <li>Keep images accessible with alt text</li>
          </ul>
        `
      }
    ]
  },
  2: {
    title: "CSS Basics",
    pages: [
      {
        header: "Introduction to CSS",
        content: `
          <img src="https://via.placeholder.com/800x250?text=CSS+Intro" alt="CSS Intro" class="img-fluid mb-4" />
          <p>CSS controls the visual presentation of HTML content.</p>
          <ul>
            <li>Styles are applied using selectors and properties</li>
            <li>External stylesheets keep markup clean</li>
            <li>CSS can control color, layout, spacing, and typography</li>
          </ul>
        `
      },
      {
        header: "Selectors and Specificity",
        content: `
          <img src="https://via.placeholder.com/800x250?text=CSS+Selectors" alt="CSS Selectors" class="img-fluid mb-4" />
          <p>Selectors target HTML elements for styling.</p>
          <ul>
            <li>Type selectors match tags like p and h1</li>
            <li>Class selectors use .classname</li>
            <li>ID selectors use #id and are more specific</li>
          </ul>
        `
      },
      {
        header: "Box Model and Spacing",
        content: `
          <img src="https://via.placeholder.com/800x250?text=CSS+Box+Model" alt="CSS Box Model" class="img-fluid mb-4" />
          <p>The box model defines element size and spacing.</p>
          <div class="table-responsive mb-3">
            <table class="table table-bordered">
              <thead>
                <tr><th>Property</th><th>Description</th></tr>
              </thead>
              <tbody>
                <tr><td>margin</td><td>Space outside the border</td></tr>
                <tr><td>border</td><td>Edge around the element</td></tr>
                <tr><td>padding</td><td>Space inside the border</td></tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        header: "Colors and Typography",
        content: `
          <img src="https://via.placeholder.com/800x250?text=CSS+Typography" alt="CSS Typography" class="img-fluid mb-4" />
          <p>Use CSS to style text and color schemes.</p>
          <ul>
            <li>color sets text color</li>
            <li>font-family controls typeface</li>
            <li>line-height and letter-spacing improve readability</li>
          </ul>
        `
      },
      {
        header: "Layout with Flexbox",
        content: `
          <img src="https://via.placeholder.com/800x250?text=CSS+Flexbox" alt="CSS Flexbox" class="img-fluid mb-4" />
          <p>Flexbox helps arrange items in a flexible row or column.</p>
          <ul>
            <li>Use display: flex to create a flex container</li>
            <li>justify-content controls horizontal alignment</li>
            <li>align-items controls vertical alignment</li>
          </ul>
        `
      },
      {
        header: "Layout with Grid",
        content: `
          <img src="https://via.placeholder.com/800x250?text=CSS+Grid" alt="CSS Grid" class="img-fluid mb-4" />
          <p>CSS Grid is ideal for complex two-dimensional layouts.</p>
          <ul>
            <li>Use display: grid and grid-template-columns</li>
            <li>Define rows and columns with grid lines</li>
            <li>Place items precisely using grid-area</li>
          </ul>
        `
      },
      {
        header: "Responsive Design",
        content: `
          <img src="https://via.placeholder.com/800x250?text=CSS+Responsive" alt="CSS Responsive" class="img-fluid mb-4" />
          <p>Responsive CSS adjusts layout for different screen sizes.</p>
          <ul>
            <li>Use media queries to change styles for devices</li>
            <li>Set width using percentages and max-width</li>
            <li>Make images and containers fluid</li>
          </ul>
        `
      },
      {
        header: "CSS Best Practices",
        content: `
          <img src="https://via.placeholder.com/800x250?text=CSS+Best+Practices" alt="CSS Best Practices" class="img-fluid mb-4" />
          <p>Write maintainable and scalable CSS.</p>
          <ul>
            <li>Use reusable classes and clear naming conventions</li>
            <li>Avoid inline styles when possible</li>
            <li>Keep styles organized into sections and files</li>
          </ul>
        `
      }
    ]
  },
  3: {
    title: "JavaScript Fundamentals",
    pages: [
      {
        header: "Introduction to JavaScript",
        content: `
          <img src="https://via.placeholder.com/800x250?text=JS+Intro" alt="JavaScript Intro" class="img-fluid mb-4" />
          <p>JavaScript brings websites to life by adding behavior and interactivity.</p>
          <ul>
            <li>It runs in the browser and can change page content dynamically</li>
            <li>JavaScript interacts with HTML through the DOM</li>
            <li>Use scripts to respond to user actions</li>
          </ul>
        `
      },
      {
        header: "Variables and Data Types",
        content: `
          <img src="https://via.placeholder.com/800x250?text=JS+Variables" alt="JavaScript Variables" class="img-fluid mb-4" />
          <p>Store values using variables and understand data types.</p>
          <ul>
            <li>let, const, and var declare variables</li>
            <li>Common types include numbers, strings, booleans, arrays, and objects</li>
            <li>Use const for values that don’t change</li>
          </ul>
        `
      },
      {
        header: "Operators and Expressions",
        content: `
          <img src="https://via.placeholder.com/800x250?text=JS+Operators" alt="JavaScript Operators" class="img-fluid mb-4" />
          <p>Operators perform calculations and comparisons in code.</p>
          <ul>
            <li>Arithmetic operators: +, -, *, /</li>
            <li>Comparison operators: ==, ===, !=, !==</li>
            <li>Logical operators: &&, ||, !</li>
          </ul>
        `
      },
      {
        header: "Functions and Control Flow",
        content: `
          <img src="https://via.placeholder.com/800x250?text=JS+Functions" alt="JavaScript Functions" class="img-fluid mb-4" />
          <p>Functions group reusable code and control flow decides what runs.</p>
          <ul>
            <li>function createMessage() {} defines a function</li>
            <li>if, else if, and else choose between paths</li>
            <li>for and while loops repeat code</li>
          </ul>
        `
      },
      {
        header: "DOM and Events",
        content: `
          <img src="https://via.placeholder.com/800x250?text=JS+DOM" alt="JavaScript DOM" class="img-fluid mb-4" />
          <p>DOM APIs let JavaScript modify page content and structure.</p>
          <ul>
            <li>document.getElementById and querySelector select elements</li>
            <li>addEventListener responds to clicks, input, and submit events</li>
            <li>Change text, attributes, and classes dynamically</li>
          </ul>
        `
      },
      {
        header: "Arrays and Objects",
        content: `
          <img src="https://via.placeholder.com/800x250?text=JS+Arrays" alt="JavaScript Arrays" class="img-fluid mb-4" />
          <p>Use arrays and objects to store collections of data.</p>
          <ul>
            <li>Arrays store ordered lists: [1, 2, 3]</li>
            <li>Objects store key/value pairs: { name: 'Alice' }</li>
            <li>Use loops and methods like map, filter, and forEach</li>
          </ul>
        `
      },
      {
        header: "APIs and Fetch",
        content: `
          <img src="https://via.placeholder.com/800x250?text=JS+APIs" alt="JavaScript APIs" class="img-fluid mb-4" />
          <p>Fetch external data from APIs and display it on your page.</p>
          <ul>
            <li>fetch(url).then(response => response.json())</li>
            <li>Use async/await for easier asynchronous code</li>
            <li>Handle success and failure with then/catch</li>
          </ul>
        `
      },
      {
        header: "JavaScript Best Practices",
        content: `
          <img src="https://via.placeholder.com/800x250?text=JS+Best+Practices" alt="JavaScript Best Practices" class="img-fluid mb-4" />
          <p>Write clean, maintainable JavaScript for better apps.</p>
          <ul>
            <li>Use const and let rather than var</li>
            <li>Name variables clearly and keep functions small</li>
            <li>Comment intent and avoid duplicate code</li>
          </ul>
        `
      }
    ]
  },
  4: {
    title: "Python Programming",
    pages: [
      {
        header: "Introduction to Python",
        content: `
          <img src="https://via.placeholder.com/800x250?text=Python+Intro" alt="Python Intro" class="img-fluid mb-4" />
          <p>Python is a human-friendly programming language used for many types of projects.</p>
          <ul>
            <li>Simple syntax makes Python easy to read</li>
            <li>It is widely used for web apps, automation, and data analysis</li>
            <li>Python files use the .py extension</li>
          </ul>
        `
      },
      {
        header: "Variables and Data Types",
        content: `
          <img src="https://via.placeholder.com/800x250?text=Python+Variables" alt="Python Variables" class="img-fluid mb-4" />
          <p>Python stores values in variables without declaring types explicitly.</p>
          <ul>
            <li>Strings use quotes, e.g. 'hello'</li>
            <li>Integers and floats store numbers</li>
            <li>Booleans store True or False values</li>
          </ul>
        `
      },
      {
        header: "Conditionals and Logic",
        content: `
          <img src="https://via.placeholder.com/800x250?text=Python+Conditionals" alt="Python Conditionals" class="img-fluid mb-4" />
          <p>Control program flow with conditional statements.</p>
          <ul>
            <li>If, elif, and else choose different actions</li>
            <li>Use comparisons like ==, !=, >, and <</li>
            <li>Combine conditions with and/or/not</li>
          </ul>
        `
      },
      {
        header: "Loops and Iteration",
        content: `
          <img src="https://via.placeholder.com/800x250?text=Python+Loops" alt="Python Loops" class="img-fluid mb-4" />
          <p>Repeat actions with for and while loops.</p>
          <ul>
            <li>for item in list: loops through a collection</li>
            <li>while condition: repeats while true</li>
            <li>break and continue alter loop behavior</li>
          </ul>
        `
      },
      {
        header: "Functions and Reuse",
        content: `
          <img src="https://via.placeholder.com/800x250?text=Python+Functions" alt="Python Functions" class="img-fluid mb-4" />
          <p>Functions bundle reusable code with def.</p>
          <ul>
            <li>def greet(name): defines a function</li>
            <li>return sends a value back to the caller</li>
            <li>Functions help make code modular and easy to test</li>
          </ul>
        `
      },
      {
        header: "Lists and Dictionaries",
        content: `
          <img src="https://via.placeholder.com/800x250?text=Python+Data+Structures" alt="Python Data Structures" class="img-fluid mb-4" />
          <p>Use lists and dictionaries to organize related data.</p>
          <ul>
            <li>Lists are ordered collections: [1, 2, 3]</li>
            <li>Dictionaries store key-value pairs: {'name': 'Alex'}</li>
            <li>Access values by index or key</li>
          </ul>
        `
      },
      {
        header: "File Handling",
        content: `
          <img src="https://via.placeholder.com/800x250?text=Python+Files" alt="Python Files" class="img-fluid mb-4" />
          <p>Read and write files with Python.</p>
          <ul>
            <li>open('file.txt', 'r') reads a file</li>
            <li>open('file.txt', 'w') writes a file</li>
            <li>Use with open(...) as file: for safe file handling</li>
          </ul>
        `
      },
      {
        header: "Python Best Practices",
        content: `
          <img src="https://via.placeholder.com/800x250?text=Python+Best+Practices" alt="Python Best Practices" class="img-fluid mb-4" />
          <p>Write clean Python code with consistent style.</p>
          <ul>
            <li>Use meaningful variable names</li>
            <li>Keep functions short and readable</li>
            <li>Follow PEP 8 conventions when possible</li>
          </ul>
        `
      }
    ]
  },
  5: {
    title: "React Basics",
    pages: [
      {
        header: "Introduction to React",
        content: `
          <img src="https://via.placeholder.com/800x250?text=React+Intro" alt="React Intro" class="img-fluid mb-4" />
          <p>React is a library for building component-based user interfaces.</p>
          <ul>
            <li>UI is built from reusable components</li>
            <li>JSX mixes JavaScript with HTML-like syntax</li>
            <li>React updates the UI automatically when state changes</li>
          </ul>
        `
      },
      {
        header: "JSX and Elements",
        content: `
          <img src="https://via.placeholder.com/800x250?text=React+JSX" alt="React JSX" class="img-fluid mb-4" />
          <p>JSX allows HTML-like syntax inside JavaScript.</p>
          <ul>
            <li>Use curly braces for JavaScript expressions</li>
            <li>All JSX tags must be closed</li>
            <li>Use className instead of class for CSS</li>
          </ul>
        `
      },
      {
        header: "Components and Props",
        content: `
          <img src="https://via.placeholder.com/800x250?text=React+Components" alt="React Components" class="img-fluid mb-4" />
          <p>Components are the building blocks of React apps.</p>
          <ul>
            <li>Function components are simple reusable pieces</li>
            <li>Props pass data from parent to child</li>
            <li>Components can render other components</li>
          </ul>
        `
      },
      {
        header: "State with useState",
        content: `
          <img src="https://via.placeholder.com/800x250?text=React+State" alt="React State" class="img-fluid mb-4" />
          <p>State keeps component data that changes over time.</p>
          <ul>
            <li>useState creates state variables</li>
            <li>State changes trigger re-renders</li>
            <li>Update state using the state setter function</li>
          </ul>
        `
      },
      {
        header: "Events and Interaction",
        content: `
          <img src="https://via.placeholder.com/800x250?text=React+Events" alt="React Events" class="img-fluid mb-4" />
          <p>React responds to user actions with event handlers.</p>
          <ul>
            <li>Use onClick, onChange, onSubmit, and more</li>
            <li>Pass event handlers as props to child components</li>
            <li>Prevent default form behavior with event.preventDefault()</li>
          </ul>
        `
      },
      {
        header: "Rendering Lists",
        content: `
          <img src="https://via.placeholder.com/800x250?text=React+Lists" alt="React Lists" class="img-fluid mb-4" />
          <p>Render arrays of items using map().</p>
          <ul>
            <li>Use map() to turn an array into a list of elements</li>
            <li>Each list item needs a unique key property</li>
            <li>Keys help React update lists efficiently</li>
          </ul>
        `
      },
      {
        header: "React Best Practices",
        content: `
          <img src="https://via.placeholder.com/800x250?text=React+Best+Practices" alt="React Best Practices" class="img-fluid mb-4" />
          <p>Keep components reusable and easy to maintain.</p>
          <ul>
            <li>Split UI into small components</li>
            <li>Avoid unnecessary state and side effects</li>
            <li>Keep JSX readable and avoid deeply nested markup</li>
          </ul>
        `
      },
      {
        header: "Building a React App",
        content: `
          <img src="https://via.placeholder.com/800x250?text=React+App" alt="React App" class="img-fluid mb-4" />
          <p>Learn how React apps are organized and how components work together.</p>
          <ul>
            <li>Use a root component to render app content</li>
            <li>Organize files by feature or component type</li>
            <li>Keep state near the components that use it</li>
          </ul>
        `
      }
    ]
  },
  6: {
    title: "Node.js Introduction",
    pages: [
      {
        header: "Getting Started with Node.js",
        content: `
          <img src="https://via.placeholder.com/800x250?text=Node+Intro" alt="Node Intro" class="img-fluid mb-4" />
          <p>Node.js runs JavaScript outside the browser on the server.</p>
          <ul>
            <li>Install Node.js and run scripts with node filename.js</li>
            <li>Use npm to manage packages and dependencies</li>
            <li>Node.js is great for building backend applications</li>
          </ul>
        `
      },
      {
        header: "Modules and Packages",
        content: `
          <img src="https://via.placeholder.com/800x250?text=Node+Modules" alt="Node Modules" class="img-fluid mb-4" />
          <p>Modules let you organize code across files.</p>
          <ul>
            <li>Require built-in modules like fs and path</li>
            <li>Install third-party packages with npm</li>
            <li>Use require('module') to import packages</li>
          </ul>
        `
      },
      {
        header: "Express Basics",
        content: `
          <img src="https://via.placeholder.com/800x250?text=Express+Basics" alt="Express Basics" class="img-fluid mb-4" />
          <p>Express is a lightweight framework for building web servers.</p>
          <ul>
            <li>Create an Express app and define routes</li>
            <li>Use app.get and app.post to handle requests</li>
            <li>Send responses with res.send and res.json</li>
          </ul>
        `
      },
      {
        header: "Routing and Middleware",
        content: `
          <img src="https://via.placeholder.com/800x250?text=Express+Routing" alt="Express Routing" class="img-fluid mb-4" />
          <p>Routing defines how your app responds to URLs.</p>
          <ul>
            <li>Routes map URLs to request handlers</li>
            <li>Middleware runs before route handlers</li>
            <li>Use express.json() to parse JSON request bodies</li>
          </ul>
        `
      },
      {
        header: "REST APIs with JSON",
        content: `
          <img src="https://via.placeholder.com/800x250?text=Node+API" alt="Node API" class="img-fluid mb-4" />
          <p>Build APIs that return JSON data for clients.</p>
          <ul>
            <li>Use res.json({}) to return JSON responses</li>
            <li>Define endpoints for GET, POST, PUT, and DELETE</li>
            <li>Design APIs around resources such as users and products</li>
          </ul>
        `
      },
      {
        header: "Working with Files",
        content: `
          <img src="https://via.placeholder.com/800x250?text=Node+Files" alt="Node Files" class="img-fluid mb-4" />
          <p>Read and write files with the fs module.</p>
          <ul>
            <li>Use fs.readFile and fs.writeFile</li>
            <li>Handle asynchronous file operations with callbacks or promises</li>
            <li>Store simple data in JSON files for learning projects</li>
          </ul>
        `
      },
      {
        header: "Node.js Best Practices",
        content: `
          <img src="https://via.placeholder.com/800x250?text=Node+Best+Practices" alt="Node Best Practices" class="img-fluid mb-4" />
          <p>Organize server code for reliability and maintainability.</p>
          <ul>
            <li>Keep route logic separate from app setup</li>
            <li>Use middleware for repeated tasks like parsing JSON</li>
            <li>Handle errors gracefully and return appropriate status codes</li>
          </ul>
        `
      },
      {
        header: "Deploying a Node App",
        content: `
          <img src="https://via.placeholder.com/800x250?text=Node+Deploy" alt="Node Deploy" class="img-fluid mb-4" />
          <p>Prepare a Node.js app for deployment and production use.</p>
          <ul>
            <li>Use environment variables for configuration</li>
            <li>Keep dependencies updated and secure</li>
            <li>Test your app before releasing it</li>
          </ul>
        `
      }
    ]
  }
};

const user = JSON.parse(localStorage.getItem("loggedUser"));

if (!user || !user.email) {
  window.location.href = "login.html";
}

if (!courseId || !lessons[courseId]) {
  window.location.href = "courses.html";
}

const lessonTitle = document.getElementById("lessonTitle");
const pageIndicator = document.getElementById("pageIndicator");
const lessonContent = document.getElementById("lessonContent");
const prevButton = document.getElementById("prevPageBtn");
const nextButton = document.getElementById("nextPageBtn");

const courseLessons = lessons[courseId];
const maxPage = courseLessons.pages.length;

function clampPage(page) {
  return Math.min(Math.max(page, 1), maxPage);
}

function updateUrl(page) {
  const params = new URLSearchParams(window.location.search);
  params.set("page", page);
  window.history.replaceState({}, "", `${window.location.pathname}?${params}`);
  localStorage.setItem(`lessonPage_${courseId}`, page);
}

function updateNavigation() {
  if (pageIndicator) {
    pageIndicator.innerText = `Page ${currentPage} of ${maxPage}`;
  }
  if (prevButton) {
    prevButton.disabled = currentPage <= 1;
  }
  if (nextButton) {
    nextButton.disabled = currentPage >= maxPage;
  }
}

function renderLesson() {
  currentPage = clampPage(currentPage);
  const pageData = courseLessons.pages[currentPage - 1];

  if (lessonTitle) {
    lessonTitle.innerText = `${courseLessons.title} — ${pageData.header}`;
  }
  if (lessonContent) {
    lessonContent.innerHTML = pageData.content;
  }
  updateUrl(currentPage);
  updateNavigation();
}

function changePage(delta) {
  currentPage = clampPage(currentPage + delta);
  renderLesson();
}

function completeLesson() {
  const currentUser = JSON.parse(localStorage.getItem("loggedUser"));

  if (!currentUser || !currentUser.email) {
    window.location.href = "login.html";
    return;
  }

  window.dbPromise
    .then(() => {
      const tx = db.transaction(["progress"], "readwrite");
      const store = tx.objectStore("progress");

      store.add({
        userEmail: currentUser.email,
        courseId: courseId,
        completed: true,
        date: new Date(),
        page: currentPage
      });

      tx.oncomplete = () => {
        alert("Lesson Completed");
        window.location.href = "dashboard.html";
      };

      tx.onerror = () => {
        alert("Could not save progress. Please try again.");
      };
    })
    .catch((error) => {
      console.error("Progress save error:", error);
      alert("Unable to save progress right now.");
    });
}

renderLesson();
