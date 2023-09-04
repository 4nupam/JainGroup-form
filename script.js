const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const outputName = document.getElementById("outputName");
const outputEmail = document.getElementById("outputEmail");
const outputDiv = document.getElementById("output");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Reset previous errors
    nameError.textContent = "";
    emailError.textContent = "";

    // Remove white space from input values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    // Validations
    if (!name) {
        nameError.textContent = "Name required";
    }

    if (!email) {
        emailError.textContent = "Email required";
    }

    // Displaying
    outputName.textContent = name;
    outputEmail.textContent = email;
    outputDiv.style.display = "block";
});
