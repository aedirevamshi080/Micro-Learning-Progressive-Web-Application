const user = JSON.parse(localStorage.getItem("loggedUser"));
const score = localStorage.getItem("quizScore");

if (!user || !user.email) {
  window.location.href = "login.html";
} else {
  const studentName = document.getElementById("studentName");
  const scoreElement = document.getElementById("score");

  if (studentName) {
    studentName.innerText = user.name;
  }

  if (scoreElement) {
    scoreElement.innerText = "Score : " + (score || "0") + "%";
  }
}

function downloadCertificate() {
  const element = document.getElementById("certificate");

  if (!element) {
    return;
  }

  html2pdf().from(element).save("Certificate.pdf");
}