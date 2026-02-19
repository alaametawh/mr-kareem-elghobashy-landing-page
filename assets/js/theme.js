const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

let savedTheme = localStorage.getItem("theme") || systemTheme
let theme = savedTheme || systemTheme
document.documentElement.setAttribute("data-theme", theme);