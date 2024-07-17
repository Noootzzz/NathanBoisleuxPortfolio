const menu = document.querySelector("#menu")
const menucontent = document.querySelector("#mobile-nav")

menu.addEventListener("click", () => {
    menucontent.classList.toggle("hidden");
    menu.textContent == "Close" ? menu.textContent = "Menu" : menu.textContent = "Close"
})