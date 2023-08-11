let emailInput = document.getElementById("emailInput");
let nameInput = document.getElementById("nameInput");
let passInput = document.getElementById("passInput");
let users = [];
function signup(){
  let index = users.findIndex((el) => {
    return el.name == nameInput.value && el.email == emailInput.value;
  });
  if (index == -1) {
    let objuser = {
      name: nameInput.value,
      email: emailInput.value,
      pass: passInput.value,
    };
    users.push(objuser);
    localStorage.setItem("users", JSON.stringify(objuser));
    window.location.href = "signin.html";
  } else {
    document.getElementById("incorrect").innerHTML("already Exist!");
  }
  if (localStorage.getItem("currentuser") != null) {
    document.getElementById("welcom").innerHTML =
      "welcom" + JSON.parse(localStorage.getItem("currentuser"));
  }
}
