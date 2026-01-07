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


// Taask Manager
// En este ejemplo accedo primero al elemento padre y luego, en base al elemento padre uso el query selecetor para buscar los componentes dentro del padre
const manageTaskElements = document.querySelector('#task-manager')
const inputTask = manageTaskElements.querySelector('input')
const buttonAddTask = manageTaskElements.querySelector('button')
const alerta = document.querySelector("#alerta")
/* Elements List container */
const taskList = document.getElementById('task-list')
const item = document.querySelector(".task-item") 
const items = document.querySelectorAll(".task-item")



buttonAddTask.addEventListener('click', () => {
    if (inputTask.value.length <= 0) {
        alerta.textContent = "Escribe una tarea...!"
    }
    else {
        alerta.textContent = ""
        const n = item.cloneNode(true)
        taskList.appendChild(n)
        n.querySelector('span').textContent = inputTask.value
        inputTask.value = ""
    }
})


/* const t = item.querySelector("div.size-5")
    console.log(t); */
    
items.forEach(item => {
    item.addEventListener('click', () => {
        const t = item.querySelector("div.size-5")
        
        if (t.childElementCount == 0) {
            
        }
        else if (t.childElementCount == 1){
            t.classList.add('bg-white')
            t.removeChild(t.children[0])
        }
    })
});


/* Age validate */
const btnAge = document.querySelector('#button-age')
const edad = document.getElementById('input-age')

const accessLabel = document.getElementById('access-label')
console.log(accessLabel.textContent);


btnAge.addEventListener('click',()=>{
    if (edad.value >= 18) {
        accessLabel.classList.remove('hidden')
    }else{
        alert("eres menor de edad")
        accessLabel.classList.add('hidden')
    }
})