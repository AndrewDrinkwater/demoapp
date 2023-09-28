document.addEventListener("DOMContentLoaded", function () {
    // JavaScript code to handle button click and hover effects

    const coolButton = document.getElementById("coolButton");
    const openLinkButton = document.getElementById("openLinkButton");
    const showInfoButton = document.getElementById("showInfoButton");
    const resultText = document.getElementById("resultText");

    coolButton.addEventListener("mouseenter", () => {
        resultText.textContent = "You're cool!";
    });

    coolButton.addEventListener("mouseleave", () => {
        resultText.textContent = "Hover over a button for something cool!";
    });

    openLinkButton.addEventListener("click", () => {
        window.open("https://www.example.com", "_blank");
    });

    showInfoButton.addEventListener("click", () => {
        resultText.textContent = "We're on a mission to make the web a cooler place.";
    });
});
