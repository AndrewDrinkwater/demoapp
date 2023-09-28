document.addEventListener("DOMContentLoaded", function () {
    // JavaScript code to handle button click

    // Function to perform an action when the "Insult me" button is clicked
    document.getElementById("insultButton").addEventListener("click", () => {
        alert("You're a JavaScript wizard!");
    });

    // Function to open Google when the "Open Google" button is clicked
    document.getElementById("openGoogleButton").addEventListener("click", () => {
        window.open("https://www.google.com", "_blank");
    });

    // Function to invert colors when the "Invert" button is clicked
    document.getElementById("invertButton").addEventListener("click", () => {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    });

    // Function to make the text smaller when the "Go Small" button is clicked
    document.getElementById("goSmallButton").addEventListener("click", () => {
        document.body.style.fontSize = "12px";
    });

    // Function to make the text larger when the "Go Big" button is clicked
    document.getElementById("goBigButton").addEventListener("click", () => {
        document.body.style.fontSize = "24px";
    });
});
