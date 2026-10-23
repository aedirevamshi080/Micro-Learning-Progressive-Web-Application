const user = JSON.parse(localStorage.getItem("loggedUser"));

if (!user || !user.email) {
  window.location.href = "login.html";
} else {
  const welcome = document.getElementById("welcome");

  if (welcome) {
    welcome.innerText = "Hello, " + user.name;
  }

  window.dbPromise
    .then(() => {
      const tx = db.transaction(["progress"], "readonly");
      const store = tx.objectStore("progress");
      const request = store.getAll();

      request.onsuccess = () => {
        const data = request.result.filter((item) => item.userEmail === user.email);
        const completed = data.length;

        const completedCount = document.getElementById("completedCount");
        const progressBar = document.getElementById("progressBar");

        if (completedCount) {
          completedCount.innerText = completed;
        }

        if (progressBar) {
          const percentage = (completed / 10) * 100;
          progressBar.style.width = percentage + "%";
          progressBar.innerText = percentage + "%";
        }
      };

      const quizTx = db.transaction(["quiz"], "readonly");
      const quizStore = quizTx.objectStore("quiz");
      const quizRequest = quizStore.getAll();

      quizRequest.onsuccess = () => {
        const quizData = quizRequest.result.filter((q) => q.userEmail === user.email);

        if (quizData.length > 0) {
          console.log("Quiz Attempts:", quizData.length);
        }
      };
    })
    .catch((error) => {
      console.error("Database access failed:", error);
    });
}


function logout(){

localStorage.removeItem(
"loggedUser"
);

window.location.href =
"login.html";

}