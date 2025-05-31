document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const loginMsg = document.getElementById("loginMsg");
  const logoutBtn = document.getElementById("logoutBtn");

  // Check if user is logged in
  const isLoggedIn = localStorage.getItem("loggedIn") === "true";

  function updateUI() {
    if (isLoggedIn) {
      if (logoutBtn) logoutBtn.style.display = "inline-block";
      if (loginForm) loginForm.style.display = "none";
      if (loginMsg) loginMsg.textContent = "";
    } else {
      if (logoutBtn) logoutBtn.style.display = "none";
      if (loginForm) loginForm.style.display = "block";
    }
  }

  updateUI();

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      // Dummy auth: user = test, pass = 123
      if (email === "test@mail.com" && password === "123") {
        localStorage.setItem("loggedIn", "true");
        updateUI();
        window.location.href = "homepage.html";
      } else {
        loginMsg.textContent = "Invalid username or password.";
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("loggedIn");
      updateUI();
      window.location.href = "index.html";
    });
  }
});
