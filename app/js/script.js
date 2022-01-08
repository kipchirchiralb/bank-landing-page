const btnHumburger = document.querySelector("#btnHumburger")
const body = document.querySelector("body")
const header = document.querySelector(".header")
const overlay = document.querySelector(".overlay")
const fadeElements = document.querySelectorAll(".has-fade")

btnHumburger.addEventListener("click", () => {
    if (header.classList.contains("open")) {
        //close humburger manu
        header.classList.remove("open")
        body.classList.remove("noscroll")

        fadeElements.forEach(function(element) {
            element.classList.remove("fade-in")
            element.classList.add("fade-out")
        })
    } else {
        //open humberger menu
        header.classList.add("open")
        body.classList.add("noscroll")
        fadeElements.forEach(function(element) {
            element.classList.add("fade-in")
            element.classList.remove("fade-out")
        })

    }


})