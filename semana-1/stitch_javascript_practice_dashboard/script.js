const counter = document.getElementById('counter')
const buttonSubtract = document.getElementById('subtract-counter')
const buttonReset = document.getElementById('reset-counter')
const buttonAdd = document.getElementById('add-counter')

function clicksButtonsInCounter (elemnt, func){
    elemnt.addEventListener('click', () =>{
        switch (func) {
            case "add":
                console.log(counter.innerText++)
                break;
            case "subtract":
                --counter.innerText
                break
            case "reset":
                counter.innerText = 0 
                break      
            default:
                break;
        }
    })
}
clicksButtonsInCounter(buttonAdd, "add")
clicksButtonsInCounter(buttonSubtract, "subtract")
clicksButtonsInCounter(buttonReset, "reset")
