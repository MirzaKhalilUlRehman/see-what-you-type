// let text = document.querySelector(".text");
// window.addEventListener("keydown", (val)=>{
//     if (val.key === " ") text.textContent= "Space";
//     else
//     text.textContent= val.key;
// });
const text = document.querySelector(".text");

// Map some keys to prettier names
const keyMap = {
    " ": "Space",
    "Enter": "Enter",
    "Shift": "Shift",
    "Control": "Ctrl",
    "Alt": "Alt",
    "Backspace": "Backspace",
    "Tab": "Tab",
    "ArrowUp": "↑",
    "ArrowDown": "↓",
    "ArrowLeft": "←",
    "ArrowRight": "→",
    "Escape": "Esc"
};

// Function to display key
function showKey(e) {
    const keyName = keyMap[e.key] || e.key;
    text.textContent = keyName.length === 1 ? keyName.toUpperCase() : keyName;

    // Add a quick animation class
    text.classList.add("active");
    setTimeout(() => text.classList.remove("active"), 150);
}

// Listen for keydown
window.addEventListener("keydown", showKey);
