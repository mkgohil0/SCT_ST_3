const passwordInput = document.getElementById("password");
const strengthDisplay = document.getElementById("strength");
const criteriaList = document.querySelectorAll("#criteria li");
const togglePassword = document.querySelector(".toggle-password i");

passwordInput.addEventListener("input", function () {
  const value = passwordInput.value;
  let strength = 0;

  const checks = [
    value.length >= 8,
    /[A-Z]/.test(value),
    /[a-z]/.test(value),
    /[0-9]/.test(value),
    /[^A-Za-z0-9]/.test(value)
  ];

  checks.forEach((check, index) => {
    const icon = criteriaList[index].querySelector("i");
    if (check) {
      icon.className = "fas fa-check-circle icon pass";
      strength++;
    } else {
      icon.className = "fas fa-times-circle icon fail";
    }
  });

  if (value === "") {
    strengthDisplay.textContent = "-";
    strengthDisplay.style.color = "black";
  } else if (strength <= 2) {
    strengthDisplay.textContent = "Weak";
    strengthDisplay.style.color = "crimson";
  } else if (strength === 3 || strength === 4) {
    strengthDisplay.textContent = "Medium";
    strengthDisplay.style.color = "orange";
  } else {
    strengthDisplay.textContent = "Strong";
    strengthDisplay.style.color = "green";
  }
});

togglePassword.addEventListener("click", () => {
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  togglePassword.classList.toggle("fa-eye");
  togglePassword.classList.toggle("fa-eye-slash");
});
