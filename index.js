const $panel = document.querySelector(".panel")

document.addEventListener("click", e => {
    if (e.target.matches(".panel--btn") || e.target.matches(".panel--btn *")) {
        $panel.classList.toggle("panelIsActive")
        document.querySelector(".panel--btn").classList.toggle("is-active")
    }
})