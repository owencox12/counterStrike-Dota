window.addEventListener("load", function () {
    let burger = document.querySelector(".header__burger")
    let burgerMenu = document.querySelector(".header__burger_list")
    burger.addEventListener("click", function () {
        burger.classList.toggle("header__burger_active")
        burgerMenu.classList.toggle("header__burger_list_active")
    })

    let timer1 = new timer(310, '.timer1', 1000)
    timer1.start()
    let timer2 = new timer(610, '.timer2', 1000)
    timer2.start()
    let timer3 = new timer(1800, '.timer3', 1000)
    timer3.start()
    let timer4 = new timer(2600, '.timer4', 1000)
    timer4.start()
    let timer5 = new timer(7200, '.timer5', 1000)
    timer5.start()
    let timer6 = new timer(10800, '.timer6', 1000)
    timer6.start()
    let timer7 = new timer(11600, '.timer7', 1000)
    timer7.start()
})
class timer {
    constructor(number, selector, sec) {
        this.i = number
        this.res = document.querySelector(selector)
        let abs;
        this.time = sec
    }
    start() {
        this.abs = setInterval(() => {
            this.i--
            this.renderTime()
            if (this.i <= 0) {
                clearInterval(this.abs)
            }
        }, this.time)
    }
    renderTime() {
        let h = parseInt(this.i / 3600);
        let hs = this.i % 3600;
        let m = parseInt(hs /  60);
        let s = hs % 60;
        this.res.innerHTML =`${h}:${m}:${s}`;
    }
    stop() {
        clearInterval(this.abs)
    }
}