const passwordInput = document.getElementById('password');
const resultText = document.getElementById('result');
const progressBar = document.getElementById('progress');
const tips = document.getElementById('tips').getElementsByTagName('li');

passwordInput.addEventListener('input', function () {
  const password = passwordInput.value;

  let strength = 0;

  // Criteria
  const length = password.length >= 8;
  const upper = /[A-Z]/.test(password);
  const lower = /[a-z]/.test(password);
  const number = /[0-9]/.test(password);
  const special = /[^A-Za-z0-9]/.test(password);

  // Update checklist ✅ or ❌
  tips[0].textContent = (length ? "✅" : "❌") + " At least 8 characters";
  tips[1].textContent = (upper ? "✅" : "❌") + " Contains uppercase letters";
  tips[2].textContent = (lower ? "✅" : "❌") + " Contains lowercase letters";
  tips[3].textContent = (number ? "✅" : "❌") + " Includes numbers";
  tips[4].textContent = (special ? "✅" : "❌") + " Has special characters";

  // Count how many are true
  if (length) strength++;
  if (upper) strength++;
  if (lower) strength++;
  if (number) strength++;
  if (special) strength++;

  // Set message and color
  let message = '';
  let color = 'red';
  let width = '20%';

  switch (strength) {
    case 5:
      message = 'Very Strong 💪';
      color = '#00ff00';
      width = '100%';
      break;
    case 4:
      message = 'Strong 😊';
      color = '#66ff66';
      width = '80%';
      break;
    case 3:
      message = 'Medium 😐';
      color = '#ffff00';
      width = '60%';
      break;
    case 2:
      message = 'Weak 😟';
      color = '#ff9900';
      width = '40%';
      break;
    default:
      message = 'Very Weak 😣';
      color = 'red';
      width = '20%';
      break;
  }

  resultText.textContent = `Strength: ${message}`;
  progressBar.style.width = width;
  progressBar.style.backgroundColor = color;

const togglePassword = document.querySelector(".toggle-password i");

togglePassword.addEventListener("click", () => {
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  togglePassword.classList.toggle("fa-eye");
  togglePassword.classList.toggle("fa-eye-slash");
});
