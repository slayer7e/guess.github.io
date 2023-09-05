// script.js
document.addEventListener("DOMContentLoaded", function () {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;

    const guessInput = document.getElementById("guess");
    const submitButton = document.getElementById("submit");
    const message = document.getElementById("message");

    submitButton.addEventListener("click", function () {
        const userGuess = parseInt(guessInput.value);
        attempts++;

        if (isNaN(userGuess)) {
            message.textContent = "Please enter a valid number.";
        } else if (userGuess < secretNumber) {
            message.textContent = "Too low! Try again.";
        } else if (userGuess > secretNumber) {
            message.textContent = "Too high! Try again.";
        } else {
            message.textContent = `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts!`;
            submitButton.disabled = true;
            guessInput.disabled = true;
        }
    });
});
