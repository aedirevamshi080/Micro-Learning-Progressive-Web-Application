async function syncData() {
  if (!navigator.onLine) {
    return;
  }

  try {
    const db = await window.dbPromise;
    const tx = db.transaction(["progress", "quiz"], "readonly");
    const progressStore = tx.objectStore("progress");
    const quizStore = tx.objectStore("quiz");

    const progressRequest = progressStore.getAll();
    const quizRequest = quizStore.getAll();

    progressRequest.onsuccess = async () => {
      if (!progressRequest.result.length) {
        return;
      }

      try {
        await fetch("/api/sync/progress", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(progressRequest.result)
        });
      } catch (err) {
        console.error("Progress sync error:", err);
      }
    };

    quizRequest.onsuccess = async () => {
      if (!quizRequest.result.length) {
        return;
      }

      try {
        await fetch("/api/sync/quiz", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(quizRequest.result)
        });
      } catch (err) {
        console.error("Quiz sync error:", err);
      }
    };
  } catch (err) {
    console.error("Sync failed:", err);
  }
}

window.addEventListener("online", syncData);