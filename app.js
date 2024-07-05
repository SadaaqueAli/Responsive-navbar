let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");
let iconElement = document.getElementById("icon");

icon.addEventListener("click", () => {
    ul.classList.toggle("showData");
    

    if (ul.classList.contains("showData")) {
        iconElement.className = "fa-solid fa-xmark";
    } else {
        iconElement.className = "fa-solid fa-list-ul";
    }
});
