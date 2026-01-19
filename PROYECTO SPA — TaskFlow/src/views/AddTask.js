import { store } from "../store/store.js"

export function AddTask() {
    return `
    <section class="h-[calc(100vh-64px)] flex flex-col justify-center items-center">
        <form class="w-[28%] flex flex-col items-center">
            <label for="inpTask">Agregar una tarea</label>
            <input id="inpTask" class="border rounded p-1" placeholder="Escribe una tarea" maxlength="30"/>
            <button id="addTask" class="p-2 w-1/2 text-white bg-rose-500 rounded mt-5">Añadir tarea</button>
        </form>
    </section>`
}

function increaseId(){
    let listTask = JSON.parse(sessionStorage.getItem("listTask")) || []
    // si la lista tiene algun valor, me va a traer el ultimo elemento de la lista.id de lo contrario será 0
    let id = listTask.length ? listTask.at(-1).id : 0
    
    return function(){
        id++
        return id
    }
}
const sumarId = increaseId()

class Task {
    constructor(id, name, state = false){
        this.id = id
        this.name = name
        this.state = state
    }
}

export function addTask(){
    const btnAddTask = document.getElementById('addTask')
    const inpTask = document.getElementById('inpTask')
    let listTask = JSON.parse(sessionStorage.getItem('listTask')) || []
    inpTask.classList.add('placeholder:text-gray-400')
    btnAddTask.addEventListener('click', () => {
        if (inpTask.value && inpTask.value.trim()) {
            
            const task = new Task(
                sumarId(),
                inpTask.value
            )
            inpTask.value = ''
            listTask.push(task)
    
            
            sessionStorage.setItem('listTask', JSON.stringify(listTask))
            location.hash = '#/tasks'
            
        }
        else{
            inpTask.classList.add('placeholder:text-red-400')
            inpTask.setAttribute('placeholder', "Escribe un nombre para la tarea")
        }
        /* store.tasks.push(task) */
    })
    
}
