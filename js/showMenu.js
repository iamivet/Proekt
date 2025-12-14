function showMenu() {
    let menu = document.querySelector(".dropdown-content");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}