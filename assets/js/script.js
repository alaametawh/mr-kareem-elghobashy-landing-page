// theme toggle btn
const themeToggleBtn = document.querySelector("div#themeToggler")
// Toggle theme with button + local storage
function toggleTheme() {
    let toggledTo = document.documentElement.getAttribute("data-theme") == "dark"? "light": "dark"; 
    document.documentElement.setAttribute("data-theme",toggledTo)
    localStorage.setItem("theme", toggledTo)
    console.log(localStorage.getItem("theme"))
}
themeToggleBtn.addEventListener("click", toggleTheme)