import { store } from "../store/store.js"

export function AddTask() {
    return `
    <section class="h-[calc(100vh-40px)] flex flex-col justify-center items-center">
        <form class="flex flex-col">
            <label>Agregar una tarea</label>
            <input id="inpTask" class="border rounded p-1" placeholder="Escribe una tarea" maxlength="30"/>
            <button id="addTask" class="bg-blue-200 rounded mt-5">Añadir tarea</button>
        </form>
    </section>`
}

function increaseId(){
    let id = 0
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
    btnAddTask.addEventListener('click', () => {
        const task = new Task(
            sumarId(),
            inpTask.value
        )
        inpTask.value = ''
        listTask.push(task)

        
        sessionStorage.setItem('listTask', JSON.stringify(listTask))
        
        /* store.tasks.push(task) */
    })
    
}
