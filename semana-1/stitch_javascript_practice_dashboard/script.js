/* Counter */
const counter = document.getElementById('counter')
const buttonAddCounter = document.getElementById('add-counter')
const buttonSubtractCounter = document.getElementById('subtract-counter')
const buttonResetCounter = document.getElementById('reset-counter')
/* Counter events */
function buttonsCounter(element, func){
    element.addEventListener('click', ()=>{
        switch (func) {
            case "add":
                ++counter.innerText;
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


