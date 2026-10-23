document.addEventListener("DOMContentLoaded", () => {
  window.dbPromise
    .then(() => {
      const registerForm = document.getElementById("registerForm");
      const loginForm = document.getElementById("loginForm");

      if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
          e.preventDefault();

          const name = document.getElementById("name").value;
          const email = document.getElementById("email").value;
          const password = document.getElementById("password").value;

          const tx = db.transaction(["users"], "readwrite");
          const store = tx.objectStore("users");

          store.add({
            name,
            email,
            password
          });

          tx.oncomplete = () => {
            alert("Registration Successful");
            window.location.href = "login.html";
          };

          tx.onerror = () => {
            alert("Registration failed. Please try again.");
          };
        });
      }

      if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
          e.preventDefault();

          const email = document.getElementById("email").value;
          const password = document.getElementById("password").value;

          const tx = db.transaction(["users"], "readonly");
          const store = tx.objectStore("users");
          const request = store.get(email);

          request.onsuccess = function () {
            const user = request.result;

            if (user && user.password === password) {
              localStorage.setItem("loggedUser", JSON.stringify(user));
              alert("Login Successful");
              window.location.href = "dashboard.html";
            } else {
              alert("Invalid Email or Password");
            }
          };

          request.onerror = function () {
            alert("Login failed. Please try again.");
          };
        });
      }
    })
    .catch((error) => {
      console.error("Database initialization failed:", error);
    });
});