const form = document.getElementById("studentForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Inputs
  const name = form.name.value.trim();
  const username = form.username.value.trim();
  const college = form.college.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value;
  const address = form.address.value.trim();

  // Error elements
  const nameError = document.getElementById("nameError");
  const usernameError = document.getElementById("usernameError");
  const collegeError = document.getElementById("collegeError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const addressError = document.getElementById("addressError");

  // Clear errors
  nameError.textContent = "";
  usernameError.textContent = "";
  collegeError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  addressError.textContent = "";

  let isValid = true;

  // Name required
  if (!name) {
    nameError.textContent = "Name is required";
    isValid = false;
  }

  // Username lowercase only
  if (username !== username.toLowerCase()) {
    usernameError.textContent = "Username must be lowercase only";
    isValid = false;
  }

  // College required
  if (!college) {
    collegeError.textContent = "College is required";
    isValid = false;
  }

  // Email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Enter a valid email address";
    isValid = false;
  }

  // Password length
  if (password.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters";
    isValid = false;
  }

  // Address required
  if (!address) {
    addressError.textContent = "Address is required";
    isValid = false;
  }

  if (isValid) {
    alert("Registration successful!");
    form.reset();
  }
});
