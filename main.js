function signup() {
  event.preventDefault();
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let user = {
    username: username,
    email: email,
    password: password,
  };
  let json = JSON.stringify(user);
  localStorage.setItem(username, json);
  alert("dang ky thanh cong");
}
function login() {
  event.preventDefault();
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let user = localStorage.getItem(username);
  let data = JSON.parse(user);
  if (!user) {
    alert("vui long nhap username password");
  } else if (
    username == data.username &&
    email == data.email &&
    password == data.password
  ) {
    alert("dang nhap thanh cong");
    window.location.href = "todolist.html";
  } else {
    alert("dang nhap that bai");
  }
}
