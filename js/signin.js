let emailInput = document.getElementById("emailInput");
let nameInput = document.getElementById("nameInput");
let passInput = document.getElementById("passInput");
let users = [];
if (localStorage.getItem("users") != null) {
  users   = JSON.parse(localStorage.getItem("users"));
}

function signin(){
  let currentuser = users.find((el) => {
    return el.email == emailInput.value && el.pass == passInput.value;
  });
  if(currentuser==undefined){
    document.getElementById("incorrect").innerHTML("incorrect email or password ");
  }else{
    localStorage.setItem("currentuser",JSON.stringify(currentuser.name))
    window.location.href="welcom.html"
  }
}
console.log(signin());