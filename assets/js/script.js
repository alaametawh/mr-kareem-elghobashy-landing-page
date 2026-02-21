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

// Nav animation
let tl = gsap.timeline()
tl.from("#nav", {
    y:-100,
    duration:0.8,
    opacity:0,
    ease: "power2.out"
})
tl.from("#logo, #navs > *", {
    y:-20,
    duration:0.5,
    opacity:0,
    stagger:0.2,
    ease:"back.out(1.7)"
})