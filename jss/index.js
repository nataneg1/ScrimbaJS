const firstPass = document.getElementById("pass-1");
const secondPass = document.getElementById("pass-2");
const button = document.getElementById("generate-button");

const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q",
    "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5",
    "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{",
    "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

function copyText(element) {
    const text = element.innerText;
    navigator.clipboard.writeText(text);
}

firstPass.addEventListener("click", function () {
    copyText(this);
});
secondPass.addEventListener("click", function () {
    copyText(this);
});

function generateRandPass() {
    let passLength = 10;
    let password = "";

    for (let i = 0; i < passLength; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }

    return password;
}

button.addEventListener("click", function () {
    firstPass.textContent = generateRandPass();
    secondPass.textContent = generateRandPass();
})