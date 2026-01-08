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
const deleteButton = document.querySelector(".delete-button")
const plantilla = item.cloneNode(true)



buttonAddTask.addEventListener('click', () => {
    if (inputTask.value.length <= 0) {
        alerta.textContent = "Escribe una tarea...!"
    }
    else {
        alerta.textContent = ""
        const n = plantilla.cloneNode(true)
        taskList.appendChild(n)
        n.querySelectorAll('span')[1]
            .textContent = inputTask.value
        inputTask.value = ""
    

    }
})

taskList.addEventListener('click' ,(e)=>{
    const deleteButton = e.target.closest('.delete-button');
    //Como puedo dar click en cualquier parte del contenedor lista, validamos que lo que se este guadando en delete button no sea null
    if(!deleteButton) return
    const taskItem = deleteButton.closest('.task-item');
    taskItem.remove()
    
})

taskList.addEventListener('click', (e) => { // se agrega el e(EVENTO) para delegaciones de eventos, ya que si yo agrego un elemento nuevo no se le aplica el evento, de esta forma cada que haga click lee el evento y recupera el elemento con closest
    
    //importante el e(EVENTO) no significa que haga click en taskList, si no en el elemento más interno, en este ejemplo le doy click al span
    //el closest detecta el click en el span y busca la clase div.size-5 en este caso el div padre
    /* <div
            class="size-5 rounded border-2 border-gray flex items-center justify-center cursor-pointer">
            <span class="hidden material-symbols-outlined text-white text-[16px]">check</span>
        </div>I */
    const item = e.target.closest('div.size-5'); // clase del item, retorna el item con la clase más cercana hacia arriba (osea padre, abuelo, etc)

    /* Segundo caso */
    //En este caso funciona dando click en cualquier parte del elemento task item para que busque la clase task-item
    //importante: el closest busca padres, abuelos... y así mismo
    //const item = e.target.closest('.task-item'); // clase del item, retorna el item con la clase más cercana hacia arriba (osea padre, abuelo, etc)
    
    if (!item) return;

    /* Obtengo los elemento para cambiarle las clases a los divs (checkbox)*/
    const t = item
    const span = t.querySelector('span');
    
    /* acceder al texto */
    const itemText = e.target.closest('.task-item ') 
    const text = itemText.querySelector('.text-sm')
    text.classList.toggle('line-through')
    text.classList.toggle('text-gray-400')
    
    
    
    span.classList.toggle('hidden');
    t.classList.toggle('bg-primary');

});




/* Age validate */
const btnAge = document.querySelector('#button-age')
const edad = document.getElementById('input-age')

const accessLabel = document.getElementById('access-label')


btnAge.addEventListener('click', () => {
    if (edad.value >= 18) {
        accessLabel.classList.remove('hidden')
    } else {
        alert("eres menor de edad")
        accessLabel.classList.add('hidden')
    }
})

/* Dark Mode */
const btnDarkMode = document.getElementById('toggle-dark-mode')
const demoElement =  document.getElementById('demo-section')
btnDarkMode.addEventListener('change', ()=>{

    demoElement.classList.toggle('dark')
})

const btnDarkModeHeader = document.getElementById('toggle-dark-mode-header')
btnDarkModeHeader.addEventListener('click', ()=>{
    let isDark = document.body.classList.toggle('dark')
    const icon = btnDarkModeHeader.querySelector('span')
    icon.innerText = isDark ? "dark_mode" : "light_mode"    

})