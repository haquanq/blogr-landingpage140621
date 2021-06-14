class dropMenu {
    constructor() {
        this.link = document.querySelectorAll(".nav_link > a")
        this.menu = document.querySelectorAll(".nav_link__dropmenu")
        this.arrow = document.querySelectorAll(".nav_link img")
        this.open = [false, false, false]
        this.toggleOpen()
    }

    toggleOpen() {
        for (let i = 0; i < this.link.length; i++) {
            this.link[i].addEventListener("click", () => {
                if (this.open[i] == false) {
                    for (let i = 0; i < this.link.length; i++) {
                        this.open[i] = false
                    }
                    this.open[i] = true
                    
                    this.link[i].style.opacity = 1
                    this.arrow[i].style.transform = "rotate(180deg)"

                    this.menu[i].style.display = "flex"
                    setTimeout(() => this.menu[i].style.opacity = 1, 30)

                    for (let i = 0; i < this.link.length; i++) {
                        if (this.open[i] == false) {
                            this.arrow[i].style.transform = null
                            this.link[i].style.opacity = null
                            this.menu[i].style.opacity = 0
                            setTimeout(() => this.menu[i].style.display = null, 200)
                        }
                    }
                    // setTimeout(() => {
                    //     for (let i = 0; i < this.link.length; i++) {
                    //         this.open[i] = false
                    //         this.arrow[i].style.transform = null
                    //         this.link[i].style.opacity = null
                    //         this.menu[i].style.opacity = 0
                    //         setTimeout(() => this.menu[i].style.display = null, 200)
                    //     }
                    // }, 10000)
                } else {
                    this.open[i] = false
                    this.arrow[i].style.transform = null
                    this.link[i].style.opacity = null

                    this.menu[i].style.opacity = 0
                    setTimeout(() => this.menu[i].style.display = null, 200)
                }

            })
        }
    }
}
    
let dropDownMenu = new dropMenu()

// ----------------------------------------------------------------------------------------------------

let menuState = false
const hambutton = document.querySelector("#ham_button")
const menu = document.querySelector(".navmenu_container")

// TOGGLE HAMBURGER MENU

hambutton.addEventListener("click", () => {
    if (menuState == false) {
        hambutton.setAttribute("class","open")
        menu.style.display = "flex"
        setTimeout(() => menu.style.opacity = 1, 30)
        menuState = true
    } else {
        setTimeout(() => menu.style.opacity = null)
        setTimeout(() => menu.style.display = null, 300)
        menuState = false
        hambutton.removeAttribute("class","open")
        hamMenu.resetModal()
    }
})

// CLOSE MODAL WHEN HAMBURGER MENU DISPLAY == NONE

window.addEventListener("resize", () => {
    if (window.innerWidth > 840 && menuState == true) {
        setTimeout(() => menu.style.opacity = null)
        setTimeout(() => menu.style.display = null, 300)
        menuState = false
        hambutton.removeAttribute("class","open")
    }
})

class hamburgerMenu {
    constructor() {
        this.link = document.querySelectorAll(".menu_tag")
        this.menu = document.querySelectorAll(".menu")
        this.menuCont = document.querySelectorAll(".menu div")
        this.arrow = document.querySelectorAll(".arrow_red")
        this.open = [false, false, false]
        this.toggleOpen()
    }

    toggleOpen() {
        for (let i = 0; i < this.link.length; i++) {
            this.link[i].addEventListener("click", () => {
                // LOOP EVERY MENU
                if (this.open[i] == false) {
                    // OVERRIDE ALL OPEN STATUS TO FALSE
                    for (let i = 0; i < this.link.length; i++) { this.open[i] = false }
                    // SET CLICKED MENU'S OPEN STATUS TO TRUE
                    this.open[i] = true
                    // INITIAL DROP DOWN MENU
                    this.arrow[i].style.transform = "rotate(180deg)"
                    this.menu[i].style.maxHeight = "300px"
                    setTimeout(() => this.menuCont[i].style.display = "flex")
                    setTimeout(() => this.menuCont[i].style.opacity = 1, 300)

                    // OTHERS MENU STATUS = FALSE => CLOSE
                    for (let i = 0; i < this.link.length; i++) {
                        if (this.open[i] == false) {
                            this.arrow[i].style.transform = null
                            setTimeout(() => this.menuCont[i].style.opacity = 0)
                            setTimeout(() => this.menuCont[i].style.display = null, 700)
                            setTimeout(() => this.menu[i].style.maxHeight = 0, 120)
                        }
                    }
                } else {
                    // IF CLICKED ON OPENED MENU ==> CLOSE
                    this.open[i] = false
                    this.arrow[i].style.transform = null
                    setTimeout(() => this.menuCont[i].style.opacity = null)
                    setTimeout(() => this.menuCont[i].style.display = null, 700)
                    setTimeout(() => this.menu[i].style.maxHeight = null, 120)
                }

            })
        }
    }
    resetModal() {
        if (menuState == false) {
            for (let i = 0; i < this.link.length; i++) {
                if (this.open[i] == true) {
                    this.open[i] = false
                    this.arrow[i].style.transform = null
                    setTimeout(() => this.menuCont[i].style.opacity = 0)
                    setTimeout(() => this.menuCont[i].style.display = null, 700)
                    setTimeout(() => this.menu[i].style.maxHeight = 0, 120)
                }
            }
        }
    }
}

let hamMenu = new hamburgerMenu()



// ----------------------------------------------------------------------------------------------------


