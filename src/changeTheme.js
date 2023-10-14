function changeTheme() {
    let body = document.querySelector("body");
    body.classList.toggle("dark");
}

let themeButton = document.getElementById("change-theme");
themeButton.addEventListener("click", changeTheme);