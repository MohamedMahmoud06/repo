let emailInput = document.getElementById("emailInput");
let nameInput = document.getElementById("nameInput");
let passInput = document.getElementById("passInput");
let users = [];

if (localStorage.getItem("users") !== null) {
  users = JSON.parse(localStorage.getItem("users"));
}

let signin = document.getElementById("signin");
if (signin !== null) {
  signin.addEventListener("click", function () {
    let currentUser = users.find((el) => {
      return el.email === emailInput.value && el.pass === passInput.value;
    });
    if (currentUser === undefined) {
      showAlert("Incorrect email or password");
    } else {
      localStorage.setItem("currentuser", currentUser.name);
      window.location.href = "welcom.html";
    }
  });
}

let signup = document.getElementById("signup");
if (signup !== null) {
  signup.addEventListener("click", function () {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email regex pattern
    let nameRegex = /^[A-Za-z\s]+$/; // Name regex pattern
    let passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/; // Password regex pattern

    if (!nameRegex.test(nameInput.value)) {
      showAlert("Invalid name");
    } else if (!emailRegex.test(emailInput.value)) {
      showAlert("Invalid email");
    } else if (!passRegex.test(passInput.value)) {
      showAlert("Invalid password");
    } else {
      let index = users.findIndex((el) => {
        return el.name === nameInput.value && el.email === emailInput.value;
      });
      if (index === -1) {
        let objuser = {
          name: nameInput.value,
          email: emailInput.value,
          pass: passInput.value,
        };
        users.push(objuser);
        localStorage.setItem("users", JSON.stringify(users));
        showSuccess("Success");
        window.location.href = "signin.html";
      } else {
        showAlert("User already exists!");
      }
    }
  });
}

function showSuccess(message) {
  let successElement = document.createElement("p");
  successElement.textContent = message;
  successElement.style.color = "green";
  document.body.appendChild(successElement);
}

function showAlert(message) {
  alert(message);
}

if (localStorage.getItem("currentuser") !== null) {
  document.getElementById("welcom").innerHTML = "Welcome " + localStorage.getItem("currentuser");
}