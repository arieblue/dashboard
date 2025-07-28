function login() {
  const password = document.getElementById("password").value;
  if (password === "arieblue2025") {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Password salah!");
  }
  return false;
}