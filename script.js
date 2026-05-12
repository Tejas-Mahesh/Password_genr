// script.js

const passwordBox = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");
const lengthSlider = document.getElementById("lengthSlider");
const lengthValue = document.getElementById("lengthValue");
const message = document.getElementById("message");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+{}[]<>?/";

lengthSlider.addEventListener("input", () => {
    lengthValue.textContent = lengthSlider.value;
});

function generatePassword() {

    let characters = "";

    if (uppercase.checked) characters += upperChars;
    if (lowercase.checked) characters += lowerChars;
    if (numbers.checked) characters += numberChars;
    if (symbols.checked) characters += symbolChars;

    if (characters === "") {
        message.textContent = "Select at least one option!";
        return;
    }

    let password = "";

    for (let i = 0; i < lengthSlider.value; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    passwordBox.value = password;

    message.textContent = "Password Generated!";
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {

    if (passwordBox.value === "") {
        message.textContent = "Generate a password first!";
        return;
    }

    navigator.clipboard.writeText(passwordBox.value);

    message.textContent = "Password Copied!";
});

generatePassword();