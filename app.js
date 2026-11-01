// W01 - Hello World / Initial Project Setup
console.log("Hello World - Genealogy Brick Wall Helper loaded successfully.");

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn-action");
    const output = document.getElementById("greeting-output");

    btn.addEventListener("click", () => {
        output.textContent = "Hello World! The initial logic engine is working correctly.";
        output.style.color = "#004A8D";
    });
});