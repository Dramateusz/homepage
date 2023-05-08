let buttonTheme = document.querySelector(".buttonTheme");
let themeName = document.querySelector(".themeName");
let body = document.querySelector(".body");

buttonTheme.addEventListener("click", () => {
    body.classList.toggle("dark");
    themeName.innerText = body.classList.contains("dark") ? "jasne" : "szare";
}
)