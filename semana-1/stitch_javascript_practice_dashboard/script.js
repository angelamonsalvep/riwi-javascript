/* Counter */
const counter = document.querySelector('#counter')
const buttonAddCounter = document.getElementById('add-counter')
const buttonSubtractCounter = document.getElementById('subtract-counter')
const buttonResetCounter = document.getElementById('reset-counter')

/* Counter events */
function buttonsCounter(element, func) {
    element.addEventListener('click', () => {
        switch (func) {
            case "add":
                counter.innerText++;
                break
            case "subtract":
                --counter.innerText;
                break
            case "reset":
                counter.innerText = 0;
                break
        }
    })
}

buttonsCounter(buttonAddCounter, "add")
buttonsCounter(buttonSubtractCounter, "subtract")
buttonsCounter(buttonResetCounter, "reset")

/* Hello world generator */
const nameGreeting = document.getElementById('name-greeting')
const waittingBox = document.querySelector('body > div > main > div > div.grid.grid-cols-1.md\\:grid-cols-2.xl\\:grid-cols-3.gap-6 > div:nth-child(1) > div.p-5.flex.flex-col.gap-4.flex-1 > div > div')
const buttonGreet = document.querySelector('body > div > main > div > div.grid.grid-cols-1.md\\:grid-cols-2.xl\\:grid-cols-3.gap-6 > div:nth-child(1) > div.p-5.flex.flex-col.gap-4.flex-1 > div > button')


nameGreeting.addEventListener("keyup", (e) => {
    if ((e.target.value).trim().length > 0) {
        waittingBox.textContent = "Ok..."
        waittingBox.style.backgroundColor = "limegreen"
        buttonGreet.addEventListener('click', () => {
            // buttonGreet.setAttribute()
            if ((e.target.value).trim().length > 0) {
                alert(`Bienvenido ${e.target.value}`);
                e.target.value = null
                waittingBox.textContent = "Waiting for input..."
                waittingBox.style.backgroundColor = "rgb(246 247 248 / var(--tw-bg-opacity, 1))"
            }
        })
    }
    else {
        waittingBox.textContent = "Waiting for input..."
        waittingBox.style.backgroundColor = "rgb(246 247 248 / var(--tw-bg-opacity, 1))"
    }
})
