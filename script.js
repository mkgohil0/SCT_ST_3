const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numberEl = document.getElementById("number");
const specialEl = document.getElementById("special");
const strengthText = document.getElementById("strength");

passwordInput.addEventListener("input", () => {
  const value = passwordInput.value;

  let strengthScore = 0;

  // Length
  if (value.length >= 8) {
    lengthEl.classList.remove("invalid");
    lengthEl.classList.add("valid");
    lengthEl.textContent = "✔ At least 8 characters";
    strengthScore++;
  } else {
    lengthEl.classList.add("invalid");
    lengthEl.classList.remove("valid");
    lengthEl.textContent = "✖ At least 8 characters";
  }

  // Uppercase
  if (/[A-Z]/.test(value)) {
    uppercaseEl.classList.remove("invalid");
    uppercaseEl.classList.add("valid");
    uppercaseEl.textContent = "✔ Contains uppercase letters";
    strengthScore++;
  } else {
    uppercaseEl.classList.add("invalid");
    uppercaseEl.classList.remove("valid");
    uppercaseEl.textContent = "✖ Contains uppercase letters";
  }

  // Lowercase
  if (/[a-z]/.test(value)) {
    lowercaseEl.classList.remove("invalid");
    lowercaseEl.classList.add("valid");
    lowercaseEl.textContent = "✔ Contains lowercase letters";
    strengthScore++;
  } else {
    lowercaseEl.classList.add("invalid");
    lowercaseEl.classList.remove("valid");
    lowercaseEl.textContent = "✖ Contains lowercase letters";
  }

  // Number
  if (/\d/.test(value)) {
    numberEl.classList.remove("invalid");
    numberEl.classList.add("valid");
    numberEl.textContent = "✔ Includes numbers";
    strengthScore++;
  } else {
    numberEl.classList.add("invalid");
    numberEl.classList.remove("valid");
    numberEl.textContent = "✖ Includes numbers";
  }

  // Special Character
  if (/[^A-Za-z0-9]/.test(value)) {
    specialEl.classList.remove("invalid");
    specialEl.classList.add("valid");
    specialEl.textContent = "✔ Has special characters";
    strengthScore++;
  } else {
    specialEl.classList.add("invalid");
    specialEl.classList.remove("valid");
    specialEl.textContent = "✖ Has special characters";
  }

  // Strength text
  const levels = ["Very Weak", "Weak", "Medium", "Strong", "Very Strong"];
  strengthText.textContent = `Strength: ${levels[strengthScore] || "-"}`;
});

// Toggle Password Visibility
togglePassword.addEventListener("click", () => {
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  togglePassword.textContent = type === "password" ? "👁" : "🙈";
});
