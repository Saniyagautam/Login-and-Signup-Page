document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var pass1 = document.getElementById("password1").value;
    var username1 = document.getElementById("username1").value;
    var pass2 = document.getElementById("password2").value;
    if (pass1 !== pass2) {
        alert("Both the passwords should match");
    } 
    else {
        document.body.innerHTML = "";
        var welcomeMsg = document.createElement("h2");
        welcomeMsg.textContent = "Welcome, " + username1 + "!";
        document.body.appendChild(welcomeMsg);
    }
  });
