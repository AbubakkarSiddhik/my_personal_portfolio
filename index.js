
// Predefined valid code
const validCode = "2005";

function verifyCode() {
    const userInput = document.getElementById("codeInput").value.trim();
    const messageDiv = document.getElementById("message");

    if (userInput === validCode) {
        messageDiv.innerHTML = "<span class='success'>Code verified! Redirecting...</span>";
        setTimeout(() => {
            window.location.href = "index1.html"; // Replace with your main page URL
        }, 2000);
    } else {
        messageDiv.innerHTML = "<span class='error'>Invalid code! Please try again.</span>";
    }
}
