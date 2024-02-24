document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("passwordindex").value;
    if (username === "admin" && password === "mait123") {
      document.body.innerHTML = "";
      var welcomeMsg = document.createElement("h2");
      welcomeMsg.textContent = "Welcome, " + username + "!";
      document.body.appendChild(welcomeMsg);
    } else {
      alert("Invalid username or password!");
    }
  });