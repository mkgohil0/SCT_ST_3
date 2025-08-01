const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

const strengthText = document.getElementById('strength');
const checks = {
  length: document.getElementById('length'),
  uppercase: document.getElementById('uppercase'),
  lowercase: document.getElementById('lowercase'),
  number: document.getElementById('number'),
  special: document.getElementById('special'),
};

passwordInput.addEventListener('input', () => {
  const value = passwordInput.value;

  let strength = 0;

  // Length
  if (value.length >= 8) {
    checks.length.classList.add('valid');
    checks.length.classList.remove('invalid');
    strength++;
  } else {
    checks.length.classList.add('invalid');
    checks.length.classList.remove('valid');
  }

  // Uppercase
  if (/[A-Z]/.test(value)) {
    checks.uppercase.classList.add('valid');
    checks.uppercase.classList.remove('invalid');
    strength++;
  } else {
    checks.uppercase.classList.add('invalid');
    checks.uppercase.classList.remove('valid');
  }

  // Lowercase
  if (/[a-z]/.test(value)) {
    checks.lowercase.classList.add('valid');
    checks.lowercase.classList.remove('invalid');
    strength++;
  } else {
    checks.lowercase.classList.add('invalid');
    checks.lowercase.classList.remove('valid');
  }

  // Numbers
  if (/[0-9]/.test(value)) {
    checks.number.classList.add('valid');
    checks.number.classList.remove('invalid');
    strength++;
  } else {
    checks.number.classList.add('invalid');
    checks.number.classList.remove('valid');
  }

  // Special characters
  if (/[^A-Za-z0-9]/.test(value)) {
    checks.special.classList.add('valid');
    checks.special.classList.remove('invalid');
    strength++;
  } else {
    checks.special.classList.add('invalid');
    checks.special.classList.remove('valid');
  }

  // Set strength text
  const labels = ['Very Weak', 'Weak', 'Medium', 'Strong', 'Very Strong'];
  strengthText.textContent = `Strength: ${labels[strength - 1] || '-'}`;
});

// Toggle password visibility
togglePassword.addEventListener('click', () => {
  const type = passwordInput.getAttribute('type');
  passwordInput.setAttribute('type', type === 'password' ? 'text' : 'password');
});
