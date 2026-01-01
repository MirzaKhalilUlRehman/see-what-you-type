let text = document.querySelector(".text");
window.addEventListener("keydown", (val)=>{
    if (val.key === " ") text.textContent= "Space";
    else
    text.textContent= val.key;
});