const courses = [
  {
    id: 1,
    title: "HTML Basics",
    description: "Learn the structure of web pages, semantic markup, links, images, forms, and accessibility.",
    lessons: 8,
    duration: "2 hours",
    level: "Beginner",
    image: "https://via.placeholder.com/400x200?text=HTML+Basics",
    topics: [
      "HTML document structure",
      "Headings, text formatting, and links",
      "Images, tables, and forms",
      "Semantic elements and accessibility"
    ],
    highlights: [
      ["Element", "Purpose"],
      ["&lt;h1&gt; - &lt;h6&gt;", "Page headings"],
      ["&lt;a&gt;", "Links"],
      ["&lt;img&gt;", "Images"],
      ["&lt;table&gt;", "Tabular data"]
    ]
  },
  {
    id: 2,
    title: "CSS Basics",
    description: "Style websites using CSS selectors, layout, colors, responsive design, and animations.",
    lessons: 8,
    duration: "2.5 hours",
    level: "Beginner",
    image: "https://via.placeholder.com/400x200?text=CSS+Basics",
    topics: [
      "Selectors, box model, and typography",
      "Colors, backgrounds, and spacing",
      "Flexbox and grid layouts",
      "Responsive design and transitions"
    ],
    highlights: [
      ["Property", "Use"],
      ["color", "Text color"],
      ["margin", "Outer spacing"],
      ["padding", "Inner spacing"],
      ["display", "Layout behavior"]
    ]
  },
  {
    id: 3,
    title: "JavaScript Fundamentals",
    description: "Build interactive pages with JavaScript using functions, events, DOM updates, and arrays.",
    lessons: 8,
    duration: "3 hours",
    level: "Beginner",
    image: "https://via.placeholder.com/400x200?text=JavaScript+Fundamentals",
    topics: [
      "Variables, data types, and expressions",
      "Functions, conditions, and loops",
      "DOM manipulation and event handling",
      "Arrays, objects, and APIs"
    ],
    highlights: [
      ["Concept", "Example"],
      ["Variable", "let / const / var"],
      ["Function", "function myFunc() {}"],
      ["Event", "click, input, submit"],
      ["Array", "[] data collection"]
    ]
  },
  {
    id: 4,
    title: "Python Programming",
    description: "Learn Python syntax, control flow, data structures, functions, and basic scripting.",
    lessons: 8,
    duration: "3 hours",
    level: "Beginner",
    image: "https://via.placeholder.com/400x200?text=Python+Programming",
    topics: [
      "Variables and basic data types",
      "Conditionals, loops, and functions",
      "Lists, tuples, dictionaries, and sets",
      "File handling and simple scripts"
    ],
    highlights: [
      ["Type", "Example"],
      ["String", "'hello'"],
      ["Integer", "42"],
      ["List", "[1, 2, 3]"],
      ["Dictionary", "{'key': 'value'}"]
    ]
  },
  {
    id: 5,
    title: "React Basics",
    description: "Discover React components, JSX, state, props, and how to build reusable UI elements.",
    lessons: 8,
    duration: "3 hours",
    level: "Beginner",
    image: "https://via.placeholder.com/400x200?text=React+Basics",
    topics: [
      "JSX and component structure",
      "Props and component communication",
      "useState and event handling",
      "Rendering lists and conditional UI"
    ],
    highlights: [
      ["Concept", "Description"],
      ["JSX", "HTML-like syntax"],
      ["Component", "Reusable UI block"],
      ["Props", "Data from parent"],
      ["State", "Local component data"]
    ]
  },
  {
    id: 6,
    title: "Node.js Introduction",
    description: "Explore server-side JavaScript, Express basics, REST APIs, and working with JSON.",
    lessons: 8,
    duration: "3 hours",
    level: "Beginner",
    image: "https://via.placeholder.com/400x200?text=Node.js+Introduction",
    topics: [
      "Node runtime and packages",
      "Express routes and middleware",
      "JSON responses and APIs",
      "Building a simple backend"
    ],
    highlights: [
      ["Type", "Example"],
      ["runtime", "node index.js"],
      ["package", "npm install express"],
      ["route", "app.get('/')"],
      ["JSON", "res.json({})"]
    ]
  }
];

const container = document.getElementById("courseContainer");

if (container) {
  courses.forEach(course => {
    container.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="${course.image}" class="card-img-top" alt="${course.title}" style="height: 180px; object-fit: cover;">
          <div class="card-body d-flex flex-column">
            <h4>${course.title}</h4>
            <p>${course.description}</p>
            <ul class="list-unstyled mb-3 small course-meta">
              <li><strong>Lessons:</strong> ${course.lessons}</li>
              <li><strong>Duration:</strong> ${course.duration}</li>
              <li><strong>Level:</strong> ${course.level}</li>
            </ul>
            <h6>Key Topics</h6>
            <ul class="small mb-3">
              ${course.topics.map(topic => `<li>${topic}</li>`).join("")}
            </ul>
            <div class="table-responsive mb-3">
              <table class="table table-sm table-bordered mb-0">
                <tbody>
                  ${course.highlights.map(row => `<tr><th>${row[0]}</th><td>${row[1]}</td></tr>`).join("")}
                </tbody>
              </table>
            </div>
            <button class="btn btn-primary mt-auto" onclick="openCourse(${course.id})">
              Open Course
            </button>
          </div>
        </div>
      </div>
    `;
  });
}

function openCourse(id) {
  localStorage.setItem("selectedCourse", id);
  window.location.href = "lesson.html";
}
