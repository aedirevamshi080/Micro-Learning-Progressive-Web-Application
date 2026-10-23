let db;

window.dbPromise = new Promise((resolve, reject) => {
  const request = indexedDB.open("MicroLearningDB", 1);

  request.onupgradeneeded = function (event) {
    db = event.target.result;

    if (!db.objectStoreNames.contains("users")) {
      db.createObjectStore("users", {
        keyPath: "email"
      });
    }

    if (!db.objectStoreNames.contains("courses")) {
      db.createObjectStore("courses", {
        keyPath: "id"
      });
    }

    if (!db.objectStoreNames.contains("progress")) {
      db.createObjectStore("progress", {
        keyPath: "id",
        autoIncrement: true
      });
    }

    if (!db.objectStoreNames.contains("quiz")) {
      db.createObjectStore("quiz", {
        keyPath: "id",
        autoIncrement: true
      });
    }
  };

  request.onsuccess = function (event) {
    db = event.target.result;
    window.db = db;
    console.log("Database Connected");
    resolve(db);
  };

  request.onerror = function (event) {
    console.error("Database Error", event.target.error);
    reject(event.target.error);
  };
});